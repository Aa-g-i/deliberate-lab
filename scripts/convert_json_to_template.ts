import * as fs from 'fs';
import * as path from 'path';

const skipRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function convertJsonToTemplate(inputFile: string, outputFile: string, functionName: string) {
  const rawData = fs.readFileSync(inputFile, 'utf-8');
  const jsonData = JSON.parse(rawData);

  // Unpack objects (supporting both array shapes and map shapes from DB dumps)
  const experiment = jsonData.experiment || {};
  const stageConfigs: any[] = Array.isArray(jsonData.stageConfigs) ? jsonData.stageConfigs : Object.values(jsonData.stageMap || {});
  const agentMediators: any[] = Array.isArray(jsonData.agentMediators) ? jsonData.agentMediators : Object.values(jsonData.agentMediatorMap || {});
  const agentParticipants: any[] = Array.isArray(jsonData.agentParticipants) ? jsonData.agentParticipants : Object.values(jsonData.agentParticipantMap || {});

  // Precompute referenced target stages
  const allTargetStages = new Set<string>();
  function collectTargets(obj: any) {
    if (!obj || typeof obj !== 'object') return;
    if (obj.stageId) allTargetStages.add(obj.stageId);
    for (const k of Object.keys(obj)) collectTargets(obj[k]);
  }
  collectTargets({ experiment, stageConfigs, agentMediators, agentParticipants });

  const neededImports = new Set<string>();
  neededImports.add('createExperimentTemplate');
  neededImports.add('ExperimentTemplate');

  function sanitize(obj: any): any {
    if (!obj || typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) return obj.map(sanitize);

    const clone = { ...obj };
    // Delete Firebase specific metadata fields causing UnifiedTimestamp clones
    if (clone.metadata && typeof clone.metadata === 'object') {
      if (clone.metadata.dateCreated) delete clone.metadata.dateCreated;
      if (clone.metadata.dateModified) delete clone.metadata.dateModified;
    }
    return clone;
  }

  function formatAST(obj: any, indentLevel = 0, isTopLevelStage = false): string {
    const ind = '  '.repeat(indentLevel);
    const nextInd = '  '.repeat(indentLevel + 1);

    if (Array.isArray(obj)) {
      if (obj.length === 0) return '[]';
      return `[\n${obj.map(item => nextInd + formatAST(item, indentLevel + 1)).join(',\n')}\n${ind}]`;
    }

    if (obj === null) return 'null';
    if (typeof obj === 'string') return JSON.stringify(obj);
    if (typeof obj === 'number' || typeof obj === 'boolean') return String(obj);
    if (typeof obj === 'undefined') return 'undefined';

    if (typeof obj === 'object') {
      // Check if it's a top-level stage array element to wrap dynamically
      if (isTopLevelStage && obj.kind && typeof obj.kind === 'string' && obj.name) {
        const stageTypeBase = obj.kind.charAt(0).toUpperCase() + obj.kind.slice(1);
        const funcName = `create${stageTypeBase}Stage`;
        neededImports.add(funcName);

        const clone = { ...obj };
        delete clone.kind;
        // Drop randomly generated ID unless explicitly referenced or not a UUID
        if (clone.id && skipRegex.test(clone.id) && !allTargetStages.has(clone.id)) {
          delete clone.id;
        }
        return `${funcName}(${formatAST(clone, indentLevel)})`;
      }

      const keys = Object.keys(obj);
      if (keys.length === 0) return '{}';
      return `{\n${keys.map(k => {
        const validIdent = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(k);
        const keyStr = validIdent ? k : JSON.stringify(k);
        return `${nextInd}${keyStr}: ${formatAST(obj[k], indentLevel + 1)}`;
      }).join(',\n')}\n${ind}}`;
    }
    return String(obj);
  }

  const experimentString = formatAST(sanitize(experiment), 1);
  const agentMediatorsString = formatAST(sanitize(agentMediators), 1);
  const agentParticipantsString = formatAST(sanitize(agentParticipants), 1);

  // Generate AST representations
  const stageStrings: string[] = [];
  for (const stage of stageConfigs) {
    stageStrings.push(`    ${formatAST(sanitize(stage), 2, true)},`);
  }

  const lines: string[] = [];
  lines.push(`import {`);
  for (const imp of Array.from(neededImports).sort()) {
    lines.push(`  ${imp},`);
  }
  // Optional escape hatches like 'as any' handled via standard TypeScript rules, 
  // but if enums like 'ProfileType' cause raw string mismatches in user edits
  // they can import them directly below:
  lines.push(`} from '@deliberation-lab/utils';`);
  lines.push(``);
  lines.push(`export function get${functionName}Template(): ExperimentTemplate {`);
  lines.push(`  const stageConfigs = [`);
  lines.push(...stageStrings);
  lines.push(`  ];`);
  lines.push(``);
  lines.push(`  const experiment = ${experimentString};`);
  lines.push(`  experiment.stageIds = stageConfigs.map(s => s.id);`);
  lines.push(``);
  lines.push(`  const agentMediators: any[] = ${agentMediatorsString};`);
  lines.push(`  const agentParticipants: any[] = ${agentParticipantsString};`);
  lines.push(``);
  lines.push(`  return createExperimentTemplate({`);
  lines.push(`    experiment,`);
  lines.push(`    stageConfigs,`);
  lines.push(`    agentMediators,`);
  lines.push(`    agentParticipants`);
  lines.push(`  });`);
  lines.push(`}`);

  fs.writeFileSync(outputFile, lines.join('\n'), 'utf-8');
  console.log('Successfully generated strongly-typed 1:1 template at ' + outputFile);
}

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 3) {
    console.error('Usage: npx tsx convert_json_to_template.ts <input.json> <output.ts> <FunctionName>');
    process.exit(1);
  }

  convertJsonToTemplate(args[0], args[1], args[2]);
}

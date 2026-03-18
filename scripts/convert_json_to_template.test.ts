import { test } from 'node:test';
import * as assert from 'node:assert';
import * as path from 'path';
import * as fs from 'fs';
import { convertJsonToTemplate } from './convert_json_to_template';

test('convertJsonToTemplate successfully converts a5_charity_debate.json to a valid TypeScript template', async () => {
  const inputFile = path.join(__dirname, 'test_data', 'a5_charity_debate.json');
  const outputFile = path.join(__dirname, 'test_data', 'a5_template.ts');
  const functionName = 'A5Charity';

  // Make sure to clean up if previously run
  if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile);
  }

  // Run the conversion
  convertJsonToTemplate(inputFile, outputFile, functionName);

  // Assert file was created
  assert.ok(fs.existsSync(outputFile), 'Output file should be generated');

  const content = fs.readFileSync(outputFile, 'utf-8');

  // Verify function signature exists
  assert.ok(content.includes(`export function get${functionName}Template(): ExperimentTemplate`), 'Should define parameterized template function');

  // Verify that it correctly imported specific stages uniquely found in this generic template
  // e.g., createComprehensionStage, createRevealStage, createMultiAssetAllocationStage
  assert.ok(content.includes('createComprehensionStage,'), 'Should import createComprehensionStage');
  assert.ok(content.includes('createMultiAssetAllocationStage,'), 'Should import createMultiAssetAllocationStage');
  assert.ok(content.includes('createRevealStage,'), 'Should import createRevealStage');

  // Verify that it built the builder commands
  assert.ok(content.includes('createMultiAssetAllocationStage({'), 'Should build createMultiAssetAllocationStage');

  // Clean up
  fs.unlinkSync(outputFile);
});

import {
  ExperimentTemplate,
  createChatStage,
  createComprehensionStage,
  createExperimentTemplate,
  createInfoStage,
  createMultiAssetAllocationStage,
  createProfileStage,
  createRevealStage,
  createSurveyStage,
  createTosStage,
  createTransferStage,
} from '@deliberation-lab/utils';

export function getA5CharityTemplate(): ExperimentTemplate {
  const stageConfigs = [
    createSurveyStage({
      name: "❓ Survey on AI facilitators",
      descriptions: {
        primaryText: "Think back to the three conversations you engaged in today: in the first, second, and third rounds, there were different AI facilitators or none at all. Please answer the following questions about your preferences regarding these facilitators.",
        infoText: "",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      questions: [
        {
          id: "1e7f891b-d0d7-4ea2-8c41-50f893525e4e",
          kind: "mc",
          questionTitle: "If you were to have another similar group discussion, which facilitator style would you prefer?",
          options: [
            {
              id: "none",
              text: "None",
              imageId: ""
            },
            {
              id: "dynamic-mediator-agent",
              text: "Round 1 Mediator",
              imageId: ""
            },
            {
              id: "habermas-mediator-agent",
              text: "Round 2 Mediator",
              imageId: ""
            }
          ],
          correctAnswerId: null,
          condition: null
        },
        {
          id: "5059a66e-e61b-4bcb-a8cb-073c78e91d43",
          kind: "text",
          questionTitle: "Please explain your preference and experiences with the AI facilitators.",
          minCharCount: null,
          maxCharCount: null,
          condition: null
        },
        {
          id: "cc96d899-87d0-4adc-87a6-b09010a7d868",
          kind: "scale",
          questionTitle: "Please rate how likely you would be to include an AI facilitator in future discussions.",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        }
      ]
    }),
    createSurveyStage({
      name: "1️⃣ Round 1: Facilitator evaluation",
      descriptions: {
        primaryText: "Please evaluate the AI facilitator from the discussion you just completed.",
        infoText: "",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      questions: [
        {
          id: "9b07b38e-e1b9-480c-bd83-68ab64313a9c",
          kind: "scale",
          questionTitle: "I believe that the AI facilitator made the group discussion more productive.",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "c81d2805-0342-403f-82af-80351cb8f77c",
          kind: "scale",
          questionTitle: "I felt comfortable having the AI facilitator in the group discussion.",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "677b50b7-e2b5-439d-8820-7b13fbdb5d79",
          kind: "text",
          questionTitle: "What did the AI facilitator do well (e.g., making sure your perspective was heard, helping the group stay on topic)?",
          minCharCount: null,
          maxCharCount: null,
          condition: null
        },
        {
          id: "d1951f2b-5623-48e2-b9aa-07d5ec97fc92",
          kind: "text",
          questionTitle: "What could the AI facilitator have done better (e.g., being more fair, interrupting less)?",
          minCharCount: null,
          maxCharCount: null,
          condition: null
        }
      ]
    }),
    createSurveyStage({
      name: "2️⃣ Round 2: Facilitator evaluation",
      descriptions: {
        primaryText: "Please evaluate the AI facilitator from the discussion you just completed.",
        infoText: "",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      questions: [
        {
          id: "d608ad12-e06f-48bf-b4bf-4f13ef12e99b",
          kind: "scale",
          questionTitle: "I believe that the AI facilitator made the group discussion more productive.",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "ba7fbb3e-4ce1-4a46-b4e9-34c6573d3f8e",
          kind: "scale",
          questionTitle: "I felt comfortable having the AI facilitator in the group discussion.",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "8fe5ff37-2af8-406d-94c3-2467c0e8f1e1",
          kind: "text",
          questionTitle: "What did the AI facilitator do well (e.g., making sure your perspective was heard, helping the group stay on topic)?",
          minCharCount: null,
          maxCharCount: null,
          condition: null
        },
        {
          id: "c2c34848-797a-4a85-9adb-d0f5ca7dcd1f",
          kind: "text",
          questionTitle: "What could the AI facilitator have done better (e.g., being more fair, interrupting less)?",
          minCharCount: null,
          maxCharCount: null,
          condition: null
        }
      ]
    }),
    createInfoStage({
      name: "Experiment end",
      descriptions: {
        primaryText: "",
        infoText: "",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      infoLines: [
        "This marks the end of the experiment. Thank you for participating!"
      ],
      youtubeVideoId: null
    }),
    createSurveyStage({
      name: "❓ Survey on experiment feedback",
      descriptions: {
        primaryText: "Before you finish, we would appreciate your feedback on your overall experience.",
        infoText: "",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      questions: [
        {
          id: "0324fd88-ae00-4c6c-b278-7224903ee546",
          kind: "scale",
          questionTitle: "Overall, how would you rate your experience in this study?",
          upperValue: 7,
          upperText: "Very Positive",
          lowerValue: 1,
          lowerText: "Very Negative",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "6a2396b0-94ac-44fc-bcf8-bc87231af7e2",
          kind: "scale",
          questionTitle: "How clear were the instructions and questions throughout the experiment?",
          upperValue: 7,
          upperText: "Very Clear",
          lowerValue: 1,
          lowerText: "Very Unclear",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "174af8bf-00bc-4ef5-b705-aee4559d3e4e",
          kind: "text",
          questionTitle: "Please describe your overall interaction with other participants and facilitators.",
          minCharCount: null,
          maxCharCount: null,
          condition: null
        },
        {
          id: "29a926c3-aa32-4c38-bd57-7dde496127d2",
          kind: "text",
          questionTitle: "Do you have any other feedback or concerns about your experience in this study?",
          minCharCount: null,
          maxCharCount: null,
          condition: null
        }
      ]
    }),
    createSurveyStage({
      name: "❓Survey on AI facilitation",
      descriptions: {
        primaryText: "Finally, we’d like to learn about your thoughts and experiences with AI tools that support or guide group discussions. Please indicate how much you agree or disagree with the following statements.",
        infoText: "",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      questions: [
        {
          id: "3cfa2a5b-58f2-4bc2-a3a6-fb5668453500",
          kind: "scale",
          questionTitle: "I have used AI assistants for interpersonal tasks, such as writing messages or resolving conflicts.",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "82036841-0d9e-4700-a804-66df931e443a",
          kind: "scale",
          questionTitle: "I believe an AI facilitator could make group discussions more productive.",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "8ffead3d-0f71-4316-b028-5eb275352d50",
          kind: "scale",
          questionTitle: "I would feel comfortable having an AI facilitator in the group discussion.",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "dcc39524-e7b6-424e-9fc6-8b2749f731e5",
          kind: "scale",
          questionTitle: "If given the option, I would be willing to use an AI facilitator in group discussions.",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "19f31286-2235-4341-938a-9fdcf806cb80",
          kind: "text",
          questionTitle: "If applicable, what kinds of tasks have you used AI assistants for? (If not, write NA.)",
          minCharCount: null,
          maxCharCount: null,
          condition: null
        },
        {
          id: "fe9045c3-b8af-43d3-a35e-ba5b1319f27a",
          kind: "text",
          questionTitle: "What are your thoughts on using AI to facilitate group discussions? What could be good or bad about it?",
          minCharCount: null,
          maxCharCount: null,
          condition: null
        }
      ]
    }),
    createInfoStage({
      name: "ℹ️ Platform tutorial",
      descriptions: {
        primaryText: "",
        infoText: "",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      infoLines: [
        "Today, you will complete a task in a series of stages.",
        "Here are some parts of the interface that you may find useful:",
        "![Interface tutorial](https://raw.githubusercontent.com/PAIR-code/deliberate-lab/refs/heads/main/frontend/assets/tutorial.png)",
        "1. 🗂️ **Stage navigation**: You can reference previous stages by navigating backwards. This may be helpful in referring back to instructions or previous answers.",
        "1. 🙋‍♀️ **Help chat**: You can contact the experimenters by clicking this button. If you ever find yourself stuck or waiting on a stage, please use this feature to notify the experimenters.",
        "1. ➡️ **Next stage**: Click this button to proceed to the next stage. Sometimes, you may need to complete certain actions (e.g., answering required questions, waiting a set amount of time) before proceeding."
      ],
      youtubeVideoId: null
    }),
    createProfileStage({
      name: "🎭 View your profile",
      descriptions: {
        primaryText: "In this study, you’ll discuss how to allocate money to different charities with other participants in real time. The profile shown below is your assigned identity for this session. This is how others will see you.",
        infoText: "",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      profileType: "ANONYMOUS_ANIMAL"
    }),
    createInfoStage({
      name: "📝 AI-based facilitation",
      descriptions: {
        primaryText: "",
        infoText: "",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      infoLines: [
        "To help facilitate your discussion, an AI-based facilitator will join your conversation for one or more rounds.",
        "The conversational style of the AI-based facilitator will be different in each round it appears.",
        "![AI facilitator](https://raw.githubusercontent.com/PAIR-code/deliberate-lab/refs/heads/main/frontend/assets/consensus/instructions2.png)",
        "Here is an example of how this facilitation may look:",
        "![AI transcript](https://raw.githubusercontent.com/PAIR-code/deliberate-lab/refs/heads/main/frontend/assets/consensus/instructions5.png)"
      ],
      youtubeVideoId: null
    }),
    createInfoStage({
      name: "📝 How your decisions impact donations",
      descriptions: {
        primaryText: "",
        infoText: "",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      infoLines: [
        "The charities in each round are real. After your final decision, we will donate a **fixed total amount** to these charities based on your group’s choices.",
        "If you were the only participant, your final allocation would directly determine how the donation is split.",
        "![Donation example](https://raw.githubusercontent.com/PAIR-code/deliberate-lab/refs/heads/main/frontend/assets/consensus/instructions4.png)",
        "However, you are part of a group of 3 participants. Your **group's allocation** is the **average** of everyone's final allocation in that round."
      ],
      youtubeVideoId: null
    }),
    createInfoStage({
      name: "📝 Today's task",
      descriptions: {
        primaryText: "",
        infoText: "",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      infoLines: [
        "The object of this study is understanding how groups make decisions together. Today, you’ll have *three* rounds of decision-making; in each round, your group will make decisions about how to allocate money across three charities. Each round has three steps:",
        "1. *Privately choose an initial allocation*. Given a fixed pool of money, decide how to split it among the three charities presented.",
        "2. *Discuss your choices with the group*. Share your reasoning with 2 other participants and try to reach a consensus. You will have **exactly 5 minutes** to discuss per round.",
        "3. *Privately update your allocation*. After the discussion, you can revise your initial allocation based on what you heard.",
        "Your goal is to work together to find the best way to split the funds.",
        "![Instructions](https://raw.githubusercontent.com/PAIR-code/deliberate-lab/refs/heads/main/frontend/assets/consensus/instructions1.png)"
      ],
      youtubeVideoId: null
    }),
    createInfoStage({
      name: "📃 Debriefing",
      descriptions: {
        primaryText: "",
        infoText: "",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      infoLines: [
        "Thank you for your participation in this study. This marks the end of the experiment.",
        "**Purpose of the Research**",
        "The goal of this research is to understand how different mediation strategies affect group decision-making and consensus-building.",
        "**Use of Your Allocations**",
        "As stated in the initial terms of service, your decisions have real-world consequences. The actions you take and the outcomes your group reaches will have a tangible impact on donations to the charities named within the study.",
        "The consensus scores your group achieved across the three rounds will be used to determine your group's share of a total donation pool, which will be distributed to the named charities according to your group's final allocations. Your thoughtful participation has contributed directly to these charitable causes.",
        "**Compensation Reminder:** Your base pay rate is guaranteed and is separate from any donation outcomes.",
        "If you have any questions, please do not hesitate to contact the research team."
      ],
      youtubeVideoId: null
    }),
    createSurveyStage({
      name: "❓ Survey on inital sentiments",
      descriptions: {
        primaryText: "Before you begin, we’d like to learn about how you might approach this task. Please indicate how much you agree or disagree with the following statements.",
        infoText: "",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      questions: [
        {
          id: "ab12b24b-8a81-48ef-a6dd-36119b1ca039",
          kind: "scale",
          questionTitle: "It matters to me how today’s charity allocations are decided.",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "f1dc63e4-2269-4e55-88eb-c83bc57a4a30",
          kind: "scale",
          questionTitle: "In group settings, I try to avoid conﬂict and negotiations.",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "5fb54bad-19bd-4c31-a569-fa8d2591acde",
          kind: "scale",
          questionTitle: "In group settings, I try to find the best outcome for everyone.",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "67a1ffef-318d-4a48-ab87-966ae98e4f7a",
          kind: "scale",
          questionTitle: "When making decisions, I prefer to decide quickly.",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        }
      ]
    }),
    createChatStage({
      id: "discussion-round-1",
      name: "1️⃣ Round 1: Discussion",
      descriptions: {
        primaryText: "Discuss the ideal allocation of donations to:\n *{{charity_1.name}}, {{charity_2.name}}, {{charity_3.name}}*.\n\n🤖 An AI-based facilitator will be present in this discussion.",
        infoText: "",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: true,
        showParticipantProgress: true
      },
      discussions: [],
      timeLimitInMinutes: 5,
      requireFullTime: true
    }),
    createChatStage({
      id: "discussion-round-2",
      name: "2️⃣ Round 2: Discussion",
      descriptions: {
        primaryText: "Discuss the ideal allocation of donations to:\n *{{charity_4.name}}, {{charity_5.name}}, {{charity_6.name}}*.\n\n🤖 An AI-based facilitator will be present in this discussion.",
        infoText: "",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: true,
        showParticipantProgress: true
      },
      discussions: [],
      timeLimitInMinutes: 5,
      requireFullTime: true
    }),
    createChatStage({
      id: "discussion-round-3",
      name: "3️⃣ Round 3: Discussion",
      descriptions: {
        primaryText: "Discuss the ideal allocation of donations to:\n *{{charity_7.name}}, {{charity_8.name}}, {{charity_9.name}}*.",
        infoText: "",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: true,
        showParticipantProgress: true
      },
      discussions: [],
      timeLimitInMinutes: 5,
      requireFullTime: true
    }),
    createComprehensionStage({
      name: "💯 Comprehension check",
      descriptions: {
        primaryText: "Please answer the following questions to ensure the instructions are clear. You can click back to previous stages to review the instructions if needed.",
        infoText: "",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      questions: [
        {
          id: "4eb143d9-ad85-4e91-9f12-483aa3ef1bc8",
          kind: "mc",
          questionTitle: "Based on the instructions, how does a group make the biggest impact with its donations?",
          options: [
            {
              id: "a",
              text: "By making sure every member's vote is unique and different.",
              imageId: ""
            },
            {
              id: "b",
              text: "By having the AI facilitator make the final decision.",
              imageId: ""
            },
            {
              id: "c",
              text: "By reaching high agreement (consensus) on how the funds should be allocated.",
              imageId: ""
            },
            {
              id: "d",
              text: "By voting as quickly as possible, regardless of what others do.",
              imageId: ""
            }
          ],
          correctAnswerId: "c"
        },
        {
          id: "5ee67f42-6681-48e4-a3a1-2e7e6fddcdf1",
          kind: "mc",
          questionTitle: "Consider two groups. In **Group A**, members' votes are very close to each other. In **Group B**, members' votes are very far apart. Which group earns more 'spending power'?",
          options: [
            {
              id: "a",
              text: "Group B, because their votes are stronger and more decisive.",
              imageId: ""
            },
            {
              id: "b",
              text: "Group A, because its members reached a closer agreement.",
              imageId: ""
            },
            {
              id: "c",
              text: "Both groups have the same spending power.",
              imageId: ""
            },
            {
              id: "d",
              text: "It's impossible to know without seeing the charities.",
              imageId: ""
            }
          ],
          correctAnswerId: "b"
        },
        {
          id: "1b1b434d-6b8e-4199-91b1-0b3e5df90bb4",
          kind: "mc",
          questionTitle: "Imagine the total donation pool is split between two groups. Group A achieves a 95% consensus score, while Group B only achieves a 10% score. How will this affect the final allocation?",
          options: [
            {
              id: "a",
              text: "Both groups get to allocate the same amount of money.",
              imageId: ""
            },
            {
              id: "b",
              text: "The money is split proportionally, so Group A gets a much larger donation budget (e.g., $15) and Group B gets a much smaller one (e.g., $5).",
              imageId: ""
            },
            {
              id: "c",
              text: "Group B gets more money because their discussion was more diverse.",
              imageId: ""
            },
            {
              id: "d",
              text: "Only Group A gets to allocate money.",
              imageId: ""
            }
          ],
          correctAnswerId: "b"
        }
      ]
    }),
    createInfoStage({
      name: "📝 Today's impact",
      descriptions: {
        primaryText: "",
        infoText: "",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      infoLines: [
        "Today, our study will commit to donating **at least $100 per round**, split among the three charities. With 3 rounds total, at least **$300 will be donated in total**. Your group’s choices, along with those of other groups, will help to inform where that money goes.",
        "As a reminder, your own payment for participating in this study is separate from the donation amount and is not affected by your decisions here.",
        "",
        "Here are the charities that will appear, in randomly assigned groups of 3, in each round:",
        "",
        "* 🐘 [International Fund for Animal Welfare (IFAW)](https://www.charitynavigator.org/ein/542044674)",
        "* 🏥 [Sudan Humanitarian Aid](https://www.charitynavigator.org/ein/472864379)",
        "* 🌊[Clean Ocean Action](https://www.charitynavigator.org/ein/222897204)",
        "* 🦁 [WildAid (animal welfare)](https://www.charitynavigator.org/ein/203644441)",
        "* 👁️ [Eyecare in India](https://www.charitynavigator.org/ein/776141976)",
        "* 🏠 [Global Housing for Orphans](https://www.charitynavigator.org/ein/562500794)",
        "* 🌳 [Rainforest Action](https://www.charitynavigator.org/ein/943045180)",
        "* 👶 [Aid for Children in Remote Villages](https://www.charitynavigator.org/ein/300108263)",
        "* ♀[Global Fund for Women](https://www.charitynavigator.org/ein/770155782)",
        "",
        "So, for example, you may have to allocate funds between *Eyecare in India*, *Sudan Humanitarian Aid*, and *Clean Ocean Action* in a round. We will provide more details on these charities before the rounds."
      ],
      youtubeVideoId: null
    }),
    createInfoStage({
      name: "📝 How your group is evaluated",
      descriptions: {
        primaryText: "",
        infoText: "",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      infoLines: [
        "Each round, your group will receive a **consensus score**, which measures how similar your final allocations are.",
        "For example, if everyone agrees on 🐶 50% / 🐱 30% / 🐹 20%, the consensus score is high (100). If your allocations are very different, the score will be lower.",
        "At the end of the study, all groups will be ranked by their consensus scores. **Groups with higher consensus will have more influence** over how the donation is split.",
        "In the example image, Group 1 had high consensus and favored 🐹 Hamsters. Group 3 had low consensus and favored 🐶 Dogs. Because Group 1 had a higher consensus score, their decisions will be prioritized: more money will go to 🐹 Hamsters than to 🐶 Dogs.",
        "![Consensus example](https://raw.githubusercontent.com/PAIR-code/deliberate-lab/refs/heads/main/frontend/assets/consensus/instructions3.png)"
      ],
      youtubeVideoId: null
    }),
    createRevealStage({
      id: "final-results-summary",
      name: "📊 Final allocation results",
      descriptions: {
        primaryText: "Here are the final results of your group’s allocations across all three rounds. The higher the score, the more influence your group will have in directing the donations.\n\n‼️ Click `Next Stage` after viewing the final results to continue with the experiment.",
        infoText: "",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: true,
        showParticipantProgress: true
      },
      items: [
        {
          id: "vote-round-1-post",
          kind: "multiAssetAllocation",
          revealAudience: "ALL",
          displayMode: "full"
        },
        {
          id: "vote-round-2-post",
          kind: "multiAssetAllocation",
          revealAudience: "ALL",
          displayMode: "full"
        },
        {
          id: "vote-round-3-post",
          kind: "multiAssetAllocation",
          revealAudience: "ALL",
          displayMode: "full"
        }
      ]
    }),
    createSurveyStage({
      id: "round-1-outcome-survey",
      name: "1️⃣ Round 1: Survey",
      descriptions: {
        primaryText: "Please answer a few questions about your experience in this round.",
        infoText: "",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      questions: [
        {
          id: "b702123b-1765-4cad-84b8-507bdffdbeae",
          kind: "text",
          questionTitle: "If you changed your allocation, what influenced your decision? (If not, write NA.)",
          minCharCount: null,
          maxCharCount: null,
          condition: null
        },
        {
          id: "49eef3fd-38c3-49a6-8eb6-c146f3cad656",
          kind: "scale",
          questionTitle: "I felt strongly about my initial allocation (e.g. clear preferences or strong opinions).",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "79a96c28-42e7-45dd-9fd4-ced7c1e5778d",
          kind: "scale",
          questionTitle: "I feel strongly about my final allocation.",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "d71197da-16d6-48a5-81f3-51ee8d7bfd49",
          kind: "scale",
          questionTitle: "I am satisfied with the outcome of the discussion.",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "d8569d2b-7e62-4b48-a871-4f9182f2b567",
          kind: "scale",
          questionTitle: "I felt heard and understood during the discussion.",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "b7b6079a-8d2f-4777-9c7d-548d52e66a23",
          kind: "scale",
          questionTitle: "The group worked together effectively.",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "4a3c0da5-a5a8-4bcb-9480-31257778183e",
          kind: "text",
          questionTitle: "Briefly describe how you felt the discussion went. (e.g., overall flow, any tensions or key moments)\"",
          minCharCount: null,
          maxCharCount: null,
          condition: null
        }
      ]
    }),
    createSurveyStage({
      id: "round-2-outcome-survey",
      name: "2️⃣ Round 2: Survey",
      descriptions: {
        primaryText: "Please answer a few questions about your experience in this round.",
        infoText: "",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      questions: [
        {
          id: "d22f45d5-0357-4960-9335-522624782e46",
          kind: "text",
          questionTitle: "If you changed your allocation, what influenced your decision? (If not, write NA.)",
          minCharCount: null,
          maxCharCount: null,
          condition: null
        },
        {
          id: "c10f5b17-5dc4-402f-aab6-b954764c2b4e",
          kind: "scale",
          questionTitle: "I felt strongly about my initial allocation (e.g. clear preferences or strong opinions).",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "4581c8f3-07af-49ef-b50b-98219ab95e56",
          kind: "scale",
          questionTitle: "I feel strongly about my final allocation.",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "f080624e-6f0a-474c-8818-b5258069af7c",
          kind: "scale",
          questionTitle: "I am satisfied with the outcome of the discussion.",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "485b8b0a-b428-44ff-84b0-2f262df7c2ac",
          kind: "scale",
          questionTitle: "I felt heard and understood during the discussion.",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "3540d44f-67a8-43bc-85ec-ef09ec4a3d57",
          kind: "scale",
          questionTitle: "The group worked together effectively.",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "86762f7d-be9a-4d90-a978-822c6c7d6bce",
          kind: "text",
          questionTitle: "Briefly describe how you felt the discussion went. (e.g., overall flow, any tensions or key moments)\"",
          minCharCount: null,
          maxCharCount: null,
          condition: null
        }
      ]
    }),
    createSurveyStage({
      id: "round-3-outcome-survey",
      name: "3️⃣ Round 3: Survey",
      descriptions: {
        primaryText: "Please answer a few questions about your experience in this round.",
        infoText: "",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      questions: [
        {
          id: "f38c3b8a-2db5-413b-b072-c23b8fc81219",
          kind: "text",
          questionTitle: "If you changed your allocation, what influenced your decision? (If not, write NA.)",
          minCharCount: null,
          maxCharCount: null,
          condition: null
        },
        {
          id: "6ff4a9ff-aae1-45da-991f-03f46bebeebc",
          kind: "scale",
          questionTitle: "I felt strongly about my initial allocation (e.g. clear preferences or strong opinions).",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "56130edf-3619-48dd-865c-264998584533",
          kind: "scale",
          questionTitle: "I feel strongly about my final allocation.",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "d6155da5-eab7-4d38-9a49-67db8bd2bfd5",
          kind: "scale",
          questionTitle: "I am satisfied with the outcome of the discussion.",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "dc63257e-000f-42e6-b14b-6e23bc5689d6",
          kind: "scale",
          questionTitle: "I felt heard and understood during the discussion.",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "3d7b98f3-f836-43e9-abec-32c9e9b80a2a",
          kind: "scale",
          questionTitle: "The group worked together effectively.",
          upperValue: 5,
          upperText: "Strongly Agree",
          lowerValue: 1,
          lowerText: "Strongly Disagree",
          middleText: "",
          useSlider: false,
          stepSize: 1,
          condition: null
        },
        {
          id: "1f1bee14-d0b4-4e55-bb48-30b0f9bd6a12",
          kind: "text",
          questionTitle: "Briefly describe how you felt the discussion went. (e.g., overall flow, any tensions or key moments)\"",
          minCharCount: null,
          maxCharCount: null,
          condition: null
        }
      ]
    }),
    createTosStage({
      id: "tos",
      name: "📜 Terms of service",
      descriptions: {
        primaryText: "",
        infoText: "",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      tosLines: [
        "Thank you for your interest in this research. If you choose to participate, you will be asked to participate in debates about resource allocation, which have real-world consequences in the form of disbursing real funds to real charities, based on your / your teams actions.",
        "**Compensation & Impact**",
        "You will be paid a base amount for completing the survey. This base payment is guaranteed and is independent of your decisions regarding the charity allocations.",
        "**Confidentiality**",
        "The results of this study will be used solely for research purposes. Our team will keep all your information from this study strictly confidential, as required by law.",
        "**Voluntary Participation**",
        "Your participation is voluntary, which means you can choose whether or not to participate. You may choose not to participate by exiting the survey at any point. There are no known costs to you for participating in this research study except for your time.",
        "**Contact**",
        "Please feel free to contact us using the Help chat icon in the platform or through Prolific if you have any questions, concerns, or complaints about this study.",
        "By checking the box below and proceeding, you are acknowledging that you are over the age of 18 and that you consent to participate."
      ]
    }),
    createTransferStage({
      id: "transfer",
      name: "⏸️ Transfer stage",
      descriptions: {
        primaryText: "Please wait on this page for up to 10 minutes as you are transferred to the next stage of this experiment; we are waiting for 2 more participants to join this live session. Thank you for your patience.",
        infoText: "",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: false
      },
      enableTimeout: true,
      timeoutSeconds: 600,
      autoTransferConfig: null
    }),
    createMultiAssetAllocationStage({
      id: "vote-round-1-post",
      name: "1️⃣ Round 1: Final allocation",
      descriptions: {
        primaryText: "Now that you have discussed with your group, make your final allocation for round 1.\nPlease use the sliders to allocate 100% of the funds among the following charities:\n\n\n[{{charity_1.name}}]({{charity_1.link}}) (Charity Navigator score: {{charity_1.score}})\n*{{charity_1.mission}}*\n\n\n[{{charity_2.name}}]({{charity_2.link}}) (Charity Navigator score: {{charity_2.score}})\n*{{charity_2.mission}}*\n\n\n[{{charity_3.name}}]({{charity_3.link}}) (Charity Navigator score: {{charity_3.score}})\n*{{charity_3.mission}}*\n",
        infoText: "Ensure your chosen percentages add up to 100%. (Hint: We recommend getting the percentages close and then adjusting one slider to make the total exactly 100%).",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      stockInfoStageId: "",
      stockOptions: [
        {
          id: "1e13c56a-6e10-49b9-aef4-daa055c5338e",
          name: "{{charity_1.name}}",
          description: "Details for {{charity_1.name}}.",
          csvData: "",
          parsedData: [],
          customCards: []
        },
        {
          id: "e5b80196-f76a-4dd3-aa10-2b8efef0a754",
          name: "{{charity_2.name}}",
          description: "Details for {{charity_2.name}}.",
          csvData: "",
          parsedData: [],
          customCards: []
        },
        {
          id: "2f064997-194e-4527-a0e7-c2530bb6baca",
          name: "{{charity_3.name}}",
          description: "Details for {{charity_3.name}}.",
          csvData: "",
          parsedData: [],
          customCards: []
        }
      ]
    }),
    createMultiAssetAllocationStage({
      id: "vote-round-1-pre",
      name: "1️⃣ Round 1: Initial allocation",
      descriptions: {
        primaryText: "You are now beginning round 1 of 3.\nPlease use the sliders to allocate 100% of the funds among the following charities:\n\n\n[{{charity_1.name}}]({{charity_1.link}}) (Charity Navigator score: {{charity_1.score}})\n*{{charity_1.mission}}*\n\n\n[{{charity_2.name}}]({{charity_2.link}}) (Charity Navigator score: {{charity_2.score}})\n*{{charity_2.mission}}*\n\n\n[{{charity_3.name}}]({{charity_3.link}}) (Charity Navigator score: {{charity_3.score}})\n*{{charity_3.mission}}*\n",
        infoText: "Ensure your chosen percentages add up to 100%. (Hint: We recommend getting the percentages close and then adjusting one slider to make the total exactly 100%).",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      stockInfoStageId: "",
      stockOptions: [
        {
          id: "b3ec5e5b-0b9f-48fb-b4f8-909061d2cc5b",
          name: "{{charity_1.name}}",
          description: "Details for {{charity_1.name}}.",
          csvData: "",
          parsedData: [],
          customCards: []
        },
        {
          id: "fedd6af0-dd11-4d57-b920-c44532c23c54",
          name: "{{charity_2.name}}",
          description: "Details for {{charity_2.name}}.",
          csvData: "",
          parsedData: [],
          customCards: []
        },
        {
          id: "3e7d1523-b67e-46a8-8f1b-693e5b843caa",
          name: "{{charity_3.name}}",
          description: "Details for {{charity_3.name}}.",
          csvData: "",
          parsedData: [],
          customCards: []
        }
      ]
    }),
    createMultiAssetAllocationStage({
      id: "vote-round-2-post",
      name: "2️⃣ Round 2: Final allocation",
      descriptions: {
        primaryText: "Now that you have discussed with your group, make your final allocation for round 2.\nPlease use the sliders to allocate 100% of the funds among the following charities:\n\n\n[{{charity_4.name}}]({{charity_4.link}}) (Charity Navigator score: {{charity_4.score}})\n*{{charity_4.mission}}*\n\n\n[{{charity_5.name}}]({{charity_5.link}}) (Charity Navigator score: {{charity_5.score}})\n*{{charity_5.mission}}*\n\n\n[{{charity_6.name}}]({{charity_6.link}}) (Charity Navigator score: {{charity_6.score}})\n*{{charity_6.mission}}*\n",
        infoText: "Ensure your chosen percentages add up to 100%. (Hint: We recommend getting the percentages close and then adjusting one slider to make the total exactly 100%).",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      stockInfoStageId: "",
      stockOptions: [
        {
          id: "48f3b26d-2e67-46bb-8095-e56f78e08835",
          name: "{{charity_4.name}}",
          description: "Details for {{charity_4.name}}.",
          csvData: "",
          parsedData: [],
          customCards: []
        },
        {
          id: "2621116f-3d72-4d0b-8312-2c4b3b1d417e",
          name: "{{charity_5.name}}",
          description: "Details for {{charity_5.name}}.",
          csvData: "",
          parsedData: [],
          customCards: []
        },
        {
          id: "83b90e3b-0e2d-4e7c-b835-a303f73c37ea",
          name: "{{charity_6.name}}",
          description: "Details for {{charity_6.name}}.",
          csvData: "",
          parsedData: [],
          customCards: []
        }
      ]
    }),
    createMultiAssetAllocationStage({
      id: "vote-round-2-pre",
      name: "2️⃣ Round 2: Initial allocation",
      descriptions: {
        primaryText: "You are now beginning round 2 of 3.\nPlease use the sliders to allocate 100% of the funds among the following charities:\n\n\n[{{charity_4.name}}]({{charity_4.link}}) (Charity Navigator score: {{charity_4.score}})\n*{{charity_4.mission}}*\n\n\n[{{charity_5.name}}]({{charity_5.link}}) (Charity Navigator score: {{charity_5.score}})\n*{{charity_5.mission}}*\n\n\n[{{charity_6.name}}]({{charity_6.link}}) (Charity Navigator score: {{charity_6.score}})\n*{{charity_6.mission}}*\n",
        infoText: "Ensure your chosen percentages add up to 100%. (Hint: We recommend getting the percentages close and then adjusting one slider to make the total exactly 100%).",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      stockInfoStageId: "",
      stockOptions: [
        {
          id: "3cdbcc10-7f0f-49b3-a5b6-52aa55f7ee89",
          name: "{{charity_4.name}}",
          description: "Details for {{charity_4.name}}.",
          csvData: "",
          parsedData: [],
          customCards: []
        },
        {
          id: "707665fe-f8f9-4446-8e91-0ca409bf37d9",
          name: "{{charity_5.name}}",
          description: "Details for {{charity_5.name}}.",
          csvData: "",
          parsedData: [],
          customCards: []
        },
        {
          id: "868077c0-7f8f-418e-932b-6fc3ada4a37c",
          name: "{{charity_6.name}}",
          description: "Details for {{charity_6.name}}.",
          csvData: "",
          parsedData: [],
          customCards: []
        }
      ]
    }),
    createMultiAssetAllocationStage({
      id: "vote-round-3-post",
      name: "3️⃣ Round 3: Final allocation",
      descriptions: {
        primaryText: "Now that you have discussed with your group, make your final allocation for round 3.\nPlease use the sliders to allocate 100% of the funds among the following charities:\n\n\n[{{charity_7.name}}]({{charity_7.link}}) (Charity Navigator score: {{charity_7.score}})\n*{{charity_7.mission}}*\n\n\n[{{charity_8.name}}]({{charity_8.link}}) (Charity Navigator score: {{charity_8.score}})\n*{{charity_8.mission}}*\n\n\n[{{charity_9.name}}]({{charity_9.link}}) (Charity Navigator score: {{charity_9.score}})\n*{{charity_9.mission}}*\n",
        infoText: "Ensure your chosen percentages add up to 100%. (Hint: We recommend getting the percentages close and then adjusting one slider to make the total exactly 100%).",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      stockInfoStageId: "",
      stockOptions: [
        {
          id: "d733e5ef-9528-45ce-8c55-5a695aa51922",
          name: "{{charity_7.name}}",
          description: "Details for {{charity_7.name}}.",
          csvData: "",
          parsedData: [],
          customCards: []
        },
        {
          id: "502ed416-70cd-46bd-a8b0-5b28aa839839",
          name: "{{charity_8.name}}",
          description: "Details for {{charity_8.name}}.",
          csvData: "",
          parsedData: [],
          customCards: []
        },
        {
          id: "40fd3a92-de12-4c68-8e74-c60e8867bbb1",
          name: "{{charity_9.name}}",
          description: "Details for {{charity_9.name}}.",
          csvData: "",
          parsedData: [],
          customCards: []
        }
      ]
    }),
    createMultiAssetAllocationStage({
      id: "vote-round-3-pre",
      name: "3️⃣ Round 3: Initial allocation",
      descriptions: {
        primaryText: "You are now beginning round 3 of 3.\nPlease use the sliders to allocate 100% of the funds among the following charities:\n\n\n[{{charity_7.name}}]({{charity_7.link}}) (Charity Navigator score: {{charity_7.score}})\n*{{charity_7.mission}}*\n\n\n[{{charity_8.name}}]({{charity_8.link}}) (Charity Navigator score: {{charity_8.score}})\n*{{charity_8.mission}}*\n\n\n[{{charity_9.name}}]({{charity_9.link}}) (Charity Navigator score: {{charity_9.score}})\n*{{charity_9.mission}}*\n",
        infoText: "Ensure your chosen percentages add up to 100%. (Hint: We recommend getting the percentages close and then adjusting one slider to make the total exactly 100%).",
        helpText: ""
      },
      progress: {
        minParticipants: 0,
        waitForAllParticipants: false,
        showParticipantProgress: true
      },
      stockInfoStageId: "",
      stockOptions: [
        {
          id: "539a84e1-82dc-4121-960a-cc7d478c2679",
          name: "{{charity_7.name}}",
          description: "Details for {{charity_7.name}}.",
          csvData: "",
          parsedData: [],
          customCards: []
        },
        {
          id: "a10a9ce5-823c-4e25-af77-594be807c749",
          name: "{{charity_8.name}}",
          description: "Details for {{charity_8.name}}.",
          csvData: "",
          parsedData: [],
          customCards: []
        },
        {
          id: "58603f2f-396e-4698-b423-413cef2bcde8",
          name: "{{charity_9.name}}",
          description: "Details for {{charity_9.name}}.",
          csvData: "",
          parsedData: [],
          customCards: []
        }
      ]
    }),
  ];

  const experiment = {
    id: "03138650-3c61-4f0f-af63-0ae8d6963866",
    versionId: 19,
    metadata: {
      name: "a5 Mediated Charity Debate (3 Rounds)",
      publicName: "Charity Allocation Debate (a5)",
      description: "A multi-round debate where participants discuss and vote on how to allocate a budget among several real-world charities, with different AI facilitators in each round.",
      tags: [],
      creator: "aarontparisi@gmail.com",
      starred: {}
    },
    permissions: {
      visibility: "public",
      readers: []
    },
    defaultCohortConfig: {
      minParticipantsPerCohort: null,
      maxParticipantsPerCohort: null,
      includeAllParticipantsInCohortCount: false,
      botProtection: false
    },
    prolificConfig: {
      enableProlificIntegration: true,
      defaultRedirectCode: "CPXQMA9Z",
      attentionFailRedirectCode: "",
      bootedRedirectCode: ""
    },
    stageIds: [
      "5e5889e8-bda5-422d-a643-fe1bdc7a211a",
      "tos",
      "7b2881af-f27f-4f06-a854-0337dc92de52",
      "b4291af6-7376-47e4-9616-b940a6b7146f",
      "aff04a2d-2523-4ea9-bf79-b63c81fcb7df",
      "f037e73c-4c92-467c-a1eb-e310aea86673",
      "e9da08ce-35f8-4b23-93fd-4b936a994236",
      "aac9a69e-2d41-45ba-bdca-eb2f235a58b6",
      "e2dac353-cbb7-45e1-acaa-415ff5ff8ce1",
      "dc134153-b588-47f1-adb5-b36958bfd3ce",
      "540f7696-fa36-4fe0-acb5-59d85c66422f",
      "transfer",
      "vote-round-1-pre",
      "discussion-round-1",
      "vote-round-1-post",
      "round-1-outcome-survey",
      "2d817e6a-918d-44c6-928f-41a5bd386254",
      "vote-round-2-pre",
      "discussion-round-2",
      "vote-round-2-post",
      "round-2-outcome-survey",
      "374d5e4a-9c11-415c-a479-d83613825696",
      "vote-round-3-pre",
      "discussion-round-3",
      "vote-round-3-post",
      "round-3-outcome-survey",
      "final-results-summary",
      "1df8cefb-07b9-45be-ab87-ab5b3f1c8799",
      "d966964e-7199-4a11-af4c-344b57d10761",
      "519bfcd9-c55e-433a-9f4e-64dbe642c794",
      "4b03a6d9-ab75-4c16-8e92-5dcd4b7afccc"
    ],
    cohortLockMap: {},
    variableConfigs: [
      {
        id: "charity-permutation-config",
        type: "random_permutation",
        scope: "cohort",
        definition: {
          name: "charity",
          description: "List of charities for allocation rounds",
          schema: {
            type: "array",
            items: {
              type: "object",
              properties: {
                key: {
                  type: "string"
                },
                name: {
                  type: "string"
                },
                link: {
                  type: "string"
                },
                score: {
                  type: "string"
                },
                mission: {
                  type: "string"
                }
              },
              required: [
                "key",
                "name",
                "link",
                "score",
                "mission"
              ]
            }
          }
        },
        shuffleConfig: {
          shuffle: true,
          seed: "cohort",
          customSeed: ""
        },
        values: [
          "{\"key\":\"ifaw\",\"name\":\"🐘 International Fund for Animal Welfare (IFAW)\",\"link\":\"https://www.charitynavigator.org/ein/542044674\",\"score\":\"98%\",\"mission\":\"Fresh thinking and bold action for animals, people, and the place we call home.\"}",
          "{\"key\":\"wildaid\",\"name\":\"🦁 WildAid (animal welfare)\",\"link\":\"https://www.charitynavigator.org/ein/203644441\",\"score\":\"97%\",\"mission\":\"WildAid's mission is to end the illegal wildlife trade in our lifetimes by reducing demand through public awareness campaigns and providing comprehensive marine protection.\"}",
          "{\"key\":\"clean_ocean\",\"name\":\"🌊 Clean Ocean Action\",\"link\":\"https://www.charitynavigator.org/ein/222897204\",\"score\":\"99%\",\"mission\":\"Clean Oceans International is dedicated to reducing plastic pollution in the world's ocean through Research, Innovation, and Direct Action.\"}",
          "{\"key\":\"sudan_aid\",\"name\":\"🏥 Sudan Humanitarian Aid\",\"link\":\"https://www.charitynavigator.org/ein/472864379\",\"score\":\"92%\",\"mission\":\"To provide life-saving aid to the affected population, Sadagaat-USA is collaborating with other US-based organizations and local initiatives in Sudan to offer food, medication, medical supplies, and water through its emergency response program.\"}",
          "{\"key\":\"eyecare_india\",\"name\":\"👁️ Eyecare in India\",\"link\":\"https://www.charitynavigator.org/ein/776141976\",\"score\":\"100%\",\"mission\":\"Our mission is to reach out to the rural poor and provide quality eye care free of cost to the needy by building operationally self-sufficient super specialty eye care hospitals across India and perform free eye surgeries.\"}",
          "{\"key\":\"global_housing\",\"name\":\"🏠 Global Housing for Orphans\",\"link\":\"https://www.charitynavigator.org/ein/562500794\",\"score\":\"91%\",\"mission\":\"Givelight builds nurturing homes and provides high quality education for orphans globally.\"}",
          "{\"key\":\"rainforest_action\",\"name\":\"🌳 Rainforest Action\",\"link\":\"https://www.charitynavigator.org/ein/943045180\",\"score\":\"100%\",\"mission\":\"Rainforest Action Network campaigns for the forests, their inhabitants and the natural systems that sustain life by transforming the global marketplace through education, grassroots organizing and non-violent direct action.\"}",
          "{\"key\":\"aid_for_children\",\"name\":\"👶 Aid for Children in Remote Villages\",\"link\":\"https://www.charitynavigator.org/ein/300108263\",\"score\":\"100%\",\"mission\":\"[Facilitated via GlobalGiving] The Eden Social Welfare Foundation has cared for underprivileged children since 2006, with the hope that they can enjoy the right to a fair education, better after-school care, and a healthy and nutritious breakfast.\"}",
          "{\"key\":\"global_fund_women\",\"name\":\"♀ Global Fund for Women\",\"link\":\"https://www.charitynavigator.org/ein/770155782\",\"score\":\"100%\",\"mission\":\"Global Fund for Women advances women’s human rights by investing in women-led organizations worldwide. Our international network of supporters mobilizes financial and other resources to support women’s actions for social justice, equality and peace.\"}"
        ],
        numToSelect: 9,
        expandListToSeparateVariables: true
      }
    ],
    variableMap: {},
    cohortDefinitions: null
  };
  experiment.stageIds = stageConfigs.map(s => s.id);

  const agentMediators: any[] = [
    {
      persona: {
        id: "dynamic-mediator-agent",
        name: "Dynamic Faciliator",
        description: "An AI facilitator focused on counteracting specific negative group dynamics.",
        type: "mediator",
        isDefaultAddToCohort: true,
        defaultProfile: {
          name: "Facilitator",
          avatar: "🤖",
          pronouns: null
        },
        defaultModelSettings: {
          apiType: "GEMINI",
          modelName: "gemini-2.5-flash"
        }
      },
      promptMap: {
        "discussion-round-1": {
          id: "discussion-round-1",
          type: "chat",
          prompt: [
            {
              type: "TEXT",
              text: "You are participating in a live conversation as the following online alias:"
            },
            {
              type: "PROFILE_INFO"
            },
            {
              type: "PROFILE_CONTEXT"
            },
            {
              type: "TEXT",
              text: "Follow any persona context or instructions carefully. If none are given, respond in short, natural sentences (1–2 per turn). Adjust your response frequency based on group size: respond less often in groups with multiple participants so that all have a chance to speak."
            },
            {
              type: "STAGE_CONTEXT",
              stageId: "discussion-round-1",
              includePrimaryText: true,
              includeInfoText: false,
              includeHelpText: false,
              includeParticipantAnswers: true,
              includeStageDisplay: true
            },
            {
              type: "TEXT",
              text: "You are a neutral facilitator supporting a group discussion about how to allocate donations. Participants are anonymous animal avatars. Your job is to help them achieve conesnsus on through addressing failure modes in the discussion. You do not lead, persuade, or introduce ideas.\n\n  You are a neutral facilitator supporting a group discussion about how to allocate donations: you accomplish this through targeted facilitation, addressing failure modes as they arise in the conversation. You do not suggest allocation values or introduce ideas of your own.\n\n  Your job is to support clarity and movement toward a shared, specific proportional split across the three charities (e.g., 40/30/30). Consensus means one of the following:\n  * The group converges on one concrete allocation split, or\n  * The group clearly articulates a very narrow range/structure that can be finalized easily (e.g., “Something like 40/35/25 vs 35/40/25 is fine”), or\n  * The group explicitly recognizes stable disagreement, understands each other's views, and chooses not to converge further.\n  \n\n  ## When to speak\n\n  Intervene only when observing one of the failure modes below:\n\n  ### LowEffortOrLowEngagement\n  * Symptons: minimal participation, one-word answers, low / apathetic group energy\n  * Examples: \"50% to Charity B.\" \"Sure.\" \"IDK.\" (Standalone.)\n  * Intervention strategy and examples: spark brief reasoning or values without pressure\n    * “What’s one thing that made you lean that way?\"\n  \n  ### OffTopicDrift\n  * Symptoms: drifting into side chat or into adjacent topics that do not move the group towards consensus, forgetting the goal of choosing an allocation across the three charities. Light social comments or brief tangents are fine, but if the group stays off-task for too long, or the tangent takes over, it's drift.\n  * Examples:\n    * “lol what's your fav animal?\"\n    * Deep dive into philosophy of giving / personal ethics without allocation discussion: “Is charity even effective as a system?\" “I saw a podcast saying international aid is inefficient.\"\n  * Intervention strategy and examples: let small tangents breathe for a couple turns, then gently anchor back to decision-making if they continue.\n    * “Interesting point — how would you reflect that in the allocation?\"\n    * “We can return to that idea, but for now, what mix are you leaning toward?\"\n\n  ### UnevenParticipation\n  * Symptoms: one or two people dominate while the third stays quiet; the same two rotate turns; someone stays silent through a mini-exchange. Early back-and-forth is normal — give a few turns at the start. Only nudge if the imbalance persists.\n  * Examples:\n    * Two participants go back-and-forth for 3–5 turns\n    * One participant posts multiple turns in a row\n    * The third participant hasn’t spoken since the start or fell out after an early comment\n  * Intervention strategy and examples: wait a bit; if the pattern continues and the group isn't rotating naturally, gently open space\n    * “Curious to hear Z’s take too — anything stand out to you?\"\n    * “Let’s pause to make sure everyone has room to weigh in here.\"\n\n  ### NoJustificationOrPrematureConsensus\n  * Symptoms: the group appears to agree quickly without explaining why; decisions settle fast to avoid friction; polite alignment but no shared reasoning. Brief agreement is fine — only step in if they “agree\" without grounding or checking understanding.\n  * Examples:\n    * “Yeah that works.\"\n    * “Okay 50/50 then.\"\n    * “Sure, let’s just do that.\" (with no explanation or reflection)\n  * Intervention strategy and examples: gently surface one reason, confirm real alignment, or invite a light alternative check\n    * “Anyone see a trade-off or want to add a different angle?\"\n    * \"If we looked at this through ‘most urgent need,’ would the split change?\" (Alternative framing)\n    * “If we had to give just a little more to one charity, which one and why?\"\n\n  ### BinaryStuck\n  * Symptoms: the group locks into two preferred splits or priorities (e.g., 40/30 vs. 30/40), treats it as an either-or choice, or each person insists one charity “should get the most.\" Some back-and-forth is normal — only intervene if they stay stuck in these two positions and don’t explore middle ground, hybrids, or tiny adjustments.\n  * Examples:\n    * “Charity A clearly deserves the biggest share.\"\n    * “No, B should definitely get the most.\"\n    * “We already covered that — A needs more.\" (no exploration beyond two fixed stances)\n  * Intervention strategy and examples: highlight the spectrum, invite small-step thinking, and connect to shared goals / compromise\n    * “Sounds like both A and B matter a lot here — what’s a way to reflect both priorities?\"\n    * “If you had to land somewhere between the two options, what would feel fair?\"\n  \n  ### SelfContainedReasoningOnly\n  * Symptoms: participants share reasoning but do not engage with each other; three parallel monologues; ideas sit side-by-side without acknowledgement. Initial independent thinking is expected — intervene only after a few turns if no one references others.\n  * Examples:\n    * \"I pick A because local impact.\"\n    * \"I went with 30 / 40 / 40.\" (no response to each other)\n  * Intervention strategy and examples: invite building on or reacting to each other’s ideas; help surface connections if they exist.\n    * “A, did anything someone else said shape your thinking?\"\n    “Anyone want to respond to or build on another idea here?\"\n    “It sounds like B and C share a focus on fairness/impact — worth exploring that overlap?\"\n\n  ## Step rules\n  1. Identify the most likely observedFailureMode:\n    * LowEffortOrLowEngagement\n    * OffTopicDrift\n    * UnevenParticipation\n    * NoJustificationOrPrematureConsensus\n    * BinaryStuck\n    * SelfContainedReasoningOnly\n    \n    If none of these are appropriate or it is too early in the conversation, the failure mode is NoFailureModeDetected.\n  2. Decide shouldRespond. This is true only if a failure mode is active and there is a high-leverage response or nudge that can address the failure mode.  If unsure, stay silent and respond false.\n\n  3. Update the response with your intervention, stemming from the guide above.\n    * Be concise: 1–3 short sentences max.\n    * Be neutral: do not introduce new ideas or preferences.\n    \n    If shouldRespond is false, response = \"\"."
            }
          ],
          includeScaffoldingInPrompt: true,
          numRetries: 0,
          generationConfig: {
            maxTokens: 8192,
            stopSequences: [],
            temperature: 1,
            topP: 1,
            frequencyPenalty: 0,
            presencePenalty: 0,
            customRequestBodyFields: [],
            reasoningBudget: null,
            includeReasoning: false,
            disableSafetyFilters: false
          },
          structuredOutputConfig: {
            enabled: true,
            type: "NONE",
            schema: {
              type: "OBJECT",
              properties: [
                {
                  name: "explanation",
                  schema: {
                    type: "STRING",
                    description: "Your reasoning for your response and other field values."
                  }
                },
                {
                  name: "shouldRespond",
                  schema: {
                    type: "BOOLEAN",
                    description: "Whether or not to respond. Should be FALSE if nothing has been said by participants, or if we have responded within the last 2 messages. If >2 messages have passed, AND if failureMode detects some failure mode, should be TRUE."
                  }
                },
                {
                  name: "response",
                  schema: {
                    type: "STRING",
                    description: "Your response message to the group."
                  }
                },
                {
                  name: "readyToEndChat",
                  schema: {
                    type: "BOOLEAN",
                    description: "Whether or not you have completed your goals and are ready to end the conversation."
                  }
                },
                {
                  name: "turnsSinceLastIntervention",
                  schema: {
                    type: "INTEGER",
                    description: "The number of participant messages that have occurred since your last facilitator message. Count only participant utterances, not your own."
                  }
                },
                {
                  name: "consensusLevel",
                  schema: {
                    type: "STRING",
                    description: "How aligned the group’s proposed allocations are across the three charities. LOW = allocations differ significantly or preferences are unclear. MEDIUM = participants show partial alignment (e.g., similar charity priorities or narrowing ranges) but numbers are not yet aligned. HIGH = participants propose similar or converging allocations, with only small % differences."
                  }
                },
                {
                  name: "observedFailureMode",
                  schema: {
                    type: "ENUM",
                    description: "Analyze the conversation and select the single most prominent failure mode. If none are present, you MUST choose \"NoFailureModeDetected\".",
                    enumItems: [
                      "NoFailureModeDetected",
                      "LowEffortOrLowEngagement",
                      "OffTopicDrift",
                      "UnevenParticipation",
                      "NoJustificationOrPrematureConsensus",
                      "BinaryStuck",
                      "SelfContainedReasoningOnly"
                    ]
                  }
                },
                {
                  name: "proposedSolution",
                  schema: {
                    type: "ENUM",
                    description: "Based on your 'observedFailureMode' diagnosis, select the most appropriate solution strategy. If you detected no failure mode, you MUST choose \"NoSolutionNeeded\".",
                    enumItems: [
                      "NoSolutionNeeded",
                      "InviteBriefReasoningOrValues",
                      "GentlyRefocusOnAllocationTask",
                      "InviteQuietVoiceOpenSpace",
                      "CheckConsensusElicitOneReason",
                      "ExploreMiddleGroundOrSharedGoals",
                      "PromptEngagementWithOthers"
                    ]
                  }
                }
              ]
            },
            appendToPrompt: true,
            shouldRespondField: "shouldRespond",
            messageField: "response",
            explanationField: "explanation",
            readyToEndField: "readyToEndChat"
          },
          chatSettings: {
            wordsPerMinute: null,
            minMessagesBeforeResponding: 0,
            canSelfTriggerCalls: false,
            maxResponses: 100,
            initialMessage: ""
          }
        }
      }
    },
    {
      persona: {
        id: "habermas-mediator-agent",
        name: "Habermas Faciliator",
        description: "An AI facilitator focused on promoting consensus and summarization.",
        type: "mediator",
        isDefaultAddToCohort: true,
        defaultProfile: {
          name: "Facilitator",
          avatar: "🤖",
          pronouns: null
        },
        defaultModelSettings: {
          apiType: "GEMINI",
          modelName: "gemini-2.5-flash"
        }
      },
      promptMap: {
        "discussion-round-2": {
          id: "discussion-round-2",
          type: "chat",
          prompt: [
            {
              type: "TEXT",
              text: "You are participating in a live conversation as the following online alias:"
            },
            {
              type: "PROFILE_INFO"
            },
            {
              type: "PROFILE_CONTEXT"
            },
            {
              type: "TEXT",
              text: "Follow any persona context or instructions carefully. If none are given, respond in short, natural sentences (1–2 per turn). Adjust your response frequency based on group size: respond less often in groups with multiple participants so that all have a chance to speak."
            },
            {
              type: "STAGE_CONTEXT",
              stageId: "discussion-round-2",
              includePrimaryText: true,
              includeInfoText: false,
              includeHelpText: false,
              includeParticipantAnswers: true,
              includeStageDisplay: true
            },
            {
              type: "TEXT",
              text: "\nYou are a neutral facilitator supporting a group discussion about how to allocate donations: you accomplish this through summarization-style facilitation, summarizing, surfacing conversation structure, and lightly proposing process steps.\nYou do not suggest allocation values or introduce ideas of your own.\n\nYour job is to support clarity and movement toward a shared, specific proportional split across the three charities (e.g., 40/30/30). Consensus means one of the following:\n* The group converges on one concrete allocation split, or\n* The group clearly articulates a very narrow range/structure that can be finalized easily (e.g., “Something like 40/35/25 vs 35/40/25 is fine”), or\n* The group explicitly recognizes stable disagreement, understands each other's views, and chooses not to converge further.\n\n## 📝 How to speak:\n\nHere are some core behaviors and examples of how to respond.\n\n* Summarize viewpoints when the group needs shared clarity — not after every comment. Use summaries to reset, bridge, or mark progress, not to repeat obvious statements. Do not summarize if only 1-2 short opinions have been shared, it was obvious what was said, the group is already responding to each other, it would interrupt momentum, or your summary would add no new clarity.\n  * Example response: \"We seem to have two priorities emerging: urgent humanitarian support and long-term environmental protection.\"\n* Surface shared themes or contrasts\n  * Example response: “Seems like fairness and effectiveness matter to everyone\"\n* Name contrasts / tension neutrally and simply\n  * Example response: “From the two proposed allocations, we have a pull between concentrating resources vs spreading them for balance.\" \n* Reflect where alignment may exist (light touch:\n  * Example response: “There’s some overlap in your viewpoints: it seems like everyone wants to help people over planet.\" (Subtle — invites bridging without prescribing.)\n* Highlight key decision points and pivots\n  * Example response: \"Deciding whether to prioritize A or B seems to hinge on whether urgency or long-term benefit should carry more weight.\"\n* Invite clarification after summarization\n  * Example response: \"Does this summare feel right to folks?\" \n* Name possible next step **process options**, not content\n  * Example response: \"Would it help to see if there’s agreement on the main priority first — urgency, fairness, or long-term impact?\" (This is also summarizing priorities that have been mentioned by users)\n* Gently guide toward structure and convergence through summarizaiton\n  * Example response: \"If helpful, we could test whether there’s a midpoint or blended approach that reflects your shared values of A, B and C.\"\n  \nAvoid suggesting allocations, evaluating ideas, taking sides, or adding new arguments or criteria.\n\n\n* Be concise: 1–3 short sentences max.\n* Be neutral: do not introduce new ideas or preferences.\n* Summarize fairly: include all major viewpoints without evaluation.\n* Use summaries to support and steer clarity and movement, not to steer content\n  "
            }
          ],
          includeScaffoldingInPrompt: true,
          numRetries: 0,
          generationConfig: {
            maxTokens: 8192,
            stopSequences: [],
            temperature: 1,
            topP: 1,
            frequencyPenalty: 0,
            presencePenalty: 0,
            customRequestBodyFields: [],
            reasoningBudget: null,
            includeReasoning: false,
            disableSafetyFilters: false
          },
          structuredOutputConfig: {
            enabled: true,
            type: "NONE",
            schema: {
              type: "OBJECT",
              properties: [
                {
                  name: "explanation",
                  schema: {
                    type: "STRING",
                    description: "Your reasoning for your response and other field values."
                  }
                },
                {
                  name: "shouldRespond",
                  schema: {
                    type: "BOOLEAN",
                    description: "Whether you should respond in the chat. Respond FALSE if no new participant messages have been posted since your last intervention, or if the group is making progress on its own. Respond TRUE only if the facilitation guide indicates this is an appropriate point for you to intervene. If unsure, respond FALSE. Speak rarely; wait for at least a few participant messages (~3-5 turnsSinceLastIntervention) before speaking again, unless there is clear confusion or misunderstanding. Minimize your responses; prioritize fewer but high-leverage interventions."
                  }
                },
                {
                  name: "response",
                  schema: {
                    type: "STRING",
                    description: "Your response message to the group."
                  }
                },
                {
                  name: "readyToEndChat",
                  schema: {
                    type: "BOOLEAN",
                    description: "Whether or not you have completed your goals and are ready to end the conversation."
                  }
                },
                {
                  name: "turnsSinceLastIntervention",
                  schema: {
                    type: "INTEGER",
                    description: "The number of participant messages that have occurred since your last facilitator message. Count only participant utterances, not your own."
                  }
                },
                {
                  name: "consensusLevel",
                  schema: {
                    type: "STRING",
                    description: "How aligned the group’s proposed allocations are across the three charities. LOW = allocations differ significantly or preferences are unclear. MEDIUM = participants show partial alignment (e.g., similar charity priorities or narrowing ranges) but numbers are not yet aligned. HIGH = participants propose similar or converging allocations, with only small % differences."
                  }
                }
              ]
            },
            appendToPrompt: true,
            shouldRespondField: "shouldRespond",
            messageField: "response",
            explanationField: "explanation",
            readyToEndField: "readyToEndChat"
          },
          chatSettings: {
            wordsPerMinute: null,
            minMessagesBeforeResponding: 0,
            canSelfTriggerCalls: false,
            maxResponses: 100,
            initialMessage: ""
          }
        }
      }
    }
  ];
  const agentParticipants: any[] = [];

  return createExperimentTemplate({
    experiment,
    stageConfigs,
    agentMediators,
    agentParticipants
  });
}
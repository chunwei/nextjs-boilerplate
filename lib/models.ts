export const models = [
  {
    id: 'bailian:qwq-32b-preview',
    provider: 'bailian',
    providerHumanName: 'Bailian',
    makerHumanName: 'Bailian',
    modelApiName: 'qwq-32b-preview',
    minBillingTier: 'new',
    info: {
      description:
        'QwQ模型是由 Qwen 团队开发的实验性研究模型，专注于增强 AI 推理能力。',
      website: 'https://help.aliyun.com/zh/model-studio/',
      modelUrl:
        'https://help.aliyun.com/zh/model-studio/getting-started/models',
      contextWindow: 32768,
      pricing: {
        pricingUrl:
          'https://help.aliyun.com/zh/model-studio/billing-for-model-studio',
        inputCostPerMil: 3.5,
        outputCostPerMil: 7
      }
    },
    parameters: {
      temperature: {
        value: 0.7,
        range: [0, 1.9]
      },
      maximumLength: {
        value: 2048,
        range: [0, 16384]
      },
      topP: {
        value: 0.8,
        range: [0, 1]
      }
    },
    name: 'qwq-32b-preview'
  },
  {
    id: 'mistral:mistral-large',
    provider: 'mistral',
    providerHumanName: 'Mistral',
    makerHumanName: 'Mistral',
    modelApiName: 'mistral-large-latest',
    minBillingTier: 'pro',
    info: {
      description:
        'Mistral Large is ideal for complex tasks that require large reasoning capabilities or are highly specialized - like Synthetic Text Generation, Code Generation, RAG, or Agents.',
      website: 'https://mistral.ai/',
      modelUrl: 'https://mistral.ai/news/mistral-large/',
      contextWindow: 32000,
      pricing: {
        pricingUrl: 'https://docs.mistral.ai/platform/pricing/',
        inputCostPerMil: 8,
        outputCostPerMil: 24
      }
    },
    parameters: {
      temperature: {
        value: 0.7,
        range: [0, 1]
      },
      maximumLength: {
        value: 1024,
        range: [0, 4000]
      },
      topP: {
        value: 1,
        range: [0, 1]
      }
    },
    name: 'mistral-large'
  },
  {
    id: 'mistral:mistral-medium',
    provider: 'mistral',
    providerHumanName: 'Mistral',
    makerHumanName: 'Mistral',
    modelApiName: 'mistral-medium-latest',
    disabled: true,
    info: {
      description:
        'Mistral Medium is the ideal for intermediate tasks that require moderate reasoning - like Data extraction, Summarizing a Document, Writing a Job Description, or Writing Product Descriptions. Mistral Medium strikes a balance between performance and capability, making it suitable for a wide range of tasks that only require language transformation.',
      website: 'https://mistral.ai/',
      modelUrl: 'https://mistral.ai/technology/',
      contextWindow: 32000,
      pricing: {
        pricingUrl: 'https://docs.mistral.ai/platform/pricing/',
        inputCostPerMil: 2.7,
        outputCostPerMil: 8.1
      }
    },
    parameters: {
      temperature: {
        value: 0.7,
        range: [0, 1]
      },
      maximumLength: {
        value: 1024,
        range: [0, 4000]
      },
      topP: {
        value: 1,
        range: [0, 1]
      }
    },
    name: 'mistral-medium'
  },
  {
    id: 'mistral:mistral-small',
    provider: 'mistral',
    providerHumanName: 'Mistral',
    makerHumanName: 'Mistral',
    modelApiName: 'mistral-small-latest',
    name: 'mistral-small',
    minBillingTier: 'pro',
    info: {
      description:
        'Mistral Small is the ideal choice for simple tasks that one can do in bulk - like Classification, Customer Support, or Text Generation. It offers excellent performance at an affordable price point.',
      website: 'https://mistral.ai/',
      modelUrl: 'https://mistral.ai/technology/',
      contextWindow: 32000,
      pricing: {
        pricingUrl: 'https://docs.mistral.ai/platform/pricing/',
        inputCostPerMil: 2,
        outputCostPerMil: 6
      }
    },
    parameters: {
      temperature: {
        value: 0.7,
        range: [0, 1]
      },
      maximumLength: {
        value: 1024,
        range: [0, 4000]
      },
      topP: {
        value: 1,
        range: [0, 1]
      }
    }
  },
  {
    id: 'mistral:codestral-latest',
    name: 'mistral-codestral',
    provider: 'mistral',
    providerHumanName: 'Mistral',
    makerHumanName: 'Mistral',
    modelApiName: 'codestral-latest',
    disabled: true,
    info: {
      description:
        'Mistral Codestral 22B is an open-weight generative AI model explicitly designed for code generation tasks. It helps developers write and interact with code through a shared instruction and completion API endpoint. As it masters code and English, it can be used to design advanced AI applications for software developers.',
      website: 'https://mistral.ai/',
      modelUrl: 'https://mistral.ai/technology/',
      contextWindow: 32000,
      pricing: {
        pricingUrl: 'https://docs.mistral.ai/platform/pricing/',
        inputCostPerMil: 1,
        outputCostPerMil: 3
      }
    },
    parameters: {
      temperature: {
        value: 0.7,
        range: [0, 1]
      },
      maximumLength: {
        value: 1024,
        range: [0, 4000]
      },
      topP: {
        value: 1,
        range: [0, 1]
      }
    }
  },
  {
    id: 'mistral:codestral-mamba-latest',
    name: 'mistral-codestral-mamba',
    provider: 'mistral',
    providerHumanName: 'Mistral',
    makerHumanName: 'Mistral',
    modelApiName: 'codestral-mamba-latest',
    disabled: true,
    info: {
      description:
        'Mistral Codestral Mamba is an open-weight Mamba 2 language model specialized in code generation. It helps developers write and interact with code through a shared instruction and completion API endpoint. As it masters code and English, it can be used to design advanced AI applications for software developers.',
      website: 'https://mistral.ai/',
      modelUrl: 'https://mistral.ai/news/codestral-mamba/',
      contextWindow: 256000,
      pricing: {
        pricingUrl: 'https://docs.mistral.ai/platform/pricing/',
        inputCostPerMil: 1,
        outputCostPerMil: 3
      }
    },
    parameters: {
      temperature: {
        value: 0.7,
        range: [0, 1]
      },
      maximumLength: {
        value: 1024,
        range: [0, 4000]
      },
      topP: {
        value: 1,
        range: [0, 1]
      }
    }
  },
  {
    id: 'mistral:mistral-large-2',
    name: 'mistral-large-2',
    new: true,
    provider: 'mistral',
    providerHumanName: 'Mistral',
    makerHumanName: 'Mistral',
    modelApiName: 'mistral-large-2407',
    minBillingTier: 'pro',
    disabled: true,
    info: {
      description:
        'Mistral Large 2 is significantly more capable in code generation, mathematics, and reasoning. It also provides a much stronger multilingual support, and advanced function calling capabilities.',
      website: 'https://mistral.ai/',
      modelUrl: 'https://mistral.ai/news/mistral-large-2407/',
      contextWindow: 128000,
      pricing: {
        pricingUrl: 'https://docs.mistral.ai/platform/pricing/',
        inputCostPerMil: 3,
        outputCostPerMil: 9
      }
    },
    parameters: {
      temperature: {
        value: 0.7,
        range: [0, 1]
      },
      maximumLength: {
        value: 1024,
        range: [0, 4000]
      },
      topP: {
        value: 1,
        range: [0, 1]
      }
    }
  },
  {
    id: 'mistral:pixtral-12b-2409',
    name: 'pixtral-12b-2409',
    new: true,
    provider: 'mistral',
    providerHumanName: 'Mistral',
    makerHumanName: 'Mistral',
    modelApiName: 'pixtral-12b-2409',
    supportsVision: true,
    info: {
      description:
        'A 12B model with image understanding capabilities in addition to text.',
      website: 'https://mistral.ai/',
      modelUrl: 'https://mistral.ai/news/pixtral-12b/',
      contextWindow: 128000,
      pricing: {
        pricingUrl: 'https://docs.mistral.ai/platform/pricing/',
        inputCostPerMil: 0.15,
        outputCostPerMil: 0.15
      }
    },
    parameters: {
      temperature: {
        value: 0.7,
        range: [0, 1]
      },
      maximumLength: {
        value: 1024,
        range: [0, 4000]
      },
      topP: {
        value: 1,
        range: [0, 1]
      }
    }
  },
  {
    id: 'mistral:ministral-3b-latest',
    name: 'ministral-3b-latest',
    new: true,
    provider: 'mistral',
    providerHumanName: 'Mistral',
    makerHumanName: 'Mistral',
    modelApiName: 'ministral-3b-latest',
    info: {
      description:
        'A compact, efficient model for on-device tasks like smart assistants and local analytics, offering low-latency performance.',
      website: 'https://mistral.ai/',
      modelUrl: 'https://mistral.ai/news/ministraux/',
      contextWindow: 128000,
      pricing: {
        pricingUrl: 'https://docs.mistral.ai/platform/pricing/',
        inputCostPerMil: 0.04,
        outputCostPerMil: 0.04
      }
    },
    parameters: {
      temperature: {
        value: 0.7,
        range: [0, 1]
      },
      maximumLength: {
        value: 1024,
        range: [0, 4000]
      },
      topP: {
        value: 1,
        range: [0, 1]
      }
    }
  },
  {
    id: 'mistral:ministral-8b-latest',
    name: 'ministral-8b-latest',
    new: true,
    provider: 'mistral',
    providerHumanName: 'Mistral',
    makerHumanName: 'Mistral',
    modelApiName: 'ministral-8b-latest',
    info: {
      description:
        'A more powerful model with faster, memory-efficient inference, ideal for complex workflows and demanding edge applications.',
      website: 'https://mistral.ai/',
      modelUrl: 'https://mistral.ai/news/ministraux/',
      contextWindow: 128000,
      pricing: {
        pricingUrl: 'https://docs.mistral.ai/platform/pricing/',
        inputCostPerMil: 0.1,
        outputCostPerMil: 0.1
      }
    },
    parameters: {
      temperature: {
        value: 0.7,
        range: [0, 1]
      },
      maximumLength: {
        value: 1024,
        range: [0, 4000]
      },
      topP: {
        value: 1,
        range: [0, 1]
      }
    }
  },
  {
    id: 'mistral:pixtral-large-latest',
    name: 'pixtral-large-latest',
    new: true,
    provider: 'mistral',
    providerHumanName: 'Mistral',
    makerHumanName: 'Mistral',
    modelApiName: 'pixtral-large-latest',
    supportsVision: true,
    minBillingTier: 'pro',
    info: {
      description:
        'Pixtral Large is the second model in our multimodal family and demonstrates frontier-level image understanding. Particularly, the model is able to understand documents, charts and natural images, while maintaining the leading text-only understanding of Mistral Large 2.',
      website: 'https://mistral.ai/',
      modelUrl: 'https://mistral.ai/news/pixtral-large/',
      contextWindow: 128000,
      pricing: {
        pricingUrl: 'https://docs.mistral.ai/platform/pricing/',
        inputCostPerMil: 2,
        outputCostPerMil: 6
      }
    },
    parameters: {
      temperature: {
        value: 0.7,
        range: [0, 1]
      },
      maximumLength: {
        value: 1024,
        range: [0, 4000]
      },
      topP: {
        value: 1,
        range: [0, 1]
      }
    }
  },
  {
    id: 'xai:grok-beta',
    name: 'grok',
    provider: 'xai',
    providerHumanName: 'xAI',
    makerHumanName: 'xAI',
    modelApiName: 'grok-beta',
    minBillingTier: 'pro',
    info: {
      description:
        'Grok is an AI modeled after the Hitchhiker’s Guide to the Galaxy. It is intended to answer almost anything and, far harder, even suggest what questions to ask!',
      website: 'https://x.ai',
      modelUrl: 'https://x.ai/blog/grok',
      contextWindow: 131072,
      pricing: {
        pricingUrl: 'https://console.x.ai',
        inputCostPerMil: 5,
        outputCostPerMil: 15
      }
    },
    parameters: {
      temperature: {
        value: 0.7,
        range: [0, 1]
      },
      maximumLength: {
        value: 1024,
        range: [0, 4000]
      },
      topP: {
        value: 1,
        range: [0, 1]
      }
    }
  },
  {
    id: 'xai:grok-vision-beta',
    name: 'grok vision',
    provider: 'xai',
    providerHumanName: 'xAI',
    makerHumanName: 'xAI',
    modelApiName: 'grok-vision-beta',
    minBillingTier: 'pro',
    supportsVision: true,
    new: true,
    info: {
      description:
        "In addition to Grok's strong text capabilities, this multimodal model can now process a wide variety of visual information, including documents, diagrams, charts, screenshots, and photographs.",
      website: 'https://x.ai',
      modelUrl: 'https://x.ai/blog/grok',
      contextWindow: 8192,
      pricing: {
        pricingUrl: 'https://console.x.ai',
        inputCostPerMil: 15,
        outputCostPerMil: 15
      }
    },
    parameters: {
      temperature: {
        value: 0.7,
        range: [0, 1]
      },
      maximumLength: {
        value: 1024,
        range: [0, 4000]
      },
      topP: {
        value: 1,
        range: [0, 1]
      }
    }
  },
  {
    id: 'fireworks:firefunction-v1',
    provider: 'fireworks',
    providerHumanName: 'Fireworks',
    modelApiName: 'accounts/fireworks/models/firefunction-v1',
    makerHumanName: 'Fireworks',
    info: {
      description:
        'Fireworks’ GPT-4-level function calling model - 4x faster than GPT-4 and open weights.',
      website:
        'https://fireworks.ai/blog/firefunction-v1-gpt-4-level-function-calling',
      modelUrl: 'https://fireworks.ai/models/fireworks/firefunction-v1',
      contextWindow: 32768,
      pricing: {
        pricingUrl: 'https://fireworks.ai/models/fireworks/firefunction-v1',
        inputCostPerMil: 0.7,
        outputCostPerMil: 2.8
      }
    },
    parameters: {
      temperature: {
        value: 0.6,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 4096,
        range: [0, 32768]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      frequencyPenalty: {
        value: 0,
        range: [-2, 2]
      }
    },
    name: 'firefunction-v1'
  },
  {
    id: 'fireworks:dbrx-instruct',
    provider: 'fireworks',
    providerHumanName: 'Fireworks',
    modelApiName: 'accounts/fireworks/models/dbrx-instruct',
    makerHumanName: 'Fireworks',
    disabled: true,
    info: {
      description:
        'DBRX Instruct is a mixture-of-experts (MoE) large language model trained from scratch by Databricks. DBRX Instruct specializes in few-turn interactions. Dbrx is hosted as an experimental model.',
      website:
        'https://www.databricks.com/blog/introducing-dbrx-new-state-art-open-llm',
      modelUrl: 'https://fireworks.ai/models/fireworks/dbrx-instruct',
      contextWindow: 32768,
      pricing: {
        pricingUrl: 'https://fireworks.ai/models/fireworks/dbrx-instruct',
        inputCostPerMil: 1.6,
        outputCostPerMil: 1.6
      }
    },
    parameters: {
      temperature: {
        value: 0.6,
        range: [0, 2]
      },
      maximumLength: {
        value: 4096,
        range: [0, 32768]
      },
      topP: {
        value: 1,
        range: [0, 1]
      },
      topK: {
        value: 40,
        range: [1, 100]
      },
      presencePenalty: {
        value: 0,
        range: [-2, 2]
      },
      frequencyPenalty: {
        value: 0,
        range: [-2, 2]
      }
    },
    name: 'dbrx-instruct'
  },
  {
    id: 'fireworks:llama7b-v2-chat',
    provider: 'fireworks',
    providerHumanName: 'Fireworks',
    modelApiName: 'accounts/fireworks/models/llama-v2-7b-chat',
    makerHumanName: 'Meta',
    disabled: true,
    info: {
      description:
        '7 billion parameter open source model by Meta fine-tuned for chat purposes served by Fireworks. LLaMA v2 was trained on more data (~2 trillion tokens) compared to LLaMA v1 and supports context windows up to 4k tokens.',
      website: 'https://ai.meta.com/llama/',
      modelUrl: 'https://ai.meta.com/llama/',
      contextWindow: 4096,
      pricing: {
        pricingUrl: 'https://readme.fireworks.ai/page/pricing',
        inputCostPerMil: 0.07,
        outputCostPerMil: 0.28
      }
    },
    parameters: {
      temperature: {
        value: 0.75,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 1000,
        range: [300, 3000]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0.01, 1]
      }
    },
    version: '058333670f2a6e88cf1b29b8183405b17bb997767282f790b82137df8c090c1f',
    name: 'llama-2-7b-chat'
  },
  {
    id: 'fireworks:llama13b-v2-chat',
    provider: 'fireworks',
    providerHumanName: 'Fireworks',
    makerHumanName: 'Meta',
    modelApiName: 'accounts/fireworks/models/llama-v2-13b-chat',
    disabled: true,
    info: {
      description:
        '13 billion parameter open source model by Meta fine-tuned for chat purposes served by Fireworks. LLaMA v2 was trained on more data (~2 trillion tokens) compared to LLaMA v1 and supports context windows up to 4k tokens.',
      website: 'https://ai.meta.com/llama/',
      modelUrl: 'https://ai.meta.com/llama/',
      contextWindow: 4096,
      pricing: {
        pricingUrl: 'https://readme.fireworks.ai/page/pricing',
        inputCostPerMil: 0.14,
        outputCostPerMil: 0.56
      }
    },
    parameters: {
      temperature: {
        value: 0.75,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 1000,
        range: [300, 3000]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0.01, 1]
      }
    },
    name: 'llama-2-13b-chat'
  },
  {
    id: 'fireworks:llama-2-70b-chat',
    provider: 'fireworks',
    providerHumanName: 'Fireworks',
    makerHumanName: 'Meta',
    modelApiName: 'accounts/fireworks/models/llama-v2-70b-chat',
    disabled: true,
    info: {
      description:
        '70 billion parameter open source model by Meta fine-tuned for chat purposes served by Fireworks. LLaMA v2 was trained on more data (~2 trillion tokens) compared to LLaMA v1 and supports context windows up to 4k tokens.',
      website: 'https://ai.meta.com/llama/',
      modelUrl: 'https://ai.meta.com/llama/',
      contextWindow: 4096,
      pricing: {
        pricingUrl: 'https://readme.fireworks.ai/page/pricing',
        inputCostPerMil: 0.7,
        outputCostPerMil: 2.8
      }
    },
    parameters: {
      temperature: {
        value: 0.75,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 1000,
        range: [300, 3000]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0.01, 1]
      }
    },
    name: 'llama-2-70b-chat'
  },
  {
    id: 'fireworks:mixtral-8x22b-instruct',
    provider: 'fireworks',
    providerHumanName: 'Fireworks',
    modelApiName: 'accounts/fireworks/models/mixtral-8x22b-instruct',
    makerHumanName: 'Mistral',
    info: {
      description:
        '8x22b Instruct model. 8x22b is mixture-of-experts open source model by Mistral served by Fireworks.',
      website: 'https://x.com/FireworksAI_HQ/status/1778617118583586852',
      modelUrl: 'https://fireworks.ai/models/fireworks/mixtral-8x22b-instruct',
      contextWindow: 2048,
      pricing: {
        pricingUrl:
          'https://fireworks.ai/models/fireworks/mixtral-8x22b-instruct',
        inputCostPerMil: 0.9,
        outputCostPerMil: 0.9
      }
    },
    parameters: {
      temperature: {
        value: 0.6,
        range: [0, 2]
      },
      maximumLength: {
        value: 256,
        range: [0, 2048]
      },
      topP: {
        value: 1,
        range: [0, 1]
      },
      topK: {
        value: 40,
        range: [1, 100]
      },
      presencePenalty: {
        value: 0,
        range: [-2, 2]
      },
      frequencyPenalty: {
        value: 0,
        range: [-2, 2]
      }
    },
    name: 'mixtral-8x22b-instruct'
  },
  {
    id: 'fireworks:mixtral-8x22b-instruct-preview',
    provider: 'fireworks',
    providerHumanName: 'Fireworks',
    modelApiName: 'accounts/fireworks/models/mixtral-8x22b-instruct-preview',
    makerHumanName: 'Mistral',
    disabled: true,
    info: {
      description:
        '8x22b Instruct model. 8x22b is mixture-of-experts open source model by Mistral served by Fireworks.',
      website: 'https://x.com/FireworksAI_HQ/status/1778617118583586852',
      modelUrl:
        'https://fireworks.ai/models/fireworks/mixtral-8x22b-instruct-preview',
      contextWindow: 2048,
      pricing: {
        pricingUrl:
          'https://fireworks.ai/models/fireworks/mixtral-8x22b-instruct-preview',
        inputCostPerMil: 0.9,
        outputCostPerMil: 0.9
      }
    },
    parameters: {
      temperature: {
        value: 0.6,
        range: [0, 2]
      },
      maximumLength: {
        value: 256,
        range: [0, 2048]
      },
      topP: {
        value: 1,
        range: [0, 1]
      },
      topK: {
        value: 40,
        range: [1, 100]
      },
      presencePenalty: {
        value: 0,
        range: [-2, 2]
      },
      frequencyPenalty: {
        value: 0,
        range: [-2, 2]
      }
    },
    name: 'mixtral-8x22b-instruct-preview'
  },
  {
    id: 'fireworks:mixtral-8x22b',
    provider: 'fireworks',
    providerHumanName: 'Fireworks',
    makerHumanName: 'Mistral',
    disabled: true,
    modelApiName: 'accounts/fireworks/models/mixtral-8x22b',
    info: {
      description:
        '8x22b mixture-of-experts open source model by Mistral served by Fireworks.',
      website: 'https://mistral.ai/',
      modelUrl: 'https://twitter.com/MistralAI/status/1777872671709057307/',
      contextWindow: 65536,
      pricing: {
        pricingUrl: 'https://docs.mistral.ai/platform/pricing/',
        inputCostPerMil: 1.2,
        outputCostPerMil: 1.2
      }
    },
    parameters: {
      temperature: {
        value: 0.75,
        range: [0.01, 2]
      },
      maximumLength: {
        value: 1000,
        range: [300, 3000]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0.01, 1]
      }
    },
    name: 'mixtral-8x22b'
  },
  {
    id: 'fireworks:mistral-7b-instruct-4k',
    modelApiName: 'accounts/fireworks/models/mistral-7b-instruct-4k',
    provider: 'fireworks',
    providerHumanName: 'Fireworks',
    makerHumanName: 'Mistral',
    disabled: true,
    info: {
      description:
        'The Mistral-7B-Instruct-v0.1 Large Language Model (LLM) is a instruct fine-tuned version of the Mistral-7B-v0.1 served by Fireworks.',
      website: 'https://mistral.ai/',
      modelUrl: 'https://mistral.ai/news/announcing-mistral-7b/',
      contextWindow: 4096,
      pricing: {
        pricingUrl: 'https://readme.fireworks.ai/page/pricing',
        inputCostPerMil: 0.2,
        outputCostPerMil: 0.8
      }
    },
    parameters: {
      temperature: {
        value: 0.75,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 1000,
        range: [300, 3000]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0.01, 1]
      }
    },
    name: 'mistral-7b-instruct-4k'
  },
  {
    id: 'fireworks:mixtral-8x7b',
    provider: 'fireworks',
    providerHumanName: 'Fireworks',
    modelApiName: 'accounts/fireworks/models/mixtral-8x7b',
    makerHumanName: 'Mistral',
    disabled: true,
    info: {
      description:
        'Mistral MoE LLM model with 8 experts, each 7B. Warning: unofficial implementation + served by Fireworks.',
      website: 'https://mistral.ai/',
      modelUrl: 'https://x.com/MistralAI/status/1733150512395038967?s=20',
      contextWindow: 4096,
      pricing: {
        pricingUrl: 'https://readme.fireworks.ai/page/pricing',
        inputCostPerMil: 0.2,
        outputCostPerMil: 0.8
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 400,
        range: [300, 4000]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0.01, 1]
      }
    },
    name: 'mixtral-8x7b'
  },
  {
    id: 'fireworks:mixtral-8x7b-instruct',
    provider: 'fireworks',
    providerHumanName: 'Fireworks',
    modelApiName: 'accounts/fireworks/models/mixtral-8x7b-instruct',
    makerHumanName: 'Mistral',
    info: {
      description:
        'Mistral MoE 8x7B Instruct v0.1 model with Sparse Mixture of Experts. Fine tuned for instruction following.Warning: unofficial implementation + served by Fireworks.',
      website: 'https://mistral.ai/',
      modelUrl: 'https://mistral.ai/news/mixtral-of-experts/',
      contextWindow: 4096,
      pricing: {
        pricingUrl: 'https://readme.fireworks.ai/page/pricing',
        inputCostPerMil: 0.2,
        outputCostPerMil: 0.8
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 400,
        range: [300, 4000]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0.01, 1]
      }
    },
    name: 'mixtral-8x7b-instruct'
  },
  {
    id: 'fireworks:qwen2.5-coder-32b-instruct',
    name: 'qwen2.5-coder-32b-instruct',
    provider: 'fireworks',
    providerHumanName: 'Fireworks',
    modelApiName: 'accounts/fireworks/models/qwen2p5-coder-32b-instruct',
    makerHumanName: 'Fireworks',
    new: true,
    info: {
      description:
        'Qwen2.5-Coder is the latest series of Code-Specific Qwen large language models (formerly known as CodeQwen).',
      website: 'https://x.com/FireworksAI_HQ/status/1856146229690019948',
      modelUrl:
        'https://fireworks.ai/models/fireworks/qwen2p5-coder-32b-instruct',
      contextWindow: 128000,
      pricing: {
        pricingUrl: 'https://fireworks.ai/pricing',
        inputCostPerMil: 0.9,
        outputCostPerMil: 0.9
      }
    },
    parameters: {
      temperature: {
        value: 0.6,
        range: [0, 2]
      },
      maximumLength: {
        value: 4096,
        range: [0, 32768]
      },
      topP: {
        value: 1,
        range: [0, 1]
      },
      topK: {
        value: 40,
        range: [1, 100]
      },
      presencePenalty: {
        value: 0,
        range: [-2, 2]
      },
      frequencyPenalty: {
        value: 0,
        range: [-2, 2]
      }
    }
  },
  {
    id: 'groq:llama2-70b-4096',
    disabled: true,
    provider: 'groq',
    providerHumanName: 'Groq',
    modelApiName: 'llama2-70b-4096',
    makerHumanName: 'Meta',
    info: {
      description:
        '70 billion parameter open source model by Meta fine-tuned for chat purposes served by Groq. Groq uses custom Language Processing Units (LPUs) hardware to provide fast and efficient inference.',
      website: 'https://ai.meta.com/llama/',
      modelUrl: 'https://x.com/MistralAI/status/1733150512395038967?s=20',
      contextWindow: 4096,
      pricing: {
        pricingUrl: 'https://wow.groq.com/',
        inputCostPerMil: 0.7,
        outputCostPerMil: 0.8
      }
    },
    parameters: {
      temperature: {
        value: 0.2,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 400,
        range: [300, 4000]
      },
      topP: {
        value: 0.8,
        range: [0.01, 1]
      },
      topK: {
        value: 40,
        range: [1, 500]
      }
    },
    name: 'llama-2-70b-chat-groq'
  },
  {
    id: 'groq:llama-3.2-1b',
    name: 'llama-3.2-1b',
    modelApiName: 'llama-3.2-1b-preview',
    provider: 'groq',
    providerHumanName: 'Groq',
    minBillingTier: 'pro',
    makerHumanName: 'Meta',
    info: {
      description:
        'The Llama 3.2, 1 billion parameter multi-lingual text only model is made by Meta and served by Groq on their LPU hardware. It is lightweight and can be run everywhere on mobile and on edge devices.',
      website: 'https://groq.com',
      modelUrl:
        'https://www.llama.com/docs/model-cards-and-prompt-formats/llama3_2',
      contextWindow: 128000,
      pricing: {
        pricingUrl: 'https://wow.groq.com/',
        inputCostPerMil: 0.7,
        outputCostPerMil: 0.8
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 1000,
        range: [300, 8192]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0.01, 1]
      }
    }
  },
  {
    id: 'groq:llama-3.2-3b',
    name: 'llama-3.2-3b',
    modelApiName: 'llama-3.2-3b-preview',
    provider: 'groq',
    providerHumanName: 'Groq',
    minBillingTier: 'pro',
    makerHumanName: 'Meta',
    info: {
      description:
        'The Llama 3.2, 3 billion parameter multi-lingual text only model is made by Meta and served by Groq on their LPU hardware. It is lightweight and can be run everywhere on mobile and on edge devices.',
      website: 'https://groq.com',
      modelUrl:
        'https://www.llama.com/docs/model-cards-and-prompt-formats/llama3_2',
      contextWindow: 128000,
      pricing: {
        pricingUrl: 'https://wow.groq.com/',
        inputCostPerMil: 0.7,
        outputCostPerMil: 0.8
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 1000,
        range: [300, 8192]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0.01, 1]
      }
    }
  },
  {
    id: 'groq:llama-3.2-11b',
    name: 'llama-3.2-11b',
    modelApiName: 'llama-3.2-11b-text-preview',
    provider: 'groq',
    providerHumanName: 'Groq',
    minBillingTier: 'pro',
    makerHumanName: 'Meta',
    disabled: true,
    info: {
      description:
        'The Llama 3.2, 11 billion parameter multi-modal model is made by Meta and served by Groq on their LPU hardware. It is flexible and can reason on high resolution images.',
      website: 'https://groq.com',
      modelUrl:
        'https://www.llama.com/docs/model-cards-and-prompt-formats/llama3_2',
      contextWindow: 128000,
      pricing: {
        pricingUrl: 'https://wow.groq.com/',
        inputCostPerMil: 0.7,
        outputCostPerMil: 0.8
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 1000,
        range: [300, 8192]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0.01, 1]
      }
    }
  },
  {
    id: 'groq:llama-3.2-11b-vision-preview',
    name: 'llama-3.2-11b',
    modelApiName: 'llama-3.2-11b-vision-preview',
    provider: 'groq',
    providerHumanName: 'Groq',
    minBillingTier: 'pro',
    makerHumanName: 'Meta',
    supportsVision: true,
    info: {
      description:
        'The Llama 3.2, 11 billion parameter multi-modal model is made by Meta and served by Groq on their LPU hardware. It is flexible and can reason on high resolution images.',
      website: 'https://groq.com',
      modelUrl:
        'https://www.llama.com/docs/model-cards-and-prompt-formats/llama3_2',
      contextWindow: 128000,
      pricing: {
        pricingUrl: 'https://wow.groq.com/',
        inputCostPerMil: 0.7,
        outputCostPerMil: 0.8
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 1000,
        range: [300, 8192]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0.01, 1]
      }
    }
  },
  {
    id: 'groq:llama-3.2-90b',
    name: 'llama-3.2-90b',
    modelApiName: 'llama-3.2-90b-text-preview',
    provider: 'groq',
    providerHumanName: 'Groq',
    minBillingTier: 'pro',
    makerHumanName: 'Meta',
    disabled: true,
    info: {
      description:
        'The Llama 3.2, 90 billion parameter multi-modal model is made by Meta and served by Groq on their LPU hardware. It is flexible and can reason on high resolution images.',
      website: 'https://groq.com',
      modelUrl:
        'https://www.llama.com/docs/model-cards-and-prompt-formats/llama3_2',
      contextWindow: 128000,
      pricing: {
        pricingUrl: 'https://wow.groq.com/',
        inputCostPerMil: 0.7,
        outputCostPerMil: 0.8
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 1000,
        range: [300, 8192]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0.01, 1]
      }
    }
  },
  {
    id: 'groq:llama-3.2-90b-vision-preview',
    name: 'llama-3.2-90b',
    modelApiName: 'llama-3.2-90b-vision-preview',
    provider: 'groq',
    providerHumanName: 'Groq',
    minBillingTier: 'pro',
    makerHumanName: 'Meta',
    supportsVision: true,
    info: {
      description:
        'The Llama 3.2, 90 billion parameter multi-modal model is made by Meta and served by Groq on their LPU hardware. It is flexible and can reason on high resolution images.',
      website: 'https://groq.com',
      modelUrl:
        'https://www.llama.com/docs/model-cards-and-prompt-formats/llama3_2',
      contextWindow: 128000,
      pricing: {
        pricingUrl: 'https://wow.groq.com/',
        inputCostPerMil: 0.7,
        outputCostPerMil: 0.8
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 1000,
        range: [300, 8192]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0.01, 1]
      }
    }
  },
  {
    id: 'groq:llama-3.3-70b-versatile',
    name: 'llama-3.3-70b',
    modelApiName: 'llama-3.3-70b-versatile',
    provider: 'groq',
    new: true,
    providerHumanName: 'Groq',
    minBillingTier: 'pro',
    makerHumanName: 'Meta',
    info: {
      description:
        'The Meta Llama 3.3 multilingual large language model (LLM) is a pretrained and instruction tuned generative model in 70B (text in/text out). The Llama 3.3 instruction tuned text only model is optimized for multilingual dialogue use cases and outperforms many of the available open source and closed chat models on common industry benchmarks.',
      website: 'https://groq.com',
      modelUrl:
        'https://github.com/meta-llama/llama-models/blob/main/models/llama3_3/MODEL_CARD.md',
      contextWindow: 128000,
      pricing: {
        pricingUrl: 'https://wow.groq.com/',
        inputCostPerMil: 0.59,
        outputCostPerMil: 0.79
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 1000,
        range: [300, 8192]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0.01, 1]
      }
    }
  },
  {
    id: 'groq:llama-3.1-405b',
    modelApiName: 'llama-3.1-405b-reasoning',
    provider: 'groq',
    providerHumanName: 'Groq',
    minBillingTier: 'pro',
    makerHumanName: 'Meta',
    disabled: true,
    info: {
      description:
        'Llama is a 405 billion parameter open source model by Meta fine-tuned for instruction following purposes served by Groq on their LPU hardware.',
      website: 'https://groq.com',
      modelUrl:
        'https://console.groq.com/playground?model=llama-3.1-405b-reasoning',
      contextWindow: 16000,
      pricing: {
        pricingUrl: 'https://wow.groq.com/',
        inputCostPerMil: 0.7,
        outputCostPerMil: 0.8
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 1000,
        range: [300, 8192]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0.01, 1]
      }
    },
    name: 'llama-3.1-405b'
  },
  {
    id: 'groq:llama-3.1-70b',
    modelApiName: 'llama-3.1-70b-versatile',
    provider: 'groq',
    providerHumanName: 'Groq',
    minBillingTier: 'hobby',
    makerHumanName: 'Meta',
    info: {
      description:
        'Llama is a 70 billion parameter open source model by Meta fine-tuned for instruction following purposes served by Groq on their LPU hardware.',
      website: 'https://groq.com',
      modelUrl:
        'https://console.groq.com/playground?model=llama-3.1-70b-reasoning',
      contextWindow: 16000,
      pricing: {
        pricingUrl: 'https://wow.groq.com/',
        inputCostPerMil: 0.7,
        outputCostPerMil: 0.8
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 1000,
        range: [300, 8192]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0.01, 1]
      }
    },
    name: 'llama-3.1-70b'
  },
  {
    id: 'groq:llama-3.1-8b',
    modelApiName: 'llama-3.1-8b-instant',
    provider: 'groq',
    providerHumanName: 'Groq',
    makerHumanName: 'Meta',
    info: {
      description:
        'Llama is a 8 billion parameter open source model by Meta fine-tuned for instruction following purposes served by Groq on their LPU hardware.',
      website: 'https://groq.com',
      modelUrl:
        'https://console.groq.com/playground?model=llama-3.1-8b-reasoning',
      contextWindow: 16000,
      pricing: {
        pricingUrl: 'https://wow.groq.com/',
        inputCostPerMil: 0.7,
        outputCostPerMil: 0.8
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 1000,
        range: [300, 8192]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0.01, 1]
      }
    },
    name: 'llama-3.1-8b'
  },
  {
    id: 'groq:llama-3-8b-instruct',
    modelApiName: 'llama3-8b-8192',
    provider: 'groq',
    providerHumanName: 'Groq',
    makerHumanName: 'Meta',
    info: {
      description:
        'Llama is a 8 billion parameter open source model by Meta fine-tuned for instruction following purposes served by Groq on their LPU hardware.',
      website: 'https://groq.com',
      modelUrl: 'https://console.groq.com/playground?model=llama3-8b-8192',
      contextWindow: 8192,
      pricing: {
        pricingUrl: 'https://wow.groq.com/',
        inputCostPerMil: 0.1,
        outputCostPerMil: 0.1
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 1000,
        range: [300, 8192]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0.01, 1]
      }
    },
    name: 'llama-3-8b-instruct-groq'
  },
  {
    id: 'groq:llama-3-70b-instruct',
    modelApiName: 'llama3-70b-8192',
    provider: 'groq',
    providerHumanName: 'Groq',
    makerHumanName: 'Meta',
    info: {
      description:
        'Llama is a 70 billion parameter open source model by Meta fine-tuned for instruction following purposes served by Groq on their LPU hardware.',
      website: 'https://groq.com',
      modelUrl: 'https://console.groq.com/playground?model=llama3-70b-8192',
      contextWindow: 8192,
      pricing: {
        pricingUrl: 'https://wow.groq.com/',
        inputCostPerMil: 0.7,
        outputCostPerMil: 0.8
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 1000,
        range: [300, 8192]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0.01, 1]
      }
    },
    name: 'llama-3-70b-instruct-groq'
  },
  {
    id: 'groq:mixtral-8x7b-32768',
    provider: 'groq',
    providerHumanName: 'Groq',
    makerHumanName: 'Mistral',
    modelApiName: 'mixtral-8x7b-32768',
    info: {
      description:
        'Mistral MoE LLM model with 8 experts, each 7B. Warning: unofficial implementation + served by Groq. served by Groq. Groq uses custom Language Processing Units (LPUs) hardware to provide fast and efficient inference.',
      website: 'https://mistral.ai/',
      modelUrl: 'https://x.com/MistralAI/status/1733150512395038967?s=20',
      contextWindow: 21845,
      pricing: {
        pricingUrl: 'https://wow.groq.com/',
        inputCostPerMil: 0.27,
        outputCostPerMil: 0.27
      }
    },
    parameters: {
      temperature: {
        value: 0.2,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 400,
        range: [300, 4000]
      },
      topP: {
        value: 0.8,
        range: [0.01, 1]
      },
      topK: {
        value: 40,
        range: [1, 500]
      }
    },
    name: 'mixtral-8x7b-groq'
  },
  {
    id: 'groq:gemma-7b-it',
    provider: 'groq',
    providerHumanName: 'Groq',
    modelApiName: 'gemma-7b-it',
    makerHumanName: 'Google',
    info: {
      description:
        '7 billion parameter open source model by Google fine-tuned for chat purposes served by Groq. Groq uses custom Language Processing Units (LPUs) hardware to provide fast and efficient inference.',
      website: 'https://blog.google/technology/developers/google-gemma-2/',
      modelUrl: 'https://blog.google/technology/developers/google-gemma-2/',
      contextWindow: 8192,
      pricing: {
        pricingUrl: 'https://wow.groq.com/',
        inputCostPerMil: 0.2,
        outputCostPerMil: 0.2
      }
    },
    parameters: {
      temperature: {
        value: 0.2,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 1000,
        range: [300, 4000]
      },
      topP: {
        value: 0.8,
        range: [0.01, 1]
      },
      topK: {
        value: 40,
        range: [1, 500]
      }
    },
    name: 'gemma-7b-it'
  },
  {
    id: 'groq:gemma2-9b-it',
    provider: 'groq',
    providerHumanName: 'Groq',
    modelApiName: 'gemma2-9b-it',
    makerHumanName: 'Google',
    info: {
      description:
        '9 billion parameter open source model by Google fine-tuned for chat purposes served by Groq. Groq uses custom Language Processing Units (LPUs) hardware to provide fast and efficient inference.',
      website: 'https://blog.google/technology/developers/google-gemma-2/',
      modelUrl: 'https://blog.google/technology/developers/google-gemma-2/',
      contextWindow: 8192,
      pricing: {
        pricingUrl: 'https://wow.groq.com/',
        inputCostPerMil: 0.2,
        outputCostPerMil: 0.2
      }
    },
    parameters: {
      temperature: {
        value: 0.2,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 1000,
        range: [300, 4000]
      },
      topP: {
        value: 0.8,
        range: [0.01, 1]
      },
      topK: {
        value: 40,
        range: [1, 500]
      }
    },
    name: 'gemma2-9b-it'
  },
  {
    id: 'google:gemini-1.5-pro',
    makerHumanName: 'Google',
    modelApiName: 'gemini-1.5-pro-001',
    provider: 'google',
    supportsVision: true,
    providerHumanName: 'Google',
    name: 'gemini-1.5-pro',
    minBillingTier: 'pro',
    parameters: {
      maximumLength: {
        value: 4096,
        range: [1, 8192]
      },
      temperature: {
        value: 0.7,
        range: [0, 2]
      },
      stopSequences: {
        value: [],
        range: []
      },
      topP: {
        value: 0.4,
        range: [0, 1]
      },
      topK: {
        value: 32,
        range: [1, 64]
      }
    },
    info: {
      contextWindow: 1000000,
      description:
        "Gemini 1.5 Pro is the latest model of the Gemini family. It's a mid-size multimodal model that supports up to 1 million tokens and excels at long-context tasks.",
      modelUrl: 'https://deepmind.google/technologies/gemini/#gemini-1.5',
      website: 'https://deepmind.google/technologies/gemini/',
      pricing: {
        pricingUrl: 'https://ai.google.dev/pricing'
      }
    }
  },
  {
    id: 'google:gemini-1.5-flash',
    makerHumanName: 'Google',
    supportsVision: true,
    modelApiName: 'gemini-1.5-flash-001',
    provider: 'google',
    providerHumanName: 'Google',
    name: 'gemini-1.5-flash',
    parameters: {
      maximumLength: {
        value: 4096,
        range: [1, 8192]
      },
      temperature: {
        value: 0.7,
        range: [0, 2]
      },
      stopSequences: {
        value: [],
        range: []
      },
      topP: {
        value: 0.4,
        range: [0, 1]
      },
      topK: {
        value: 32,
        range: [1, 40]
      }
    },
    info: {
      contextWindow: 1000000,
      description:
        "Gemini 1.5 Flash is the latest model of the Gemini family. It's a multimodal model that supports up to 1 million tokens. It is optimized for speed and efficiency.",
      modelUrl: 'https://deepmind.google/technologies/gemini/flash/',
      website: 'https://deepmind.google/technologies/gemini/',
      pricing: {
        pricingUrl: 'https://ai.google.dev/pricing'
      }
    }
  },
  {
    id: 'google:gemini-1.5-pro-002',
    makerHumanName: 'Google',
    modelApiName: 'gemini-1.5-pro-002',
    provider: 'google',
    supportsVision: true,
    providerHumanName: 'Google',
    name: 'gemini-1.5-pro-002',
    new: true,
    minBillingTier: 'pro',
    parameters: {
      maximumLength: {
        value: 4096,
        range: [1, 8192]
      },
      temperature: {
        value: 0.7,
        range: [0, 2]
      },
      stopSequences: {
        value: [],
        range: []
      },
      topP: {
        value: 0.4,
        range: [0, 1]
      },
      topK: {
        value: 32,
        range: [1, 64]
      }
    },
    info: {
      contextWindow: 1000000,
      description:
        "Gemini 1.5 Pro is the latest model of the Gemini family. It's a mid-size multimodal model that supports up to 1 million tokens and excels at long-context tasks.",
      modelUrl: 'https://deepmind.google/technologies/gemini/#gemini-1.5',
      website: 'https://deepmind.google/technologies/gemini/',
      pricing: {
        pricingUrl: 'https://ai.google.dev/pricing'
      }
    }
  },
  {
    id: 'google:gemini-1.5-flash-002',
    makerHumanName: 'Google',
    supportsVision: true,
    modelApiName: 'gemini-1.5-flash-002',
    provider: 'google',
    providerHumanName: 'Google',
    name: 'gemini-1.5-flash-002',
    new: true,
    parameters: {
      maximumLength: {
        value: 4096,
        range: [1, 8192]
      },
      temperature: {
        value: 0.7,
        range: [0, 2]
      },
      stopSequences: {
        value: [],
        range: []
      },
      topP: {
        value: 0.4,
        range: [0, 1]
      },
      topK: {
        value: 32,
        range: [1, 40]
      }
    },
    info: {
      contextWindow: 1000000,
      description:
        "Gemini 1.5 Flash is the latest model of the Gemini family. It's a multimodal model that supports up to 1 million tokens. It is optimized for speed and efficiency.",
      modelUrl: 'https://deepmind.google/technologies/gemini/flash/',
      website: 'https://deepmind.google/technologies/gemini/',
      pricing: {
        pricingUrl: 'https://ai.google.dev/pricing'
      }
    }
  },
  {
    id: 'google:gemini-1.5-flash-8b',
    makerHumanName: 'Google',
    supportsVision: true,
    modelApiName: 'gemini-1.5-flash-8b',
    provider: 'google',
    providerHumanName: 'Google',
    name: 'gemini-1.5-flash-8b',
    new: true,
    parameters: {
      maximumLength: {
        value: 4096,
        range: [1, 8192]
      },
      temperature: {
        value: 0.7,
        range: [0, 2]
      },
      stopSequences: {
        value: [],
        range: []
      },
      topP: {
        value: 0.4,
        range: [0, 1]
      }
    },
    info: {
      contextWindow: 1000000,
      description:
        "Gemini 1.5 Flash 8b is the latest model of the Gemini family. It's a multimodal model that supports up to 1 million tokens. It is optimized for speed and cost-efficiency.",
      modelUrl: 'https://deepmind.google/technologies/gemini/flash/',
      website: 'https://deepmind.google/technologies/gemini/',
      pricing: {
        pricingUrl: 'https://ai.google.dev/pricing',
        inputCostPerMil: 0.0375,
        outputCostPerMil: 0.15
      }
    }
  },
  {
    id: 'google:gemini-exp-1206',
    makerHumanName: 'Google',
    supportsVision: true,
    modelApiName: 'gemini-exp-1206',
    provider: 'google',
    providerHumanName: 'Google',
    name: 'gemini-exp-1206',
    new: true,
    parameters: {
      maximumLength: {
        value: 4096,
        range: [1, 8192]
      },
      temperature: {
        value: 0.7,
        range: [0, 2]
      },
      stopSequences: {
        value: [],
        range: []
      },
      topP: {
        value: 0.4,
        range: [0, 1]
      }
    },
    info: {
      contextWindow: 1000000,
      description:
        "In addition to the base models, the Gemini API offers experimental models available in Preview. This model has qualitative improvements and celebrates 1 year of Gemini's launch.",
      modelUrl:
        'https://ai.google.dev/gemini-api/docs/models/experimental-models',
      website: 'https://deepmind.google/technologies/gemini',
      pricing: {
        pricingUrl: 'https://ai.google.dev/pricing',
        inputCostPerMil: 0.0375,
        outputCostPerMil: 0.15
      }
    }
  },
  {
    id: 'google:gemini-exp-1121',
    makerHumanName: 'Google',
    supportsVision: true,
    modelApiName: 'gemini-exp-1121',
    provider: 'google',
    providerHumanName: 'Google',
    name: 'gemini-exp-1121',
    new: true,
    parameters: {
      maximumLength: {
        value: 4096,
        range: [1, 8192]
      },
      temperature: {
        value: 0.7,
        range: [0, 2]
      },
      stopSequences: {
        value: [],
        range: []
      },
      topP: {
        value: 0.4,
        range: [0, 1]
      }
    },
    info: {
      contextWindow: 1000000,
      description:
        'In addition to the base models, the Gemini API offers experimental models available in Preview. This model has improved coding, reasoning, and vision capabilities.',
      modelUrl:
        'https://ai.google.dev/gemini-api/docs/models/experimental-models',
      website: 'https://deepmind.google/technologies/gemini',
      pricing: {
        pricingUrl: 'https://ai.google.dev/pricing',
        inputCostPerMil: 0.0375,
        outputCostPerMil: 0.15
      }
    }
  },
  {
    id: 'google:gemini-2.0-flash-exp',
    makerHumanName: 'Google',
    supportsVision: true,
    modelApiName: 'gemini-2.0-flash-exp',
    provider: 'google',
    providerHumanName: 'Google',
    name: 'gemini-2.0-flash',
    new: true,
    parameters: {
      maximumLength: {
        value: 8192,
        range: [1, 8192]
      },
      temperature: {
        value: 0.7,
        range: [0, 2]
      },
      stopSequences: {
        value: [],
        range: []
      },
      topP: {
        value: 0.4,
        range: [0, 1]
      }
    },
    info: {
      contextWindow: 1000000,
      description:
        'Gemini 2.0 Flash delivers next-gen features and improved capabilities, including superior speed, native tool use, multimodal generation, and a 1M token context window.',
      modelUrl: 'https://ai.google.dev/gemini-api/docs/models/gemini-v2',
      website:
        'https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024',
      pricing: {
        pricingUrl: 'https://ai.google.dev/pricing',
        inputCostPerMil: 0.0375,
        outputCostPerMil: 0.15
      }
    }
  },
  {
    id: 'anthropic:claude-instant-v1',
    provider: 'anthropic',
    providerHumanName: 'Anthropic',
    modelApiName: 'claude-instant-1.2',
    makerHumanName: 'Anthropic',
    minBillingTier: 'pro',
    disabled: true,
    info: {
      description:
        'A faster, cheaper yet still very capable version of Claude, which can handle a range of tasks including casual dialogue, text analysis, summarization, and document comprehension.',
      website: 'https://www.anthropic.com',
      modelUrl:
        'https://docs.anthropic.com/en/docs/about-claude/models#legacy-models',
      contextWindow: 100000,
      pricing: {
        pricingUrl: 'https://www.anthropic.com/pricing#anthropic-api',
        inputCostPerMil: 1.63,
        outputCostPerMil: 5.51
      }
    },
    parameters: {
      temperature: {
        value: 1,
        range: [0, 1]
      },
      maximumLength: {
        value: 200,
        range: [50, 1024]
      },
      topP: {
        value: 1,
        range: [0.1, 1]
      },
      topK: {
        value: 1,
        range: [1, 500]
      },
      presencePenalty: {
        value: 1,
        range: [0, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0, 1]
      },
      stopSequences: {
        value: ['\n\nHuman:'],
        range: []
      }
    },
    name: 'claude-instant-1.2'
  },
  {
    id: 'anthropic:claude-v1',
    provider: 'anthropic',
    providerHumanName: 'Anthropic',
    modelApiName: 'claude-1',
    makerHumanName: 'Anthropic',
    minBillingTier: 'pro',
    disabled: true,
    info: {
      description:
        "An older version of Anthropic's Claude model that excels at a wide range of tasks from sophisticated dialogue and creative content generation to detailed instruction. It is good for complex reasoning, creativity, thoughtful dialogue, coding, and detailed content creation.",
      website: 'https://www.anthropic.com',
      modelUrl:
        'https://docs.anthropic.com/en/docs/about-claude/models#legacy-models',
      contextWindow: 100000,
      pricing: {
        pricingUrl: 'https://www.anthropic.com/pricing#anthropic-api',
        inputCostPerMil: 11.02,
        outputCostPerMil: 32.62
      }
    },
    parameters: {
      temperature: {
        value: 1,
        range: [0, 1]
      },
      maximumLength: {
        value: 200,
        range: [50, 1024]
      },
      topP: {
        value: 1,
        range: [0.1, 1]
      },
      topK: {
        value: 1,
        range: [1, 500]
      },
      presencePenalty: {
        value: 1,
        range: [0, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0, 1]
      },
      stopSequences: {
        value: ['\n\nHuman:'],
        range: []
      }
    },
    name: 'claude-1'
  },
  {
    id: 'anthropic:claude-v1',
    provider: 'anthropic',
    providerHumanName: 'Anthropic',
    modelApiName: 'claude-1.3',
    makerHumanName: 'Anthropic',
    minBillingTier: 'pro',
    disabled: true,
    info: {
      description:
        "An older version of Anthropic's Claude model that excels at a wide range of tasks from sophisticated dialogue and creative content generation to detailed instruction. It is good for complex reasoning, creativity, thoughtful dialogue, coding, and detailed content creation.",
      website: 'https://www.anthropic.com',
      modelUrl:
        'https://docs.anthropic.com/en/docs/about-claude/models#legacy-models',
      contextWindow: 100000,
      pricing: {
        pricingUrl: 'https://www.anthropic.com/pricing#anthropic-api',
        inputCostPerMil: 11.02,
        outputCostPerMil: 32.62
      }
    },
    parameters: {
      temperature: {
        value: 1,
        range: [0, 1]
      },
      maximumLength: {
        value: 200,
        range: [50, 1024]
      },
      topP: {
        value: 1,
        range: [0.1, 1]
      },
      topK: {
        value: 1,
        range: [1, 500]
      },
      presencePenalty: {
        value: 1,
        range: [0, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0, 1]
      },
      stopSequences: {
        value: ['\n\nHuman:'],
        range: []
      }
    },
    name: 'claude-1'
  },
  {
    id: 'anthropic:claude-v2',
    provider: 'anthropic',
    providerHumanName: 'Anthropic',
    modelApiName: 'claude-2',
    makerHumanName: 'Anthropic',
    minBillingTier: 'pro',
    disabled: true,
    info: {
      description:
        "Anthropic's most powerful model that excels at a wide range of tasks from sophisticated dialogue and creative content generation to detailed instruction. It is good for complex reasoning, creativity, thoughtful dialogue, coding,and detailed content creation.",
      website: 'https://www.anthropic.com',
      modelUrl:
        'https://docs.anthropic.com/en/docs/about-claude/models#legacy-models',
      contextWindow: 100000,
      pricing: {
        pricingUrl: 'https://www.anthropic.com/pricing#anthropic-api',
        inputCostPerMil: 11.02,
        outputCostPerMil: 32.62
      }
    },
    parameters: {
      temperature: {
        value: 1,
        range: [0, 1]
      },
      maximumLength: {
        value: 200,
        range: [50, 1024]
      },
      topP: {
        value: 1,
        range: [0.1, 1]
      },
      topK: {
        value: 1,
        range: [1, 500]
      },
      presencePenalty: {
        value: 1,
        range: [0, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0, 1]
      },
      stopSequences: {
        value: ['\n\nHuman:'],
        range: []
      }
    },
    name: 'claude-2'
  },
  {
    id: 'anthropic:claude-v2',
    provider: 'anthropic',
    providerHumanName: 'Anthropic',
    modelApiName: 'claude-2.1',
    makerHumanName: 'Anthropic',
    minBillingTier: 'pro',
    info: {
      description:
        "Anthropic's most powerful model that excels at a wide range of tasks from sophisticated dialogue and creative content generation to detailed instruction. It is good for complex reasoning, creativity, thoughtful dialogue, coding,and detailed content creation.",
      website: 'https://www.anthropic.com',
      modelUrl:
        'https://docs.anthropic.com/en/docs/about-claude/models#legacy-models',
      contextWindow: 100000,
      pricing: {
        pricingUrl: 'https://www.anthropic.com/pricing#anthropic-api',
        inputCostPerMil: 11.02,
        outputCostPerMil: 32.62
      }
    },
    parameters: {
      temperature: {
        value: 1,
        range: [0, 1]
      },
      maximumLength: {
        value: 200,
        range: [50, 1024]
      },
      topP: {
        value: 1,
        range: [0.1, 1]
      },
      topK: {
        value: 1,
        range: [1, 500]
      },
      presencePenalty: {
        value: 1,
        range: [0, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0, 1]
      },
      stopSequences: {
        value: ['\n\nHuman:'],
        range: []
      }
    },
    name: 'claude-2'
  },
  {
    id: 'anthropic:claude-v3-opus',
    provider: 'anthropic',
    providerHumanName: 'Anthropic',
    modelApiName: 'claude-3-opus-20240229',
    makerHumanName: 'Anthropic',
    minBillingTier: 'pro',
    supportsVision: true,
    info: {
      description:
        "Claude 3 Opus is Anthropic's most intelligent model, with best-in-market performance on highly complex tasks. It can navigate open-ended prompts and sight-unseen scenarios with remarkable fluency and human-like understanding. Opus shows us the outer limits of what’s possible with generative AI.",
      website: 'https://www.anthropic.com',
      modelUrl: 'https://docs.anthropic.com/claude/docs/models-overview',
      contextWindow: 200000,
      pricing: {
        pricingUrl: 'https://www.anthropic.com/pricing#anthropic-api',
        inputCostPerMil: 15,
        outputCostPerMil: 75
      }
    },
    parameters: {
      temperature: {
        value: 1,
        range: [0, 1]
      },
      maximumLength: {
        value: 1024,
        range: [50, 4096]
      },
      topP: {
        value: 1,
        range: [0.1, 1]
      },
      topK: {
        value: 1,
        range: [1, 500]
      },
      presencePenalty: {
        value: 1,
        range: [0, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0, 1]
      },
      stopSequences: {
        value: ['\n\nHuman:'],
        range: []
      }
    },
    name: 'claude-3-opus'
  },
  {
    id: 'anthropic:claude-v3-sonnet',
    provider: 'anthropic',
    providerHumanName: 'Anthropic',
    supportsVision: true,
    modelApiName: 'claude-3-sonnet-20240229',
    makerHumanName: 'Anthropic',
    minBillingTier: 'pro',
    info: {
      description:
        'Claude 3 Sonnet strikes the ideal balance between intelligence and speed—particularly for enterprise workloads. It delivers strong performance at a lower cost compared to its peers, and is engineered for high endurance in large-scale AI deployments.',
      website: 'https://www.anthropic.com',
      modelUrl: 'https://docs.anthropic.com/claude/docs/models-overview',
      contextWindow: 200000,
      pricing: {
        pricingUrl: 'https://www.anthropic.com/pricing#anthropic-api',
        inputCostPerMil: 3,
        outputCostPerMil: 15
      }
    },
    parameters: {
      temperature: {
        value: 1,
        range: [0, 1]
      },
      maximumLength: {
        value: 1024,
        range: [50, 4096]
      },
      topP: {
        value: 1,
        range: [0.1, 1]
      },
      topK: {
        value: 1,
        range: [1, 500]
      },
      presencePenalty: {
        value: 1,
        range: [0, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0, 1]
      },
      stopSequences: {
        value: ['\n\nHuman:'],
        range: []
      }
    },
    name: 'claude-3-sonnet'
  },
  {
    id: 'anthropic:claude-v3.5-sonnet',
    provider: 'anthropic',
    providerHumanName: 'Anthropic',
    supportsVision: true,
    modelApiName: 'claude-3-5-sonnet-20241022',
    makerHumanName: 'Anthropic',
    minBillingTier: 'pro',
    new: true,
    info: {
      description:
        'Claude 3.5 Sonnet strikes the ideal balance between intelligence and speed—particularly for enterprise workloads. It delivers strong performance at a lower cost compared to its peers, and is engineered for high endurance in large-scale AI deployments.',
      website: 'https://www.anthropic.com',
      modelUrl: 'https://docs.anthropic.com/claude/docs/models-overview',
      contextWindow: 200000,
      pricing: {
        pricingUrl: 'https://www.anthropic.com/pricing#anthropic-api',
        inputCostPerMil: 3,
        outputCostPerMil: 15
      }
    },
    parameters: {
      temperature: {
        value: 1,
        range: [0, 1]
      },
      maximumLength: {
        value: 1024,
        range: [50, 4096]
      },
      topP: {
        value: 1,
        range: [0.1, 1]
      },
      topK: {
        value: 1,
        range: [1, 500]
      },
      presencePenalty: {
        value: 1,
        range: [0, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0, 1]
      },
      stopSequences: {
        value: ['\n\nHuman:'],
        range: []
      }
    },
    name: 'claude-3.5-sonnet'
  },
  {
    id: 'anthropic:claude-v3-haiku',
    provider: 'anthropic',
    providerHumanName: 'Anthropic',
    supportsVision: true,
    modelApiName: 'claude-3-haiku-20240307',
    makerHumanName: 'Anthropic',
    minBillingTier: 'pro',
    info: {
      description:
        "Claude 3 Haiku is Anthropic's fastest model yet, designed for enterprise workloads which often involve longer prompts. Haiku to quickly analyze large volumes of documents, such as quarterly filings, contracts, or legal cases, for half the cost of other models in its performance tier.",
      website: 'https://www.anthropic.com',
      modelUrl: 'https://docs.anthropic.com/claude/docs/models-overview',
      contextWindow: 200000,
      pricing: {
        pricingUrl: 'https://www.anthropic.com/pricing#anthropic-api',
        inputCostPerMil: 0.25,
        outputCostPerMil: 1.25
      }
    },
    parameters: {
      temperature: {
        value: 1,
        range: [0, 1]
      },
      maximumLength: {
        value: 1024,
        range: [50, 4096]
      },
      topP: {
        value: 1,
        range: [0.1, 1]
      },
      topK: {
        value: 1,
        range: [1, 500]
      },
      presencePenalty: {
        value: 1,
        range: [0, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0, 1]
      },
      stopSequences: {
        value: ['\n\nHuman:'],
        range: []
      }
    },
    name: 'claude-3-haiku'
  },
  {
    id: 'anthropic:claude-3.5-haiku',
    provider: 'anthropic',
    providerHumanName: 'Anthropic',
    supportsVision: false,
    modelApiName: 'claude-3-5-haiku-20241022',
    makerHumanName: 'Anthropic',
    minBillingTier: 'pro',
    name: 'claude-3-5-haiku',
    new: true,
    info: {
      description:
        'Claude 3.5 Haiku is the next generation of our fastest model. For a similar speed to Claude 3 Haiku, Claude 3.5 Haiku improves across every skill set and surpasses Claude 3 Opus, the largest model in our previous generation, on many intelligence benchmarks.',
      website: 'https://www.anthropic.com',
      modelUrl: 'https://www.anthropic.com/claude/haiku',
      contextWindow: 200000,
      pricing: {
        pricingUrl: 'https://www.anthropic.com/pricing#anthropic-api',
        inputCostPerMil: 1,
        outputCostPerMil: 5
      }
    },
    parameters: {
      temperature: {
        value: 1,
        range: [0, 1]
      },
      maximumLength: {
        value: 1024,
        range: [50, 4096]
      },
      topP: {
        value: 1,
        range: [0.1, 1]
      },
      topK: {
        value: 1,
        range: [1, 500]
      },
      presencePenalty: {
        value: 1,
        range: [0, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0, 1]
      },
      stopSequences: {
        value: ['\n\nHuman:'],
        range: []
      }
    }
  },
  {
    id: 'perplexity:llama-3-sonar-small-32k-chat',
    modelApiName: 'llama-3-sonar-small-32k-chat',
    provider: 'perplexity',
    providerHumanName: 'Perplexity',
    makerHumanName: 'Meta',
    disabled: true,
    info: {
      description:
        "Llama 3 Sonar is a 7 Billion parameter model based on Meta's Llama 3 model. It is fine-tuned for chat completions and served by Perplexity.",
      website: 'https://perplexity.ai/',
      modelUrl:
        'https://www.perplexity.ai/search/Llama-3-Overview-Mz3Cw09KTdq9gavmibDBeA',
      contextWindow: 32768,
      pricing: {
        pricingUrl: 'https://docs.perplexity.ai/docs/pricing',
        inputCostPerMil: 0.2,
        outputCostPerMil: 0.2
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.01, 2]
      },
      maximumLength: {
        value: 1000,
        range: [300, 32768]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      topK: {
        value: 1,
        range: [0.01, 2048]
      },
      presencePenalty: {
        value: 0,
        range: [-2, 2]
      },
      frequencyPenalty: {
        value: 0.1,
        range: [0.01, 1]
      }
    },
    name: 'llama-3-sonar-small-32k-chat'
  },
  {
    id: 'perplexity:llama-3.1-sonar-small-128k-chat',
    modelApiName: 'llama-3.1-sonar-small-128k-chat',
    provider: 'perplexity',
    providerHumanName: 'Perplexity',
    makerHumanName: 'Meta',
    info: {
      description:
        "Llama 3.1 Sonar is a 8 Billion parameter model based on Meta's Llama 3 model. It is fine-tuned for chat completions and served by Perplexity.",
      website: 'https://perplexity.ai/',
      modelUrl:
        'https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md',
      contextWindow: 32768,
      pricing: {
        pricingUrl: 'https://docs.perplexity.ai/docs/pricing',
        inputCostPerMil: 0.2,
        outputCostPerMil: 0.2
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.01, 2]
      },
      maximumLength: {
        value: 1000,
        range: [300, 32768]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      topK: {
        value: 1,
        range: [0.01, 2048]
      },
      presencePenalty: {
        value: 0,
        range: [-2, 2]
      },
      frequencyPenalty: {
        value: 0.1,
        range: [0.01, 1]
      }
    },
    name: 'llama-3.1-sonar-small-128k-chat'
  },
  {
    id: 'perplexity:llama-3-sonar-large-32k-chat',
    modelApiName: 'llama-3-sonar-large-32k-chat',
    provider: 'perplexity',
    providerHumanName: 'Perplexity',
    makerHumanName: 'Meta',
    disabled: true,
    info: {
      description:
        "Llama 3 Sonar is an 8x7B parameter model based on Meta's Llama 3 model. It is fine-tuned for chat completions and served by Perplexity.",
      website: 'https://perplexity.ai/',
      modelUrl:
        'https://www.perplexity.ai/search/Llama-3-Overview-Mz3Cw09KTdq9gavmibDBeA',
      contextWindow: 32768,
      pricing: {
        pricingUrl: 'https://docs.perplexity.ai/docs/pricing',
        inputCostPerMil: 0.6,
        outputCostPerMil: 0.6
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.01, 2]
      },
      maximumLength: {
        value: 1000,
        range: [300, 32768]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      topK: {
        value: 1,
        range: [0.01, 2048]
      },
      presencePenalty: {
        value: 0,
        range: [-2, 2]
      },
      frequencyPenalty: {
        value: 0.1,
        range: [0.01, 1]
      }
    },
    name: 'llama-3-sonar-large-32k-chat'
  },
  {
    id: 'perplexity:llama-3.1-sonar-large-128k-chat',
    modelApiName: 'llama-3.1-sonar-large-128k-chat',
    provider: 'perplexity',
    providerHumanName: 'Perplexity',
    makerHumanName: 'Meta',
    info: {
      description:
        "Llama 3.1 Sonar is a 70B parameter model based on Meta's Llama 3.1 model. It is fine-tuned for chat completions and served by Perplexity.",
      website: 'https://perplexity.ai/',
      modelUrl:
        'https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md',
      contextWindow: 32768,
      pricing: {
        pricingUrl: 'https://docs.perplexity.ai/docs/pricing',
        inputCostPerMil: 0.6,
        outputCostPerMil: 0.6
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.01, 2]
      },
      maximumLength: {
        value: 1000,
        range: [300, 32768]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      topK: {
        value: 1,
        range: [0.01, 2048]
      },
      presencePenalty: {
        value: 0,
        range: [-2, 2]
      },
      frequencyPenalty: {
        value: 0.1,
        range: [0.01, 1]
      }
    },
    name: 'llama-3.1-sonar-large-128k-chat'
  },
  {
    id: 'perplexity:llama-3-sonar-small-32k-online',
    modelApiName: 'llama-3-sonar-small-32k-online',
    provider: 'perplexity',
    providerHumanName: 'Perplexity',
    makerHumanName: 'Meta',
    minBillingTier: 'pro',
    disabled: true,
    info: {
      description:
        "Llama 3 Sonar Online is a 7 Billion parameter model based on Meta's Llama 3 model. It is fine-tuned for chat completions and served by Perplexity. The model has access to recent internet knowledge when forming responses.",
      website: 'https://perplexity.ai/',
      modelUrl:
        'https://www.perplexity.ai/search/Llama-3-Overview-Mz3Cw09KTdq9gavmibDBeA',
      contextWindow: 28000,
      pricing: {
        pricingUrl: 'https://docs.perplexity.ai/docs/pricing',
        inputCostPerMil: 0.2,
        outputCostPerMil: 0.2
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.01, 2]
      },
      maximumLength: {
        value: 1000,
        range: [300, 28000]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      topK: {
        value: 1,
        range: [0.01, 2048]
      },
      presencePenalty: {
        value: 0,
        range: [-2, 2]
      },
      frequencyPenalty: {
        value: 0.1,
        range: [0.01, 1]
      }
    },
    name: 'llama-3-sonar-small-32k-online'
  },
  {
    id: 'perplexity:llama-3.1-sonar-small-128k-online',
    modelApiName: 'llama-3.1-sonar-small-128k-online',
    provider: 'perplexity',
    providerHumanName: 'Perplexity',
    makerHumanName: 'Meta',
    minBillingTier: 'pro',
    info: {
      description:
        "Llama 3 Sonar Online is a 8B parameter model based on Meta's Llama 3.1 model. It is fine-tuned for chat completions and served by Perplexity. The model has access to recent internet knowledge when forming responses.",
      website: 'https://perplexity.ai/',
      modelUrl:
        'https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md',
      contextWindow: 28000,
      pricing: {
        pricingUrl: 'https://docs.perplexity.ai/docs/pricing',
        inputCostPerMil: 0.2,
        outputCostPerMil: 0.2
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.01, 2]
      },
      maximumLength: {
        value: 1000,
        range: [300, 28000]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      topK: {
        value: 1,
        range: [0.01, 2048]
      },
      presencePenalty: {
        value: 0,
        range: [-2, 2]
      },
      frequencyPenalty: {
        value: 0.1,
        range: [0.01, 1]
      }
    },
    name: 'llama-3.1-sonar-small-128k-online'
  },
  {
    id: 'perplexity:llama-3-sonar-large-32k-online',
    modelApiName: 'llama-3-sonar-large-32k-online',
    provider: 'perplexity',
    providerHumanName: 'Perplexity',
    makerHumanName: 'Meta',
    minBillingTier: 'pro',
    disabled: true,
    info: {
      description:
        "Llama 3 Sonar Online is an 70b parameter model based on Meta's Llama 3 model. It is fine-tuned for chat completions and served by Perplexity. The model has access to recent internet knowledge when forming responses.",
      website: 'https://perplexity.ai/',
      modelUrl:
        'https://www.perplexity.ai/search/Llama-3-Overview-Mz3Cw09KTdq9gavmibDBeA',
      contextWindow: 28000,
      pricing: {
        pricingUrl: 'https://docs.perplexity.ai/docs/pricing',
        inputCostPerMil: 0.6,
        outputCostPerMil: 0.6
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.01, 2]
      },
      maximumLength: {
        value: 1000,
        range: [300, 28000]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      topK: {
        value: 1,
        range: [0.01, 2048]
      },
      presencePenalty: {
        value: 0,
        range: [-2, 2]
      },
      frequencyPenalty: {
        value: 0.1,
        range: [0.01, 1]
      }
    },
    name: 'llama-3-sonar-large-32k-online'
  },
  {
    id: 'perplexity:llama-3.1-sonar-large-128k-online',
    modelApiName: 'llama-3.1-sonar-large-128k-online',
    provider: 'perplexity',
    providerHumanName: 'Perplexity',
    makerHumanName: 'Meta',
    minBillingTier: 'pro',
    info: {
      description:
        "Llama 3 Sonar Online is an 8x7B parameter model based on Meta's Llama 3.1 model. It is fine-tuned for chat completions and served by Perplexity. The model has access to recent internet knowledge when forming responses.",
      website: 'https://perplexity.ai/',
      modelUrl:
        'https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md',
      contextWindow: 28000,
      pricing: {
        pricingUrl: 'https://docs.perplexity.ai/docs/pricing',
        inputCostPerMil: 0.6,
        outputCostPerMil: 0.6
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.01, 2]
      },
      maximumLength: {
        value: 1000,
        range: [300, 28000]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      topK: {
        value: 1,
        range: [0.01, 2048]
      },
      presencePenalty: {
        value: 0,
        range: [-2, 2]
      },
      frequencyPenalty: {
        value: 0.1,
        range: [0.01, 1]
      }
    },
    name: 'llama-3.1-sonar-large-128k-online'
  },
  {
    id: 'perplexity:llama-3.1-sonar-huge-128k-online',
    modelApiName: 'llama-3.1-sonar-huge-128k-online',
    provider: 'perplexity',
    providerHumanName: 'Perplexity',
    makerHumanName: 'Meta',
    minBillingTier: 'pro',
    info: {
      description:
        "Llama 3 Sonar Online is an 405B parameter model based on Meta's Llama 3.1 model. It is fine-tuned for chat completions and served by Perplexity. The model has access to recent internet knowledge when forming responses.",
      website: 'https://perplexity.ai/',
      modelUrl:
        'https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md',
      contextWindow: 28000,
      pricing: {
        pricingUrl: 'https://docs.perplexity.ai/docs/pricing',
        inputCostPerMil: 0.6,
        outputCostPerMil: 0.6
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.01, 2]
      },
      maximumLength: {
        value: 1000,
        range: [300, 28000]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      topK: {
        value: 1,
        range: [0.01, 2048]
      },
      presencePenalty: {
        value: 0,
        range: [-2, 2]
      },
      frequencyPenalty: {
        value: 0.1,
        range: [0.01, 1]
      }
    },
    name: 'llama-3.1-sonar-huge-128k-online'
  },
  {
    id: 'perplexity:llama-3-8b-instruct',
    modelApiName: 'llama-3-8b-instruct',
    provider: 'perplexity',
    providerHumanName: 'Perplexity',
    makerHumanName: 'Meta',
    disabled: true,
    info: {
      description:
        'Llama is a 8 billion parameter open source model by Meta fine-tuned for instruction following purposes served by Perplexity.',
      website: 'https://perplexity.ai/',
      modelUrl:
        'https://blog.perplexity.ai/blog/introducing-pplx-online-llms?utm_source=labs&utm_medium=labs&utm_campaign=online-llms',
      contextWindow: 8192,
      pricing: {
        pricingUrl: 'https://docs.perplexity.ai/docs/pricing',
        inputCostPerMil: 0.2,
        outputCostPerMil: 0.2
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 1000,
        range: [300, 8192]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0.01, 1]
      }
    },
    name: 'llama-3-8b-instruct'
  },
  {
    id: 'perplexity:llama-3-70b-instruct',
    modelApiName: 'llama-3-70b-instruct',
    provider: 'perplexity',
    providerHumanName: 'Perplexity',
    minBillingTier: 'pro',
    makerHumanName: 'Meta',
    disabled: true,
    info: {
      description:
        'Llama is a 70 billion parameter open source model by Meta fine-tuned for instruction following purposes served by Perplexity.',
      website: 'https://perplexity.ai/',
      modelUrl:
        'https://blog.perplexity.ai/blog/introducing-pplx-online-llms?utm_source=labs&utm_medium=labs&utm_campaign=online-llms',
      contextWindow: 8192,
      pricing: {
        pricingUrl: 'https://docs.perplexity.ai/docs/pricing',
        inputCostPerMil: 1,
        outputCostPerMil: 1
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 1000,
        range: [300, 8192]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0.01, 1]
      }
    },
    name: 'llama-3-70b-instruct'
  },
  {
    id: 'perplexity:codellama-34b-instruct',
    modelApiName: 'codellama-34b-instruct',
    disabled: true,
    provider: 'perplexity',
    providerHumanName: 'Perplexity',
    minBillingTier: 'pro',
    makerHumanName: 'Meta',
    info: {
      description:
        'Code Llama is a 34 billion parameter open source model by Meta fine-tuned for instruction following purposes served by Perplexity.',
      website: 'https://perplexity.ai/',
      modelUrl:
        'https://blog.perplexity.ai/blog/introducing-pplx-online-llms?utm_source=labs&utm_medium=labs&utm_campaign=online-llms',
      contextWindow: 16384,
      pricing: {
        pricingUrl: 'https://docs.perplexity.ai/docs/pricing',
        inputCostPerMil: 0.35,
        outputCostPerMil: 1.4
      }
    },
    parameters: {
      temperature: {
        value: 0.75,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 1000,
        range: [300, 16384]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0.01, 1]
      }
    },
    name: 'codellama-34b-instruct'
  },
  {
    id: 'perplexity:codellama-70b-instruct',
    modelApiName: 'codellama-70b-instruct',
    provider: 'perplexity',
    disabled: true,
    providerHumanName: 'Perplexity',
    minBillingTier: 'pro',
    makerHumanName: 'Meta',
    info: {
      description:
        'Code Llama is a 70 billion parameter open source model by Meta fine-tuned for instruction following purposes served by Perplexity.',
      website: 'https://perplexity.ai/',
      modelUrl:
        'https://blog.perplexity.ai/blog/introducing-pplx-online-llms?utm_source=labs&utm_medium=labs&utm_campaign=online-llms',
      contextWindow: 16384,
      pricing: {
        pricingUrl: 'https://docs.perplexity.ai/docs/pricing',
        inputCostPerMil: 0.7,
        outputCostPerMil: 2.8
      }
    },
    parameters: {
      temperature: {
        value: 0.75,
        range: [0.01, 5]
      },
      maximumLength: {
        value: 1000,
        range: [300, 16384]
      },
      topP: {
        value: 1,
        range: [0.01, 1]
      },
      frequencyPenalty: {
        value: 1,
        range: [0.01, 1]
      }
    },
    name: 'codellama-70b-instruct'
  },
  {
    id: 'huggingface:bigscience/bloom',
    provider: 'huggingface',
    providerHumanName: 'HuggingFace',
    makerHumanName: 'BigScience',
    modelApiName: 'bigscience/bloom',
    disabled: true,
    info: {
      website: 'https://bigscience.huggingface.co/',
      modelUrl: 'https://huggingface.co/bigscience/bloom',
      contextWindow: 1024,
      description:
        "BLOOM is an autoregressive Large Language Model (LLM) created by BigScience using industrial-scale computational resources. With the ability to output coherent text in 46 languages and 13 programming languages that is hardly distinguishable from human-written text. BLOOM can also perform text tasks it hasn't been explicitly trained for by casting them as text generation tasks.",
      instructions:
        "Do NOT talk to Bloom as an entity, it's not a chatbot but a webpage/blog/article completion model. For the best results: mimic a few words of a webpage similar to the content you want to generate. Start a sentence as if YOU were writing a blog, webpage, math post, coding article and Bloom will generate a coherent follow-up."
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.1, 1]
      },
      maximumLength: {
        value: 200,
        range: [50, 1024]
      },
      topP: {
        value: 0.95,
        range: [0.01, 0.99]
      },
      topK: {
        value: 4,
        range: [1, 500]
      },
      repetitionPenalty: {
        value: 1.03,
        range: [0.1, 2]
      }
    },
    name: 'bloom'
  },
  {
    id: 'huggingface:google/flan-t5-xxl',
    provider: 'huggingface',
    makerHumanName: 'Google',
    providerHumanName: 'HuggingFace',
    modelApiName: 'google/flan-t5-xxl',
    disabled: true,
    name: 'flan-t5-xxl',
    info: {
      description:
        'FLAN-T5 XXL is an enhanced Text-to-Text Transfer Transformer fine-tuned on over 1000 tasks across multiple languages. Its unified text-to-text format facilitates broad applicability and provides state-of-the-art performance.',
      modelUrl: 'https://huggingface.co/google/flan-t5-xxl',
      website: 'https://github.com/google-research/t5x',
      contextWindow: 1024
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.1, 1]
      },
      maximumLength: {
        value: 200,
        range: [50, 1024]
      },
      topP: {
        value: 0.95,
        range: [0.01, 0.99]
      },
      topK: {
        value: 4,
        range: [1, 500]
      },
      repetitionPenalty: {
        value: 1.03,
        range: [0.1, 2]
      }
    }
  },
  {
    id: 'huggingface:google/gemma-2b-it',
    provider: 'huggingface',
    makerHumanName: 'Google',
    providerHumanName: 'HuggingFace',
    modelApiName: 'google/gemma-2b-it',
    name: 'gemma-2b-it',
    disabled: true,
    info: {
      description:
        'Gemma is a family of lightweight, state-of-the-art open models built from the same research and technology used to create the Gemini models.',
      modelUrl: 'https://huggingface.co/google/gemma-2b-it',
      website: 'https://blog.google/technology/developers/gemma-open-models/',
      datasetUrl: '$undefined',
      contextWindow: 8000
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.1, 1]
      },
      maximumLength: {
        value: 1024,
        range: [50, 1024]
      },
      topP: {
        value: 0.95,
        range: [0.01, 0.99]
      },
      topK: {
        value: 4,
        range: [1, 500]
      },
      repetitionPenalty: {
        value: 1.03,
        range: [0.1, 2]
      }
    }
  },
  {
    id: 'huggingface:google/gemma-7b-it',
    provider: 'huggingface',
    makerHumanName: 'Google',
    providerHumanName: 'HuggingFace',
    modelApiName: 'google/gemma-7b-it',
    name: 'gemma-7b-it',
    disabled: true,
    info: {
      description:
        'Gemma is a family of lightweight, state-of-the-art open models built from the same research and technology used to create the Gemini models.',
      modelUrl: 'https://huggingface.co/google/gemma-7b-it',
      website: 'https://blog.google/technology/developers/gemma-open-models/',
      datasetUrl: '$undefined',
      contextWindow: 8000
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.1, 1]
      },
      maximumLength: {
        value: 1024,
        range: [50, 1024]
      },
      topP: {
        value: 0.95,
        range: [0.01, 0.99]
      },
      topK: {
        value: 4,
        range: [1, 500]
      },
      repetitionPenalty: {
        value: 1.03,
        range: [0.1, 2]
      }
    }
  },
  {
    id: 'huggingface:EleutherAI/gpt-neox-20b',
    provider: 'huggingface',
    modelApiName: 'EleutherAI/gpt-neox-20b',
    providerHumanName: 'HuggingFace',
    makerHumanName: 'EleutherAI',
    info: {
      description:
        'GPT-NeoX-20B is a 20 billion parameter autoregressive language model trained on the Pile using the GPT-NeoX library. Its architecture closely resembles that of GPT-3 and GPT-J-6B.',
      website: 'http://eleuther.ai/',
      modelUrl: 'https://huggingface.co/EleutherAI/gpt-neox-20b',
      datasetUrl:
        'https://huggingface.co/EleutherAI/gpt-neox-20b#training-dataset',
      contextWindow: 2048
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.1, 1]
      },
      maximumLength: {
        value: 200,
        range: [50, 1024]
      },
      topP: {
        value: 0.95,
        range: [0.01, 0.99]
      },
      topK: {
        value: 4,
        range: [1, 500]
      },
      repetitionPenalty: {
        value: 1.03,
        range: [0.1, 2]
      },
      stopSequences: {
        value: [],
        range: []
      }
    },
    disabled: true,
    name: 'gpt-neox-20b'
  },
  {
    id: 'huggingface:OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5',
    provider: 'huggingface',
    modelApiName: 'OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5',
    providerHumanName: 'HuggingFace',
    makerHumanName: 'OpenAssistant',
    info: {
      description:
        'This is the 4th iteration English supervised-fine-tuning (SFT) model of the Open-Assistant project.  It is based on a Pythia 12B, fine-tuned on human demonstrations of assistant conversations collected through the Open-Assistant human feedback web app before March 25, 2023.',
      modelUrl:
        'https://huggingface.co/OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5',
      website: 'https://open-assistant.io',
      contextWindow: 1024,
      datasetUrl: 'https://huggingface.co/datasets/OpenAssistant/oasst1'
    },
    parameters: {
      maximumLength: {
        value: 200,
        range: [50, 1024]
      },
      typicalP: {
        value: 0.2,
        range: [0.1, 0.99]
      },
      repetitionPenalty: {
        value: 1,
        range: [0.1, 2]
      }
    },
    disabled: true,
    name: 'oasst-sft-4-pythia-12b-epoch-3.5'
  },
  {
    id: 'huggingface:OpenAssistant/oasst-sft-1-pythia-12b',
    modelApiName: 'OpenAssistant/oasst-sft-1-pythia-12b',
    provider: 'huggingface',
    providerHumanName: 'HuggingFace',
    makerHumanName: 'OpenAssistant',
    info: {
      description:
        'This is the first iteration English supervised-fine-tuning (SFT) model of the Open-Assistant project. It is based on a Pythia 12B, fine-tuned on approximately 22k human demonstrations of assistant conversations collected through the Open-Assistant human feedback web app before March 7, 2023.',
      modelUrl: 'https://huggingface.co/OpenAssistant/oasst-sft-1-pythia-12b',
      website: 'https://open-assistant.io',
      contextWindow: 1024,
      datasetUrl: 'https://huggingface.co/datasets/OpenAssistant/oasst1'
    },
    parameters: {
      maximumLength: {
        value: 200,
        range: [50, 1024]
      },
      typicalP: {
        value: 0.2,
        range: [0.1, 0.99]
      },
      repetitionPenalty: {
        value: 1,
        range: [0.1, 2]
      }
    },
    disabled: true,
    name: 'oasst-sft-1-pythia-12b'
  },
  {
    id: 'huggingface:bigcode/santacoder',
    modelApiName: 'bigcode/santacoder',
    provider: 'huggingface',
    providerHumanName: 'HuggingFace',
    makerHumanName: 'BigCode',
    info: {
      description:
        'The SantaCoder models are a series of 1.1B parameter models trained on the Python, Java, and JavaScript subset of The Stack (v1.1).',
      instructions:
        'The model was trained on GitHub code. As such it is not an instruction model and commands like "Write a function that computes the square root." do not work well. You should phrase commands like they occur in source code such as comments (e.g. # the following function computes the sqrt) or write a function signature and docstring and let the model complete the function body.',
      contextWindow: 2048,
      modelUrl: 'https://huggingface.co/bigcode/santacoder',
      datasetUrl: 'https://www.bigcode-project.org/docs/about/the-stack/',
      website: 'https://www.bigcode-project.org'
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.1, 1]
      },
      maximumLength: {
        value: 200,
        range: [50, 1024]
      },
      topP: {
        value: 0.95,
        range: [0.01, 0.99]
      },
      topK: {
        value: 4,
        range: [1, 500]
      },
      repetitionPenalty: {
        value: 1.03,
        range: [0.1, 2]
      }
    },
    disabled: true,
    name: 'santacoder'
  },
  {
    id: 'cohere:command-r-plus',
    provider: 'cohere',
    providerHumanName: 'Cohere',
    makerHumanName: 'Cohere',
    modelApiName: 'command-r-plus',
    name: 'Command R+',
    info: {
      description:
        "Command R+ is Cohere's newest large language model, optimized for conversational interaction and long-context tasks. It aims at being extremely performant, enabling companies to move beyond proof of concept and into production.",
      modelUrl: 'https://docs.cohere.com/docs/command-r-plus',
      contextWindow: 128000,
      website: 'https://cohere.com',
      pricing: {
        pricingUrl: 'https://cohere.com/pricing',
        inputCostPerMil: 3,
        outputCostPerMil: 15
      }
    },
    parameters: {
      temperature: {
        value: 0.9,
        range: [0, 2]
      },
      maximumLength: {
        value: 1024,
        range: [50, 4096]
      },
      topP: {
        value: 1,
        range: [0, 1]
      },
      topK: {
        value: 0,
        range: [0, 500]
      },
      presencePenalty: {
        value: 0,
        range: [0, 1]
      },
      frequencyPenalty: {
        value: 0,
        range: [0, 1]
      },
      stopSequences: {
        value: [],
        range: []
      }
    }
  },
  {
    id: 'cohere:command-r',
    provider: 'cohere',
    providerHumanName: 'Cohere',
    makerHumanName: 'Cohere',
    modelApiName: 'command-r',
    name: 'Command R',
    info: {
      description:
        'Command R is a large language model optimized for conversational interaction and long context tasks. It targets the “scalable” category of models that balance high performance with strong accuracy, enabling companies to move beyond proof of concept and into production.',
      modelUrl: 'https://docs.cohere.com/docs/command-r',
      contextWindow: 128000,
      website: 'https://cohere.com',
      pricing: {
        pricingUrl: 'https://cohere.com/pricing',
        inputCostPerMil: 0.5,
        outputCostPerMil: 1.5
      }
    },
    parameters: {
      temperature: {
        value: 0.9,
        range: [0, 2]
      },
      maximumLength: {
        value: 1024,
        range: [50, 4096]
      },
      topP: {
        value: 1,
        range: [0, 1]
      },
      topK: {
        value: 0,
        range: [0, 500]
      },
      presencePenalty: {
        value: 0,
        range: [0, 1]
      },
      frequencyPenalty: {
        value: 0,
        range: [0, 1]
      },
      stopSequences: {
        value: [],
        range: []
      }
    }
  },
  {
    id: 'cohere:command-light-nightly',
    provider: 'cohere',
    providerHumanName: 'Cohere',
    makerHumanName: 'Cohere',
    modelApiName: 'command-light-nightly',
    name: 'command-light-nightly',
    info: {
      description:
        "A smaller and faster version of Cohere's command model with almost as much capability but improved speed.",
      modelUrl: 'https://docs.cohere.com/docs/command-beta',
      contextWindow: 4096,
      website: 'https://cohere.com',
      pricing: {
        pricingUrl: 'https://cohere.com/pricing',
        inputCostPerMil: 15,
        outputCostPerMil: 15
      }
    },
    parameters: {
      temperature: {
        value: 0.9,
        range: [0, 2]
      },
      maximumLength: {
        value: 200,
        range: [50, 1024]
      },
      topP: {
        value: 1,
        range: [0, 1]
      },
      topK: {
        value: 0,
        range: [0, 500]
      },
      presencePenalty: {
        value: 0,
        range: [0, 1]
      },
      frequencyPenalty: {
        value: 0,
        range: [0, 1]
      },
      stopSequences: {
        value: [],
        range: []
      }
    }
  },
  {
    id: 'cohere:command-nightly',
    provider: 'cohere',
    providerHumanName: 'Cohere',
    makerHumanName: 'Cohere',
    modelApiName: 'command-nightly',
    name: 'command-nightly',
    info: {
      description:
        'An instruction-following conversational model by Cohere that performs language tasks with high quality and reliability while providing longer context compared to generative models.',
      modelUrl: 'https://docs.cohere.com/docs/command-beta',
      contextWindow: 4096,
      website: 'https://cohere.com',
      pricing: {
        pricingUrl: 'https://cohere.com/pricing',
        inputCostPerMil: 15,
        outputCostPerMil: 15
      }
    },
    parameters: {
      temperature: {
        value: 0.9,
        range: [0, 2]
      },
      maximumLength: {
        value: 200,
        range: [50, 1024]
      },
      topP: {
        value: 1,
        range: [0, 1]
      },
      topK: {
        value: 0,
        range: [0, 500]
      },
      presencePenalty: {
        value: 0,
        range: [0, 1]
      },
      frequencyPenalty: {
        value: 0,
        range: [0, 1]
      },
      stopSequences: {
        value: [],
        range: []
      }
    }
  },
  {
    id: 'openai:o1-preview',
    modelApiName: 'o1-preview',
    provider: 'openai',
    providerHumanName: 'OpenAI',
    makerHumanName: 'OpenAI',
    name: 'o1-preview',
    supportsVision: false,
    minBillingTier: 'pro',
    disabled: true,
    new: true,
    info: {
      description:
        'Reasoning model designed to solve hard problems across domains – the o1 series of large language models are trained with reinforcement learning to perform complex reasoning. o1 models think before they answer, producing a long internal chain of thought before responding to the user.',
      modelUrl: 'https://platform.openai.com/docs/models/o1',
      website: 'https://openai.com',
      contextWindow: 128000,
      pricing: {
        inputCostPerMil: 15,
        outputCostPerMil: 60,
        pricingUrl: 'https://openai.com/pricing'
      }
    },
    parameters: {
      temperature: {
        value: 0.7,
        range: [0, 2]
      },
      maximumLength: {
        value: 1024,
        range: [50, 2048]
      },
      topP: {
        value: 1,
        range: [0, 1]
      },
      presencePenalty: {
        value: 0,
        range: [0, 2]
      },
      frequencyPenalty: {
        value: 0,
        range: [0, 2]
      },
      stopSequences: {
        value: [],
        range: []
      }
    }
  },
  {
    id: 'openai:o1-mini',
    modelApiName: 'o1-mini',
    provider: 'openai',
    providerHumanName: 'OpenAI',
    makerHumanName: 'OpenAI',
    name: 'o1-mini',
    supportsVision: false,
    minBillingTier: 'pro',
    disabled: true,
    new: true,
    info: {
      description:
        'Faster and cheaper reasoning model particularly good at coding, math, and science – the o1 series of large language models are trained with reinforcement learning to perform complex reasoning. o1 models think before they answer, producing a long internal chain of thought before responding to the user.',
      modelUrl: 'https://platform.openai.com/docs/models/o1',
      website: 'https://openai.com',
      contextWindow: 128000,
      pricing: {
        inputCostPerMil: 3,
        outputCostPerMil: 12,
        pricingUrl: 'https://openai.com/pricing'
      }
    },
    parameters: {
      temperature: {
        value: 0.7,
        range: [0, 2]
      },
      maximumLength: {
        value: 1024,
        range: [50, 2048]
      },
      topP: {
        value: 1,
        range: [0, 1]
      },
      presencePenalty: {
        value: 0,
        range: [0, 2]
      },
      frequencyPenalty: {
        value: 0,
        range: [0, 2]
      },
      stopSequences: {
        value: [],
        range: []
      }
    }
  },
  {
    id: 'openai:gpt-4o',
    modelApiName: 'gpt-4o',
    provider: 'openai',
    providerHumanName: 'OpenAI',
    makerHumanName: 'OpenAI',
    name: 'gpt-4o',
    supportsVision: true,
    minBillingTier: 'pro',
    info: {
      description:
        'GPT-4o from OpenAI has broad general knowledge and domain expertise allowing it to follow complex instructions in natural language and solve difficult problems accurately. It matches GPT-4 Turbo performance with a faster and cheaper API.',
      modelUrl: 'https://platform.openai.com/docs/models/gpt-4o',
      website: 'https://openai.com',
      contextWindow: 128000,
      pricing: {
        inputCostPerMil: 5,
        outputCostPerMil: 15,
        pricingUrl: 'https://openai.com/pricing'
      }
    },
    parameters: {
      temperature: {
        value: 0.7,
        range: [0, 2]
      },
      maximumLength: {
        value: 1024,
        range: [50, 2048]
      },
      topP: {
        value: 1,
        range: [0, 1]
      },
      presencePenalty: {
        value: 0,
        range: [0, 2]
      },
      frequencyPenalty: {
        value: 0,
        range: [0, 2]
      },
      stopSequences: {
        value: [],
        range: []
      }
    }
  },
  {
    id: 'openai:gpt-4o-mini',
    modelApiName: 'gpt-4o-mini',
    provider: 'openai',
    providerHumanName: 'OpenAI',
    makerHumanName: 'OpenAI',
    name: 'gpt-4o-mini',
    supportsVision: true,
    info: {
      description:
        'GPT-4o mini from OpenAI is their most advanced and cost-efficient small model. It is multi-modal (accepting text or image inputs and outputting text) and has higher intelligence than gpt-3.5-turbo but is just as fast.',
      modelUrl: 'https://platform.openai.com/docs/models/gpt-4o-mini',
      website: 'https://openai.com',
      contextWindow: 128000,
      pricing: {
        inputCostPerMil: 0.15,
        outputCostPerMil: 0.6,
        pricingUrl: 'https://openai.com/pricing'
      }
    },
    parameters: {
      temperature: {
        value: 0.7,
        range: [0, 2]
      },
      maximumLength: {
        value: 1024,
        range: [50, 2048]
      },
      topP: {
        value: 1,
        range: [0, 1]
      },
      presencePenalty: {
        value: 0,
        range: [0, 2]
      },
      frequencyPenalty: {
        value: 0,
        range: [0, 2]
      },
      stopSequences: {
        value: [],
        range: []
      }
    }
  },
  {
    id: 'openai:gpt-4-turbo',
    modelApiName: 'gpt-4-turbo',
    provider: 'openai',
    providerHumanName: 'OpenAI',
    makerHumanName: 'OpenAI',
    supportsVision: true,
    name: 'gpt-4-turbo',
    minBillingTier: 'pro',
    info: {
      description:
        'gpt-4-turbo from OpenAI has broad general knowledge and domain expertise allowing it to follow complex instructions in natural language and solve difficult problems accurately. It has a knowledge cutoff of April 2023 and a 128,000 token context window.',
      modelUrl: 'https://platform.openai.com/docs/models/gpt-4-turbo-and-gpt-4',
      website: 'https://openai.com',
      contextWindow: 128000,
      pricing: {
        inputCostPerMil: 10,
        outputCostPerMil: 30,
        pricingUrl: 'https://openai.com/pricing'
      }
    },
    parameters: {
      temperature: {
        value: 0.7,
        range: [0, 2]
      },
      maximumLength: {
        value: 1024,
        range: [1, 4095]
      },
      topP: {
        value: 1,
        range: [0, 1]
      },
      presencePenalty: {
        value: 0,
        range: [0, 2]
      },
      frequencyPenalty: {
        value: 0,
        range: [0, 2]
      },
      stopSequences: {
        value: [],
        range: []
      }
    }
  },
  {
    id: 'openai:gpt-4',
    modelApiName: 'gpt-4',
    provider: 'openai',
    providerHumanName: 'OpenAI',
    makerHumanName: 'OpenAI',
    name: 'gpt-4',
    minBillingTier: 'pro',
    info: {
      description:
        'GPT-4 from OpenAI has broad general knowledge and domain expertise allowing it to follow complex instructions in natural language and solve difficult problems accurately.',
      modelUrl: 'https://platform.openai.com/docs/models/gpt-4',
      website: 'https://openai.com',
      contextWindow: 8192,
      pricing: {
        inputCostPerMil: 30,
        outputCostPerMil: 60,
        pricingUrl: 'https://openai.com/pricing'
      }
    },
    parameters: {
      temperature: {
        value: 0.7,
        range: [0, 2]
      },
      maximumLength: {
        value: 1024,
        range: [1, 4095]
      },
      topP: {
        value: 1,
        range: [0, 1]
      },
      presencePenalty: {
        value: 0,
        range: [0, 2]
      },
      frequencyPenalty: {
        value: 0,
        range: [0, 2]
      },
      stopSequences: {
        value: [],
        range: []
      }
    }
  },
  {
    id: 'openai:gpt-4-0613',
    disabled: true,
    provider: 'openai',
    providerHumanName: 'OpenAI',
    makerHumanName: 'OpenAI',
    modelApiName: 'gpt-4-0613',
    name: 'gpt-4-0613',
    minBillingTier: 'pro',
    info: {
      description:
        'Snapshot of gpt-4 from June 13th 2023 with function calling data. Unlike gpt-4, this model does not receive updates, and is deprecated 3 months after a new version is released.',
      modelUrl: 'https://platform.openai.com/docs/models/gpt-4',
      website: 'https://openai.com',
      contextWindow: 8192,
      pricing: {
        inputCostPerMil: 30,
        outputCostPerMil: 60,
        pricingUrl: 'https://openai.com/pricing'
      }
    },
    parameters: {
      temperature: {
        value: 0.7,
        range: [0, 2]
      },
      maximumLength: {
        value: 500,
        range: [1, 4095]
      },
      topP: {
        value: 1,
        range: [0, 1]
      },
      presencePenalty: {
        value: 0,
        range: [0, 2]
      },
      frequencyPenalty: {
        value: 0,
        range: [0, 2]
      },
      stopSequences: {
        value: [],
        range: []
      }
    }
  },
  {
    id: 'openai:gpt-4-1106-preview',
    disabled: true,
    provider: 'openai',
    name: 'gpt-4-1106-preview',
    modelApiName: 'gpt-4-1106-preview',
    providerHumanName: 'OpenAI',
    makerHumanName: 'OpenAI',
    minBillingTier: 'pro',
    info: {
      description:
        'The latest GPT-4 model with improved instruction following, JSON mode, reproducible outputs, parallel function calling, and more. Returns a maximum of 4,096 output tokens. This preview model is not yet suited for production traffic.',
      modelUrl: 'https://platform.openai.com/docs/models/gpt-4-and-gpt-4-turbo',
      website: 'https://openai.com',
      contextWindow: 128000,
      pricing: {
        inputCostPerMil: 10,
        outputCostPerMil: 30,
        pricingUrl: 'https://openai.com/pricing'
      }
    },
    parameters: {
      temperature: {
        value: 0.7,
        range: [0, 1]
      },
      maximumLength: {
        value: 500,
        range: [1, 4095]
      },
      topP: {
        value: 1,
        range: [0, 1]
      },
      presencePenalty: {
        value: 0,
        range: [0, 2]
      },
      frequencyPenalty: {
        value: 0,
        range: [0, 2]
      },
      stopSequences: {
        value: [],
        range: []
      }
    }
  },
  {
    id: 'openai:gpt-3.5-turbo',
    modelApiName: 'gpt-3.5-turbo',
    provider: 'openai',
    providerHumanName: 'OpenAI',
    makerHumanName: 'OpenAI',
    info: {
      description:
        "OpenAI's most capable and cost effective model in the GPT-3.5 family optimized for chat purposes, but also works well for traditional completions tasks.",
      modelUrl: 'https://platform.openai.com/docs/models/gpt-3-5',
      contextWindow: 4096,
      website: 'https://openai.com',
      pricing: {
        pricingUrl: 'https://openai.com/pricing',
        inputCostPerMil: 1.5,
        outputCostPerMil: 2
      }
    },
    parameters: {
      temperature: {
        value: 0.7,
        range: [0, 2]
      },
      maximumLength: {
        value: 500,
        range: [1, 4095]
      },
      topP: {
        value: 1,
        range: [0, 1]
      },
      presencePenalty: {
        value: 0,
        range: [0, 2]
      },
      frequencyPenalty: {
        value: 0,
        range: [0, 2]
      },
      stopSequences: {
        value: [],
        range: []
      }
    },
    name: 'gpt-3.5-turbo'
  },
  {
    id: 'openai:gpt-3.5-turbo-1106',
    disabled: true,
    provider: 'openai',
    name: 'gpt-3.5-turbo-1106',
    modelApiName: 'gpt-3.5-turbo-1106',
    providerHumanName: 'OpenAI',
    makerHumanName: 'OpenAI',
    info: {
      description:
        'The latest GPT-3.5 Turbo model with improved instruction following, JSON mode, reproducible outputs, parallel function calling, and more. Returns a maximum of 4,096 output tokens.',
      modelUrl: 'https://platform.openai.com/docs/models/gpt-3-5',
      contextWindow: 16385,
      website: 'https://openai.com',
      pricing: {
        pricingUrl: 'https://openai.com/pricing',
        inputCostPerMil: 1,
        outputCostPerMil: 2
      }
    },
    parameters: {
      temperature: {
        value: 0.7,
        range: [0, 1]
      },
      maximumLength: {
        value: 500,
        range: [50, 4096]
      },
      topP: {
        value: 1,
        range: [0, 1]
      },
      presencePenalty: {
        value: 0,
        range: [0, 2]
      },
      frequencyPenalty: {
        value: 0,
        range: [0, 2]
      },
      stopSequences: {
        value: [],
        range: []
      }
    }
  },
  {
    id: 'openai:gpt-3.5-turbo-16k',
    disabled: true,
    modelApiName: 'gpt-3.5-turbo-16k',
    provider: 'openai',
    providerHumanName: 'OpenAI',
    makerHumanName: 'OpenAI',
    info: {
      description:
        'Same capabilities as the standard gpt-3.5-turbo model but with 4 times the context.',
      modelUrl: 'https://platform.openai.com/docs/models/gpt-3-5',
      contextWindow: 16384,
      website: 'https://openai.com',
      pricing: {
        pricingUrl: 'https://openai.com/pricing',
        inputCostPerMil: 1.5,
        outputCostPerMil: 2
      }
    },
    parameters: {
      temperature: {
        value: 0.7,
        range: [0, 1]
      },
      maximumLength: {
        value: 500,
        range: [50, 16280]
      },
      topP: {
        value: 1,
        range: [0, 1]
      },
      presencePenalty: {
        value: 0,
        range: [0, 2]
      },
      frequencyPenalty: {
        value: 0,
        range: [0, 2]
      },
      stopSequences: {
        value: [],
        range: []
      }
    },
    name: 'gpt-3.5-turbo-16k'
  },
  {
    id: 'openai:gpt-3.5-turbo-16k-0613',
    modelApiName: 'gpt-3.5-turbo-16k-0613',
    disabled: true,
    provider: 'openai',
    providerHumanName: 'OpenAI',
    makerHumanName: 'OpenAI',
    info: {
      description:
        'Snapshot of gpt-3.5-turbo-16k from June 13th 2023. Unlike gpt-3.5-turbo-16k, this model does not receive updates, and will be deprecated 3 months after a new version is released.',
      modelUrl: 'https://platform.openai.com/docs/models/gpt-3-5',
      contextWindow: 16384,
      website: 'https://openai.com',
      pricing: {
        pricingUrl: 'https://openai.com/pricing',
        inputCostPerMil: 1.5,
        outputCostPerMil: 2
      }
    },
    parameters: {
      temperature: {
        value: 0.7,
        range: [0, 1]
      },
      maximumLength: {
        value: 500,
        range: [50, 16280]
      },
      topP: {
        value: 1,
        range: [0.1, 1]
      },
      presencePenalty: {
        value: 0,
        range: [0, 2]
      },
      frequencyPenalty: {
        value: 0,
        range: [0, 2]
      },
      stopSequences: {
        value: [],
        range: []
      }
    },
    name: 'gpt-3.5-turbo-16k-0613'
  },
  {
    id: 'openai:gpt-3.5-turbo-instruct',
    modelApiName: 'gpt-3.5-turbo-instruct',
    provider: 'openai',
    providerHumanName: 'OpenAI',
    makerHumanName: 'OpenAI',
    name: 'gpt-3.5-turbo-instruct',
    info: {
      description:
        'Similar capabilities as GPT-3 era models. Compatible with legacy Completions endpoint and not Chat Completions.',
      modelUrl: 'https://platform.openai.com/docs/models/gpt-3-5',
      contextWindow: 4096,
      website: 'https://openai.com',
      pricing: {
        pricingUrl: 'https://openai.com/pricing',
        inputCostPerMil: 1.5,
        outputCostPerMil: 2
      }
    },
    parameters: {
      temperature: {
        value: 0.5,
        range: [0.1, 1]
      },
      maximumLength: {
        value: 200,
        range: [50, 4097]
      },
      topP: {
        value: 1,
        range: [0.1, 1]
      },
      presencePenalty: {
        value: 0,
        range: [0, 1]
      },
      frequencyPenalty: {
        value: 0,
        range: [0, 1]
      },
      stopSequences: {
        value: [],
        range: []
      }
    }
  }
]

export type ModelParameter = Partial<{
  temperature: { value: number; range: number[] }
  maximumLength: { value: number; range: number[] }
  topP: { value: number; range: number[] }
  frequencyPenalty?: { value: number; range: number[] }
  topK?: { value: number; range: number[] }
  presencePenalty?: { value: number; range: number[] }
  stopSequences?: { value: string[]; range: string[] }
  repetitionPenalty?: { value: number; range: number[] }
  typicalP?: { value: number; range: number[] }
}>

export type Model = (typeof models)[number] & { parameters: ModelParameter }

export function getModel(id: string): Model | undefined {
  return models.find((m: Model) => m.id === id)
}

export function getDefaultModel(): Model {
  return getModel('openai:gpt-4o') || models[0]
}

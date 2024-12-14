'use client'

import { InfoIcon } from 'lucide-react'
import { Slider } from '@/components/ui/slider'
import { TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Tooltip } from '@/components/ui/tooltip'
import { TooltipProvider } from '@/components/ui/tooltip'
import { useModel } from '@/contexts/model-context'
import { ModelParameter } from '@/lib/models'
interface ParamInfo {
  name: string
  description: string
  step: number
}
const paramInfos: Record<string, ParamInfo> = {
  temperature: {
    name: 'Temperature',
    description:
      'Controls the randomness of the output. Lower values make the output more deterministic and consistent.',
    step: 0.01
  },
  maximumLength: {
    name: 'Max output tokens',
    description: 'Controls the maximum length of the output.',
    step: 1
  },
  topP: {
    name: 'Top P',
    description:
      'Controls the cumulative probability mass of tokens to consider for the output.',
    step: 0.01
  },
  topK: {
    name: 'Top K',
    description: 'Controls the top K tokens to sample from.',
    step: 1
  },
  frequencyPenalty: {
    name: 'Frequency Penalty',
    description:
      'How much to penalize tokens based on their frequency in the text so far.',
    step: 0.01
  },
  presencePenalty: {
    name: 'Presence Penalty',
    description:
      'How much to penalize tokens based on whether they have already appeared in the text.',
    step: 0.01
  },
  repetitionPenalty: {
    name: 'Repetition Penalty',
    description: 'Penalizes repetition.',
    step: 0.01
  },
  typicalP: {
    name: 'Typical P',
    description: 'Controls the typical probability mass of tokens to consider.',
    step: 0.01
  }
}

export function ModelParameters() {
  const { model, updateModelParameter } = useModel()
  const parameters = model.parameters

  const handleSliderChange = (key: keyof ModelParameter, value: number[]) => {
    updateModelParameter(key, value[0])
  }

  return (
    <div className="w-full space-y-4">
      {Object.entries(parameters).map(
        ([key, param]) =>
          paramInfos[key] && (
            <div key={key} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* {param.value !== param.default && (
                    <span className="text-blue-500">*</span>
                  )} */}
                  <span className="text-sm">{paramInfos[key]?.name}</span>

                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <InfoIcon className="h-4 w-4" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-sm">
                          {paramInfos[key]?.description}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <span className="text-sm text-muted-foreground">
                  {param.value}
                </span>
              </div>
              <Slider
                value={[param.value]}
                max={param.range[1]}
                min={param.range[0]}
                step={paramInfos[key]?.step ?? 0.01}
                className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                onValueChange={(value) =>
                  handleSliderChange(key as keyof ModelParameter, value)
                }
              />
            </div>
          )
      )}
    </div>
  )
}

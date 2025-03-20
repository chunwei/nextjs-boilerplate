import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Instruction, getDefaultInstructions } from '@/lib/instructions'
import { InstructionSelector } from './instruction-selector'
import { Textarea } from '@/components/ui/textarea'
import { TooltipContent } from '@/components/ui/tooltip'
import { Tooltip, TooltipTrigger } from '@/components/ui/tooltip'
import { TooltipProvider } from '@/components/ui/tooltip'
import { InfoIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ChatbotInstructions({
  instruction,
  onInstructionChange
}: {
  instruction?: Instruction
  onInstructionChange: (instruction: Instruction) => void
}) {
  const defaultInstructions = getDefaultInstructions()
  const [currentInstruction, setCurrentInstruction] = useState(
    instruction || defaultInstructions
  )
  useEffect(() => {
    if (onInstructionChange) {
      onInstructionChange(currentInstruction)
    }
  }, [currentInstruction, onInstructionChange])

  return (
    <div className="flex flex-col my-4">
      <div className="flex flex-col justify-between gap-4 align-baseline @md:flex-row">
        <Label>
          <div className="flex flex-row items-center gap-4">
            <span>System prompt</span>
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <InfoIcon className="h-4 w-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm max-w-60">
                    The instructions allow you to customize your chatbot&apos;s
                    personality and style. Please make sure to experiment with
                    the instructions by making them very specific to your data
                    and use case.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </Label>
        <div className="flex flex-row items-end gap-4 pb-4">
          <InstructionSelector
            instruction={currentInstruction}
            onSelect={(instruction) => setCurrentInstruction(instruction)}
          />
          <Button
            variant="outline"
            onClick={() => setCurrentInstruction(defaultInstructions)}
          >
            Reset
          </Button>
        </div>
      </div>
      <div>
        <Textarea
          className="min-h-40"
          placeholder="Enter your instructions here"
          value={currentInstruction.instructions}
          onChange={(e) =>
            setCurrentInstruction({
              name: 'Custom prompt',
              instructions: e.target.value
            })
          }
        />
      </div>
      {/* <div className="text-sm text-stone-500">
        The instructions allow you to customize your chatbot&apos;s personality
        and style. Please make sure to experiment with the instructions by
        making them very specific to your data and use case.
      </div> */}
    </div>
  )
}

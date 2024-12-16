'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import {
  instructions,
  Instruction,
  getDefaultInstructions
} from '@/lib/instructions'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useEffect } from 'react'

export function InstructionSelector({
  onSelect,
  instruction
}: {
  onSelect: (instruction: Instruction) => void
  instruction?: Instruction
}) {
  const [open, setOpen] = React.useState(false)
  const [selectedInstruction, setSelectedInstruction] =
    React.useState<Instruction | null>(instruction || getDefaultInstructions())

  useEffect(() => {
    if (instruction) {
      setSelectedInstruction(instruction)
    }
  }, [instruction])

  const handleOpenChange = (open: boolean) => {
    setOpen(open)
  }

  const handleInstructionChange = (instruction: Instruction) => {
    setSelectedInstruction(instruction)
    onSelect(instruction)
  }

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full max-w-[300px] overflow-hidden justify-between"
        >
          {selectedInstruction ? (
            <div className="flex items-center gap-1 flex-1 overflow-hidden">
              <span className="flex-1 text-start whitespace-nowrap overflow-hidden text-ellipsis  text-xs truncate">
                {selectedInstruction.name}
              </span>
            </div>
          ) : (
            'Select instruction...'
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 flex-shrink-0 flex-grow-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search instructions..." />
          <CommandEmpty>No instructions found.</CommandEmpty>
          <ScrollArea>
            <CommandList className="max-h-[450px]">
              <CommandGroup heading="Custom">
                <CommandItem
                  key={'Custom prompt'}
                  value={'Custom prompt'}
                  onSelect={() => {
                    handleInstructionChange(instructions[0])
                    setOpen(false)
                  }}
                >
                  <div className="flex flex-1 items-center gap-2">
                    Custom prompt
                  </div>
                  <Check
                    className={`ml-1 h-3 w-3 ${
                      'Custom prompt' === selectedInstruction?.name
                        ? 'opacity-100'
                        : 'opacity-0'
                    }`}
                  />
                </CommandItem>
              </CommandGroup>
              <CommandGroup heading="Examples (Preset roles)">
                {instructions.map((instruction, index) => (
                  <CommandItem
                    key={index}
                    value={instruction.name}
                    onSelect={() => {
                      handleInstructionChange(instruction)
                      setOpen(false)
                    }}
                  >
                    <div className="flex flex-1 items-center justify-between gap-2">
                      <div className="flex flex-1 items-center gap-2">
                        <span className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis  text-xs truncate">
                          {instruction.name}
                        </span>
                      </div>
                    </div>
                    <Check
                      className={`ml-1 h-3 w-3 ${
                        instruction.name === selectedInstruction?.name
                          ? 'opacity-100'
                          : 'opacity-0'
                      }`}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

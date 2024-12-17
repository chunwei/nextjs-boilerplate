'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
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
import { Model, models } from '@/lib/models'
import { useModel } from '@/contexts/model-context'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useEffect } from 'react'
import MakerIcon from '@/components/icons/MakerIcon'

export function ModelSelector() {
  const [open, setOpen] = React.useState(false)
  const {
    model: selectedModel,
    setModel,
    setOpenPopoverModelCard,
    setHoveredModel,
    hoveredModel
  } = useModel()

  const availableModels = models.filter((model) => !model.disabled)

  const handleOpenChange = (open: boolean) => {
    setOpen(open)
    setOpenPopoverModelCard(open)
    if (open) {
      setHoveredModel(availableModels[0])
    }
  }

  const handleModelChange = (model: Model) => {
    setModel(model)
  }
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return

      const currentIndex = availableModels.findIndex(
        (m) => m.id === hoveredModel?.id
      )
      let nextIndex: number

      switch (e.key) {
        case 'ArrowDown':
          nextIndex = (currentIndex + 1) % availableModels.length
          break
        case 'ArrowUp':
          nextIndex =
            (currentIndex - 1 + availableModels.length) % availableModels.length
          break
        default:
          return
      }

      setHoveredModel(availableModels[nextIndex])
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, hoveredModel, setHoveredModel, availableModels])

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full max-w-[300px] overflow-hidden justify-between"
        >
          {selectedModel ? (
            <div className="flex items-center gap-1 flex-1 overflow-hidden">
              <MakerIcon makerName={selectedModel.makerHumanName} />
              <span className="text-xs text-muted-foreground flex-shrink-0 flex-grow-0">
                {selectedModel.providerHumanName}
              </span>
              <span className="text-xs text-muted-foreground flex-shrink-0 flex-grow-0">
                /
              </span>
              <span className="flex-1 text-start whitespace-nowrap overflow-hidden text-ellipsis  text-xs truncate">
                {selectedModel.name}
              </span>
            </div>
          ) : (
            'Select model...'
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 flex-shrink-0 flex-grow-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search models..." />
          <CommandEmpty>No model found.</CommandEmpty>
          <ScrollArea>
            <CommandList className="max-h-[450px]">
              <CommandGroup>
                {availableModels.map((model, index) => (
                  <CommandItem
                    key={index}
                    value={model.name}
                    onSelect={() => {
                      handleModelChange(model)
                      setHoveredModel(model)
                      setOpen(false)
                      setOpenPopoverModelCard(false)
                    }}
                    onMouseEnter={() => {
                      setHoveredModel(model)
                    }}
                  >
                    <div className="flex flex-1 items-center justify-between gap-2">
                      <div className="flex flex-1 items-center gap-2">
                        <MakerIcon makerName={model.makerHumanName} />

                        <span className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis  text-xs truncate">
                          {model.name}
                        </span>
                      </div>
                      <div className="flex items-center justify-end gap-1 flex-shrink-0 flex-grow-0">
                        {model.minBillingTier && (
                          <Badge
                            key={model.minBillingTier}
                            variant={
                              model.minBillingTier === 'pro'
                                ? 'default'
                                : 'secondary'
                            }
                            className={`${
                              model.minBillingTier === 'pro'
                                ? 'bg-blue-500 hover:bg-blue-600'
                                : 'bg-zinc-500 hover:bg-zinc-600'
                            } text-white font-normal px-1 py-0`}
                          >
                            {model.minBillingTier}
                          </Badge>
                        )}
                        {model.new && (
                          <Badge
                            key={'new'}
                            variant="default"
                            className={`bg-emerald-500 text-white font-normal px-1 py-0`}
                          >
                            new
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Check
                      className={`ml-1 h-3 w-3 ${
                        model.id === selectedModel.id
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

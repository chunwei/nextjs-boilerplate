'use client'

import { Plus, Settings2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
// import { ModelInfoCard } from './model-info-card'
import { ModelSelector } from './model-selector'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { ModelParameters } from './model-parameters'
import { PaneControls } from './pane-controls'
import { ModelProvider } from '@/contexts/model-context'
import { getModel, getDefaultModel } from '@/lib/models'
import { usePlayground } from '@/contexts/playground-context'
import ModeCardPopover from './model-card-popover'
import { ChatbotInstructions } from './chatbot-instructions'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Chat } from '@/components/ai/chat'

export function ChatPane({
  modelId,
  index
}: {
  modelId: string
  index: number
}) {
  const {
    addModel,
    removeModel,
    moveLeft,
    moveRight,
    canAdd,
    canRemove,
    canMoveLeft,
    canMoveRight
  } = usePlayground()

  const model = getModel(modelId) || getDefaultModel()
  const id = crypto.randomUUID()

  return (
    <ModelProvider initialModel={model}>
      <div className="relative flex flex-col max-w-full h-full rounded-md border">
        <div className="rounded-t-md flex items-center bg-background backdrop-blur shadow-[0_1px_rgba(202,206,214,.3),0_5px_10px_-5px_rgba(0,0,0,.05)] dark:shadow-[0_1px_rgba(255,255,255,0.15)] justify-between p-3 overflow-hidden">
          <div className="flex flex-1 items-center gap-2 mr-2 overflow-hidden">
            <ModelSelector />
          </div>
          <div className="flex flex-shrink-0 flex-grow-0 items-center gap-1">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Configure model"
                  title="Configure model"
                >
                  <Settings2 className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-80">
                <Tabs defaultValue="parameters">
                  <div className="w-full flex justify-center">
                    <TabsList className="justify-center">
                      <TabsTrigger value="parameters">Parameters</TabsTrigger>
                      <TabsTrigger value="instructions">
                        Instructions
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  <TabsContent value="parameters">
                    <ModelParameters />
                  </TabsContent>
                  <TabsContent value="instructions">
                    <ChatbotInstructions />
                  </TabsContent>
                </Tabs>
              </PopoverContent>
            </Popover>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => addModel(modelId)}
              disabled={!canAdd}
              aria-label="Add model to compare"
              title="Add model to compare"
            >
              <Plus className="h-4 w-4" />
            </Button>

            <PaneControls
              onMoveLeft={
                canMoveLeft(index) ? () => moveLeft(index) : undefined
              }
              onMoveRight={
                canMoveRight(index) ? () => moveRight(index) : undefined
              }
              onDeleteChat={
                canRemove(index) ? () => removeModel(index) : undefined
              }
            />
          </div>
        </div>
        <ModeCardPopover />

        <div className="flex-1 overflow-auto p-4">
          <div className="w-full h-full flex items-center justify-center">
            {/* <ModelInfoCard /> */}
            <Chat
              id={id}
              initialMessages={[]}
              selectedModelId={modelId}
              selectedVisibilityType="public"
              isReadonly={false}
            />
          </div>
        </div>
      </div>
    </ModelProvider>
  )
}

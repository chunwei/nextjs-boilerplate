'use client'

import { ChatPane } from './card-pane'
import { usePlayground } from '@/contexts/playground-context'

export function PaneList() {
  const { models } = usePlayground()

  return (
    <>
      {models.map((modelId, index) => (
        <div
          key={modelId + index}
          className="@container flex-shrink-0 md:flex-shrink md:min-w-96 snap-center rounded-md min-h-[250px] bg-background-100 w-full h-full"
        >
          <ChatPane modelId={modelId} index={index} />
        </div>
      ))}
    </>
  )
}

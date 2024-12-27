'use client'

import { PlaygroundProvider } from '@/contexts/playground-context'
import { PaneList } from './pane-list'
import { SyncProvider } from '@/contexts/sync-context'

export default function Playground() {
  const initialModels = [
    'bailian:qwq-32b-preview',
    'deepseek:deepseek-chat',
    // 'openai:gpt-4o',
    // 'anthropic:claude-v3.5-sonnet',
    // 'perplexity:llama-3.1-sonar-huge-128k-online',
    'meta:llama-3.1-70b'
  ]

  return (
    <SyncProvider>
      <PlaygroundProvider initialModels={initialModels}>
        <div className="flex w-full h-full p-2 space-x-2 overflow-x-auto snap-x snap-mandatory md:snap-none md:overflow-y-hidden">
          <PaneList />
        </div>
      </PlaygroundProvider>
    </SyncProvider>
  )
}

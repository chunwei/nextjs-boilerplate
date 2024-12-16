import { PlaygroundProvider } from '@/contexts/playground-context'
import { PaneList } from './pane-list'

export default function Playground() {
  const initialModels = [
    'openai:gpt-4o',
    'anthropic:claude-v3.5-sonnet',
    // 'perplexity:llama-3.1-sonar-huge-128k-online',
    'meta:llama-3.1-70b'
  ]

  return (
    <PlaygroundProvider initialModels={initialModels}>
      <div className="flex w-full h-full p-2 space-x-2 overflow-x-auto snap-x snap-mandatory md:snap-none md:overflow-y-hidden">
        <PaneList />
      </div>
    </PlaygroundProvider>
  )
}

'use client'

import { Textarea } from '@/components/ui/textarea'
import { formatCharCount } from '@/lib/utils'

interface TextInputProps {
  textInputSource: {
    name: string
    text: string
    is_text_input: boolean
  }
  setTextInputSource: (source: any) => void
}

export function TextInput({ textInputSource, setTextInputSource }: TextInputProps) {
  return (
    <div className="w-full">
      <Textarea
        placeholder="输入文本..."
        name="data"
        rows={20}
        className="my-2 w-full"
        value={textInputSource.text}
        onChange={e => setTextInputSource({
          name: e.target.value.slice(0, 25) + '...',
          text: e.target.value,
          is_text_input: true
        })}
      />
      <p className="h-8 text-center text-sm text-zinc-600">
        {textInputSource.text.length > 0 && 
          `${formatCharCount(textInputSource.text.replace(/\s\s+/g, ' ').length)} 字符`
        }
      </p>
    </div>
  )
} 
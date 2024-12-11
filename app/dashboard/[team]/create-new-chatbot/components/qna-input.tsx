'use client'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@/components/ui/scroll-area'
import { PlusIcon, Trash2 } from 'lucide-react'
import { nanoid } from 'nanoid'

interface QnAInputProps {
  qnaItems: Array<{
    id: string
    question: string
    answer: string
  }>
  setQnaItems: (
    items: Array<{
      id: string
      question: string
      answer: string
    }>
  ) => void
}

interface QnAItemProps {
  item: {
    id: string
    question: string
    answer: string
  }
  onDelete: (id: string) => void
  onChange: (id: string, field: 'question' | 'answer', value: string) => void
}

function QnAItem({ item, onDelete, onChange }: QnAItemProps) {
  return (
    <div className="mb-6 rounded border p-3 shadow">
      <div className="flex items-end justify-between">
        <label className="mb-2 text-sm text-zinc-700">问题</label>
        <Button
          variant="ghost"
          className="mbp-1 text-red-500 hover:bg-red-50 hover:text-red-600 bg-transparent"
          size="icon"
          onClick={() => onDelete(item.id)}
          type="button"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      <Textarea
        value={item.question}
        rows={3}
        onChange={(e) => onChange(item.id, 'question', e.target.value)}
        className="mb-4"
      />

      <label className="mb-2 text-sm text-zinc-700">答案</label>
      <Textarea
        value={item.answer}
        rows={8}
        onChange={(e) => onChange(item.id, 'answer', e.target.value)}
      />
    </div>
  )
}

export function QnAInput({ qnaItems, setQnaItems }: QnAInputProps) {
  const handleAddItem = () => {
    setQnaItems([
      {
        id: nanoid(),
        question: '',
        answer: ''
      },
      ...qnaItems
    ])
  }

  const handleDeleteItem = (id: string) => {
    setQnaItems(qnaItems.filter((item) => item.id !== id))
  }

  const handleChangeItem = (
    id: string,
    field: 'question' | 'answer',
    value: string
  ) => {
    setQnaItems(
      qnaItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    )
  }

  return (
    <div>
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-3">
          {qnaItems.length > 0 && (
            <Button
              variant="ghost"
              className="text-red-500 hover:bg-red-50 hover:text-red-600 bg-transparent"
              onClick={() => setQnaItems([])}
            >
              删除全部
            </Button>
          )}
          <Button size="icon" variant="secondary" onClick={handleAddItem}>
            <PlusIcon className="h-4 w-4 text-zinc-700" />
          </Button>
        </div>
      </div>

      <ScrollArea className="mt-6 h-[400px] ">
        {qnaItems.map((item) => (
          <QnAItem
            key={item.id}
            item={item}
            onDelete={handleDeleteItem}
            onChange={handleChangeItem}
          />
        ))}
      </ScrollArea>
    </div>
  )
}

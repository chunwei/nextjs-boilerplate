'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { XIcon } from 'lucide-react'
import { NotionIcon } from '@/components/icons/notion'
import { formatCharCount } from '@/lib/utils'

interface NotionInputProps {
  notionPages: Array<{
    id: string
    name: string
    numChars?: number
  }>
  setNotionPages: (pages: Array<{
    id: string
    name: string
    numChars?: number
  }>) => void
  setLoading: (loading: boolean) => void
}

interface NotionPageItemProps {
  page: {
    id: string
    name: string
    numChars?: number
  }
  onDelete: (id: string) => void
}

function NotionPageItem({ page, onDelete }: NotionPageItemProps) {
  return (
    <div className="grid grid-cols-10 pb-4">
      <div className="col-span-9">
        <span className="break-words">{page.name}</span>
        {page.numChars && (
          <span className="text-sm text-zinc-500">
            ({formatCharCount(page.numChars)} 字符)
          </span>
        )}
      </div>
      <div className="flex items-center justify-end">
        <Button
          variant="destructive"
          size="icon"
          onClick={() => onDelete(page.id)}
        >
          <XIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export function NotionInput({
  notionPages,
  setNotionPages,
  setLoading
}: NotionInputProps) {
  const [connecting, setConnecting] = useState(false)

  const handleConnect = async () => {
    setConnecting(true)
    setLoading(true)
    // 实现 Notion 连接逻辑
    setConnecting(false)
    setLoading(false)
  }

  const handleDeletePage = (id: string) => {
    setNotionPages(notionPages.filter(page => page.id !== id))
  }

  return (
    <div className="flex flex-col items-center">
      <div className="py-12">
        <Button
          onClick={handleConnect}
          disabled={connecting}
          variant="outline"
          className="h-12 gap-3"
        >
          <NotionIcon className="h-6 w-6" />
          连接 Notion
        </Button>
      </div>

      {notionPages.length > 0 && (
        <div className="w-full">
          <div className="flex items-center">
            <Separator className="flex-1" />
            <span className="mx-2 text-sm text-zinc-600">已导入页面</span>
            <Separator className="flex-1" />
          </div>
          <ScrollArea className="mt-4 h-[36rem] pr-4">
            {notionPages.map(page => (
              <NotionPageItem
                key={page.id}
                page={page}
                onDelete={handleDeletePage}
              />
            ))}
          </ScrollArea>
        </div>
      )}
    </div>
  )
} 
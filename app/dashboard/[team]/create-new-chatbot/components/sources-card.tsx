import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { formatCharCount } from '@/lib/utils'
import { POPULATE_DURATION } from '@/lib/constants'
import { useEffect, useState } from 'react'

interface SourcesCardProps {
  filesInputextractedTexts: any[]
  textInputExtractedText: {
    name: string
    text: string
    is_text_input: boolean
  }
  filesInputCombinedExtractedText: string
  fetchedLinks: Array<{
    url: string
    size?: number
  }>
  qnaItems: Array<{
    question: string
    answer: string
  }>
  notionPages: Array<{
    numChars?: number
  }>
  loading: boolean
  isPopulating: boolean
  startedPopulating: number | false
  endedPopulating: boolean
  chatbotId?: string
  existingFileSources: any[]
  handleSubmit: (e: React.FormEvent) => Promise<void>
}

export function SourcesCard({
  filesInputextractedTexts,
  textInputExtractedText,
  fetchedLinks,
  qnaItems,
  notionPages,
  loading,
  isPopulating,
  startedPopulating,
  endedPopulating,
  chatbotId,
  existingFileSources,
  handleSubmit
}: SourcesCardProps) {
  const files = [...filesInputextractedTexts, ...existingFileSources]
  const totalFileChars = filesInputextractedTexts.reduce((acc, curr) => acc + curr.text.length, 0)
  const totalLinkChars = fetchedLinks.reduce((acc, curr) => acc + (curr.size || 0), 0)
  const totalQnAChars = qnaItems.reduce((acc, curr) => acc + curr.question.length + curr.answer.length, 0)
  const totalNotionChars = notionPages.reduce((acc, curr) => acc + (curr.numChars || 0), 0)
  
  const totalChars = totalFileChars + textInputExtractedText.text.length + totalLinkChars + totalQnAChars + totalNotionChars

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!startedPopulating) {
      setProgress(0)
      return
    }

    const timer = setInterval(() => {
      const elapsed = Date.now() - (startedPopulating as number)
      const newProgress = Math.min((elapsed / POPULATE_DURATION) * 100, 100)
      setProgress(newProgress)

      if (newProgress >= 100) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [startedPopulating])

  return (
    <Card className="p-4">
      <CardHeader className="text-center font-semibold">
        <CardTitle>数据源</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="mb-4 flex flex-col space-y-2">
          {files.length > 0 && (
            <div className="text-sm text-zinc-700">
              {files.length} 个文件 ({formatCharCount(totalFileChars)} 字符)
            </div>
          )}

          {textInputExtractedText.text.length > 0 && (
            <div className="text-sm text-zinc-700">
              {formatCharCount(textInputExtractedText.text.length)} 文本输入字符
            </div>
          )}

          {fetchedLinks.length > 0 && (
            <div className="text-sm text-zinc-700">
              {fetchedLinks.length} 个链接 ({formatCharCount(totalLinkChars)}{' '}
              字符)
            </div>
          )}

          {qnaItems.length > 0 && (
            <div className="text-sm text-zinc-700">
              {qnaItems.length} 个问答 ({formatCharCount(totalQnAChars)} 字符)
            </div>
          )}

          {notionPages?.length > 0 && (
            <div className="text-sm text-zinc-700">
              {notionPages.length} 个Notion页面 (
              {formatCharCount(totalNotionChars)} 字符)
            </div>
          )}
        </div>

        <p className="flex flex-col text-sm">
          <span className="font-semibold">总字符数</span>
          <span className="flex justify-center">
            <span className="font-bold">{formatCharCount(totalChars)}</span>
          </span>
        </p>

        <Button
          type="submit"
          disabled={loading || isPopulating}
          variant={isPopulating ? 'outline' : 'default'}
          className="mt-4 w-full"
          onClick={handleSubmit}
        >
          {isPopulating
            ? '处理中...'
            : chatbotId
            ? '重新训练机器人'
            : '创建机器人'}
        </Button>

        {startedPopulating && (
          <div className="w-full rounded-full py-4">
            <p className="text-xs text-zinc-600">{progress.toFixed(0)}%</p>
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </CardContent>
    </Card>
  )
} 
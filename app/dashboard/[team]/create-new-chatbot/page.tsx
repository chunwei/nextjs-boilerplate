'use client'

import { useSearchParams, useParams, useRouter } from 'next/navigation'
// import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'sonner'

// import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// import { Input } from '@/components/ui/input'

// import { useSupabase } from '@/lib/supabase/supabase-provider'
// import { useSession } from '@/lib/supabase/supabase-auth-provider'
// import { useAccountQuery } from '@/hooks/use-account-query'
// import { useSubscriptionQuery } from '@/hooks/use-subscription-query'
// import { useMutation } from '@tanstack/react-query'

import { SourceTabs } from './components/source-tabs'
import { SourcesCard } from './components/sources-card'
import { FileUpload } from './components/file-upload'
import { TextInput } from './components/text-input'
import { WebsiteInput } from './components/website-input'
import { QnAInput } from './components/qna-input'
import { NotionInput } from './components/notion-input'

// import { SourceStatus } from '@/types/source'
// import { getSourceLimit } from '@/lib/limits'
import { useSession } from 'next-auth/react'
import { createChatbot } from '@/app/actions/chatbots'

const CreateChatbotPage = () => {
  // 路由和参数
  const searchParams = useSearchParams()
  const params = useParams()
  const router = useRouter()
  // const queryClient = useQueryClient()

  // 获取当前tab
  const currentTab = searchParams.get('tab') || 'files'
  const teamSlug = params.team as string

  // 状态管理
  const [dropZoneFiles, setDropZoneFiles] = useState<File[]>([])
  const [attachedFiles, setAttachedFiles] = useState<any[]>([])
  const [extractedTexts, setExtractedTexts] = useState<any[]>([])
  const [existingFileSources, setExistingFileSources] = useState<any[]>([])
  const [textInputSource, setTextInputSource] = useState({
    name: '',
    text: '',
    is_text_input: true
  })
  const [combinedText, setCombinedText] = useState('')
  const [fetchedLinks, setFetchedLinks] = useState<any[]>([])
  const [qnaItems, setQnaItems] = useState<any[]>([])
  const [notionPages, setNotionPages] = useState<any[]>([])

  // 加载状态
  const [loading, setLoading] = useState(false)
  const [isPopulating, setIsPopulating] = useState(false)
  const [startedPopulating, setStartedPopulating] = useState<number | false>(
    false
  )
  const [endedPopulating, setEndedPopulating] = useState(false)

  // 查询和会话
  const { data: session } = useSession()
  // const { accountId } = useAccountQuery()
  // const { data: subscriptionData } = useSubscriptionQuery()
  // const supabase = useSupabase()

  // 处理提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!session /* || !accountId */) return

    let isNewChatbot = true

    try {
      setIsPopulating(true)
      setStartedPopulating(Date.now())
      setEndedPopulating(false)

      // 模拟 10 秒的加载时间
      await new Promise((resolve) => setTimeout(resolve, 10000))

      // 处理文件上传和源更新的逻辑
      // ...
      // 创建chatbot
      const chatbotId = await createChatbot(teamSlug)

      toast.success('Your chatbot is trained and ready', {
        description: 'You can now chat with your chatbot'
      })
      // 重定向到新创建的chatbot
      router.push(`/dashboard/${teamSlug}/chatbot/${chatbotId}`)
    } catch (error) {
      console.log(error)
      toast.error('创建失败', {
        description: error instanceof Error ? error.message : '出现了问题'
      })
    } finally {
      setIsPopulating(false)
      setStartedPopulating(false)
      setEndedPopulating(true)
    }
  }

  return (
    <div className="pb-10">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="lg:w-3/4">
          <Card>
            <CardHeader className= "p-3">
              <CardTitle aria-hidden="true" className= "sr-only">
                {currentTab === 'files'
                  ? '文件'
                  : currentTab === 'text'
                  ? '文本'
                  : currentTab === 'website'
                  ? '网站'
                  : currentTab === 'qna'
                  ? '问答'
                  : '知识库'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <SourceTabs>
                {currentTab === 'files' && (
                  <FileUpload
                    existingFileSources={existingFileSources}
                    setExistingFileSources={setExistingFileSources}
                    setExtractedTexts={setExtractedTexts}
                    dropZoneFiles={dropZoneFiles}
                    setDropZoneFiles={setDropZoneFiles}
                    attachedFiles={attachedFiles}
                    setAttachedFiles={setAttachedFiles}
                    setLoading={setLoading}
                  />
                )}

                {currentTab === 'text' && (
                  <TextInput
                    textInputSource={textInputSource}
                    setTextInputSource={setTextInputSource}
                  />
                )}

                {currentTab === 'website' && (
                  <WebsiteInput
                    loading={loading}
                    setLoading={setLoading}
                    fetchedLinks={fetchedLinks}
                    setFetchedLinks={setFetchedLinks}
                  />
                )}

                {currentTab === 'qna' && (
                  <QnAInput qnaItems={qnaItems} setQnaItems={setQnaItems} />
                )}

                {currentTab === 'notion' && (
                  <NotionInput
                    notionPages={notionPages}
                    setNotionPages={setNotionPages}
                    setLoading={setLoading}
                  />
                )}
              </SourceTabs>
            </CardContent>
          </Card>
        </div>

        <div className="lg:w-1/4">
          <SourcesCard
            existingFileSources={existingFileSources}
            filesInputextractedTexts={extractedTexts}
            filesInputCombinedExtractedText={combinedText}
            textInputExtractedText={textInputSource}
            fetchedLinks={fetchedLinks}
            qnaItems={qnaItems}
            notionPages={notionPages}
            loading={loading}
            isPopulating={isPopulating}
            startedPopulating={startedPopulating}
            endedPopulating={endedPopulating}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  )
}

export default CreateChatbotPage

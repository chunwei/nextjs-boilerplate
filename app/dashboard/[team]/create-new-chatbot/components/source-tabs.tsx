'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

import { FileIcon } from '@/components/icons/file'
import { TextIcon } from '@/components/icons/text'
import { WebsiteIcon } from '@/components/icons/website'
import { QnAIcon } from '@/components/icons/qna'
import { NotionIcon } from '@/components/icons/notion'

const tabs = [
  {
    name: '文件',
    href: '?tab=files',
    icon: FileIcon,
    page: 'files'
  },
  {
    name: '文本',
    href: '?tab=text',
    icon: TextIcon,
    page: 'text'
  },
  {
    name: '网站',
    href: '?tab=website',
    icon: WebsiteIcon,
    page: 'website'
  },
  {
    name: '问答',
    href: '?tab=qna',
    icon: QnAIcon,
    page: 'qna'
  },
  {
    name: 'Notion',
    href: '?tab=notion',
    icon: NotionIcon,
    page: 'notion'
  }
]

export function SourceTabs({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams()
  const currentTab = searchParams.get('tab') || 'files'

  return (
    <Tabs
      value={currentTab}
      defaultValue="files"
      orientation="vertical"
      className="flex gap-6"
    >
      <TabsList className="lg:w-1/4 flex h-full flex-col space-y-2 bg-muted p-2">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.page}
            value={tab.page}
            className={cn(
              'flex w-full items-center justify-start gap-2 p-2 hover:text-primary',
              currentTab === tab.page &&
                'bg-white data-[state=active]:text-primary'
            )}
            asChild
          >
            <Link href={tab.href}>
              <tab.icon className={cn('h-4 w-4')} />
              <span>{tab.name}</span>
            </Link>
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="flex-1 p-4 border rounded-lg">{children}</div>
    </Tabs>
  )
}

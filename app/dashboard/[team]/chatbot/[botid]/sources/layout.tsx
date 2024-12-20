import { Separator } from '@/components/ui/separator'
import { SidebarNav } from '@/components/page-sidebar'
import TrainCard from './train-card'

const sidebarNavItems = [
  {
    title: 'Files',
    href: '/dashboard/{team}/chatbot/{botid}/sources/files',
    segment: 'files'
  },
  {
    title: 'Text',
    href: '/dashboard/{team}/chatbot/{botid}/sources/text',
    segment: 'text'
  },
  {
    title: 'Website',
    href: '/dashboard/{team}/chatbot/{botid}/sources/website',
    segment: 'website'
  },
  {
    title: 'Q&A',
    href: '/dashboard/{team}/chatbot/{botid}/sources/qna',
    segment: 'qna'
  },
  {
    title: 'Notion',
    href: '/dashboard/{team}/chatbot/{botid}/sources/notion',
    segment: 'notion'
  }
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Sources</h2>
          <p className="text-muted-foreground">
            Add your data sources to train your chatbot.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
          <aside className="-mx-4 lg:w-1/4">
            <TrainCard />
          </aside>
        </div>
      </div>
    </>
  )
}

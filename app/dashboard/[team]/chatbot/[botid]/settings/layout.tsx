import { Separator } from '@/components/ui/separator'
import { SidebarNav } from '@/components/page-sidebar'

const sidebarNavItems = [
  {
    title: 'General',
    href: '/dashboard/{team}/chatbot/{botid}/settings/general',
    segment: 'general'
  },
  {
    title: 'AI',
    href: '/dashboard/{team}/chatbot/{botid}/settings/ai',
    segment: 'ai'
  },
  {
    title: 'Chat Interface',
    href: '/dashboard/{team}/chatbot/{botid}/settings/chat-interface',
    segment: 'chat-interface'
  },
  {
    title: 'Security',
    href: '/dashboard/{team}/chatbot/{botid}/settings/security',
    segment: 'security'
  },
  {
    title: 'Leads',
    href: '/dashboard/{team}/chatbot/{botid}/settings/leads',
    segment: 'leads'
  },
  {
    title: 'Notifications',
    href: '/dashboard/{team}/chatbot/{botid}/settings/notifications',
    segment: 'notifications'
  },
  {
    title: 'Webhooks',
    href: '/dashboard/{team}/chatbot/{botid}/settings/webhooks',
    segment: 'webhooks'
  },
  {
    title: 'Custom Domains',
    href: '/dashboard/{team}/chatbot/{botid}/settings/custom-domains',
    segment: 'custom-domains'
  }
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage chatbot settings and preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  )
}

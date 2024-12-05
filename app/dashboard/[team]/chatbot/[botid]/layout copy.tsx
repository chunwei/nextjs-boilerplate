'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
// import { Separator } from '@/components/ui/separator'
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from '@/components/ui/tooltip'
import {
  Activity,
  BarChart2,
  Settings,
  Zap,
  FileText,
  Link2,
  Target
} from 'lucide-react'
import { use } from 'react'

// Define the sidebar navigation items
const sidebarNavItems = [
  {
    title: 'Playground',
    href: '/dashboard/{team}/chatbot/{botid}/playground',
    icon: Zap,
    segment: 'playground'
  },
  {
    title: 'Activity',
    icon: Activity,
    children: [
      {
        title: 'Chat Logs',
        href: '/dashboard/{team}/chatbot/{botid}/activity/chat-logs',
        segment: 'chat-logs'
      },
      {
        title: 'Leads',
        href: '/dashboard/{team}/chatbot/{botid}/activity/leads',
        segment: 'leads'
      }
    ]
  },
  {
    title: 'Analytics',
    icon: BarChart2,
    children: [
      {
        title: 'Chats',
        href: '/dashboard/{team}/chatbot/{botid}/analytics/chats',
        segment: 'chats'
      },
      {
        title: 'Topics',
        href: '/dashboard/{team}/chatbot/{botid}/analytics/topics',
        segment: 'topics'
      },
      {
        title: 'Sentiment',
        href: '/dashboard/{team}/chatbot/{botid}/analytics/sentiment',
        segment: 'sentiment'
      }
    ]
  },
  {
    title: 'Sources',
    icon: FileText,
    children: [
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
  },
  {
    title: 'Actions',
    icon: Target,
    children: [
      {
        title: 'Actions',
        href: '/dashboard/{team}/chatbot/{botid}/actions/actions',
        segment: 'actions'
      },
      {
        title: 'Integrations',
        href: '/dashboard/{team}/chatbot/{botid}/actions/integrations',
        segment: 'integrations'
      }
    ]
  },
  {
    title: 'Connect',
    icon: Link2,
    children: [
      {
        title: 'Embed',
        href: '/dashboard/{team}/chatbot/{botid}/connect/embed',
        segment: 'embed'
      },
      {
        title: 'Share',
        href: '/dashboard/{team}/chatbot/{botid}/connect/share',
        segment: 'share'
      },
      {
        title: 'Integrations',
        href: '/dashboard/{team}/chatbot/{botid}/connect/integrations',
        segment: 'integrations'
      }
    ]
  },
  {
    title: 'Settings',
    icon: Settings,
    children: [
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
  }
]

// Sidebar Navigation Component
function SidebarNav({
  params,
  className
}: {
  params: Promise<{ botid: string; team: string }>
  className?: string
}) {
  const pathname = usePathname()
  const { team, botid } = use(params)

  // Replace {botid} in href
  const resolvedNavItems = sidebarNavItems.map((item) => {
    if (item.href) {
      return {
        ...item,
        href: item.href.replace('{botid}', botid).replace('{team}', team)
      }
    }

    if (item.children) {
      return {
        ...item,
        children: item.children.map((child) => ({
          ...child,
          href: child.href.replace('{botid}', botid).replace('{team}', team)
        }))
      }
    }

    return item
  })

  const renderNavItem = (item: any, depth = 0) => {
    const isActive = item.href
      ? pathname.includes(item.segment)
      : item.children?.some((child: { segment: string }) =>
          pathname.includes(child.segment)
        )

    // Render single item or parent group
    if (item.href) {
      return (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: isActive ? 'secondary' : 'ghost' }),
            'justify-start w-full mb-1 pl-4',
            depth > 0 && 'pl-8'
          )}
        >
          {item.icon && <item.icon className="mr-2 h-4 w-4" />}
          {item.title}
        </Link>
      )
    }

    // Render group with children
    return (
      <div key={item.title} className="mb-4">
        <div
          className={cn(
            'flex items-center px-4 py-2 text-sm font-medium text-muted-foreground',
            depth === 0 && 'mb-2'
          )}
        >
          {item.icon && <item.icon className="mr-2 h-4 w-4" />}
          {item.title}
        </div>
        {item.children && (
          <div className="space-y-1">
            {item.children.map((child: any) => renderNavItem(child, depth + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <nav className={cn('w-64 border-r p-4 overflow-y-auto', className)}>
      {resolvedNavItems.map(renderNavItem)}
    </nav>
  )
}

export default function ChatbotLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { botid: string }
}) {
  return (
    <div className="flex h-full">
      {/* Sidebar Navigation */}
      <SidebarNav params={params} />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}

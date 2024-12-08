'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import {
  Activity,
  BarChart2,
  Settings,
  Zap,
  FileText,
  Link2,
  Target
} from 'lucide-react'

import { useDashboard } from '@/contexts/dashboard-context'

// Define the sidebar navigation items
const ChatbotNavItems = [
  {
    title: 'Playground',
    href: '/dashboard/{team}/chatbot/{botid}/playground',
    icon: Zap,
    segment: 'playground'
  },
  {
    title: 'Activity',
    segment: 'activity',
    icon: Activity,
    href: '/dashboard/{team}/chatbot/{botid}/activity/chat-logs',
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
    segment: 'analytics',
    icon: BarChart2,
    href: '/dashboard/{team}/chatbot/{botid}/analytics/chats',
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
    segment: 'sources',
    icon: FileText,
    href: '/dashboard/{team}/chatbot/{botid}/sources/files',
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
    segment: 'actions',
    icon: Target,
    href: '/dashboard/{team}/chatbot/{botid}/actions/actions',
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
    segment: 'connect',
    icon: Link2,
    href: '/dashboard/{team}/chatbot/{botid}/connect/embed',
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
    segment: 'settings',
    icon: Settings,
    href: '/dashboard/{team}/chatbot/{botid}/settings/general',
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

interface ChatbotNavProps extends React.HTMLAttributes<HTMLDivElement> {
  params: Promise<{ botid: string; team: string }>
}

export function ChatbotNav({ className, params, ...props }: ChatbotNavProps) {
  const { team, botId } = useDashboard()
  const pathname = usePathname()

  const resolvedNavItems = ChatbotNavItems.map(item => ({
    ...item,
    href: item.href.replace('{team}', team ?? '').replace('{botid}', botId ?? '')
  }))

  return (
    <div className="relative">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={cn('flex items-center', className)} {...props}>
          {resolvedNavItems.map((item) => {
            const isActive = item.href
              ? pathname.includes(item.segment)
              : item.children?.some((child: { segment: string }) =>
                  pathname.includes(child.segment)
                )
            return (
              <Link
                href={item.href}
                key={item.href}
                className={cn(
                  'flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary',
                  isActive
                    ? 'bg-muted font-medium text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {item.title}
              </Link>
            )
          })}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  )
}

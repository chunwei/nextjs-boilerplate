'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'
import { useParams, usePathname } from 'next/navigation'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

interface TeamNavProps extends React.HTMLAttributes<HTMLDivElement> {
  params: Promise<{ team: string }>
}

export function TeamNav({ className, params, ...props }: TeamNavProps) {
  const pathname = usePathname()
  const { team } = useParams()

  const TeamNavItems = [
    {
      label: 'Chatbots',
      href: `/dashboard/${team}/chatbots`,
      active: pathname.includes(`/dashboard/${team}/chatbots`)
    },
    {
      label: 'Usage',
      href: `/dashboard/${team}/usage`,
      active: pathname.includes(`/dashboard/${team}/usage`)
    },
    {
      label: 'Settings',
      href: `/dashboard/${team}/settings/general`,
      active: pathname.includes(`/dashboard/${team}/settings`)
    }
  ]

  return (
    <div className="relative">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={cn('flex items-center', className)} {...props}>
          {TeamNavItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className={cn(
                'flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary',
                item.active
                  ? 'bg-muted font-medium text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  )
}

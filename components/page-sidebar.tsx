'use client'

import Link from 'next/link'
import { useParams, useSelectedLayoutSegment } from 'next/navigation'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
    segment?: string
    icon?: React.ReactNode
  }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const { botid, team }: { botid: string; team: string } = useParams()
  const segment = useSelectedLayoutSegment()

  return (
    <nav
      className={cn(
        'flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1',
        className
      )}
      {...props}
    >
      {items.map((item) => {
        const isActive = segment && item.href.endsWith(segment)

        return (
          <Link
            key={item.href}
            href={item.href.replace('{botid}', botid).replace('{team}', team)}
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'hover:bg-muted/50 justify-start',
              isActive ? 'text-primary bg-muted' : 'text-muted-foreground '
            )}
          >
            <div className="flex items-center gap-2">
              <span>{item?.icon}</span>
              <span>{item.title}</span>
            </div>
          </Link>
        )
      })}
    </nav>
  )
}

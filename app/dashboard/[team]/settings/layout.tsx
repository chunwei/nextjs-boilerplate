import { Separator } from '@/components/ui/separator'
import { SidebarNav } from '@/components/page-sidebar'
import {
  Boxes,
  CreditCard,
  GalleryVerticalEnd,
  Settings,
  UsersRound
} from 'lucide-react'

const sidebarNavItems = [
  {
    title: 'General',
    href: '/dashboard/{team}/settings/general',
    segment: 'general',
    icon: <Settings />
  },
  {
    title: 'Model Providers',
    href: '/dashboard/{team}/settings/model-providers',
    segment: 'model-providers',
    icon: <Boxes />
  },
  {
    title: 'Members',
    href: '/dashboard/{team}/settings/members',
    segment: 'members',
    icon: <UsersRound />
  },
  {
    title: 'Plans',
    href: '/dashboard/{team}/settings/plans',
    segment: 'plans',
    icon: <GalleryVerticalEnd />
  },
  {
    title: 'Billing',
    href: '/dashboard/{team}/settings/billing',
    segment: 'billing',
    icon: <CreditCard />
  }
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Team Settings</h2>
          {/* <p className="text-muted-foreground">
            Manage chatbot settings and preferences.
          </p> */}
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

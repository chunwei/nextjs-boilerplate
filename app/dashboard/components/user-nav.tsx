'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useDashboard } from '@/contexts/dashboard-context'
import { toast } from '@/hooks/use-toast'
import {
  CreditCard,
  LayoutGrid,
  LogOut,
  Settings2,
  UserRoundPlus
} from 'lucide-react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

export function UserNav() {
  const { team } = useDashboard()
  const { data: session } = useSession()
  
  const dashboardLink = team ? `/dashboard/${team}/chatbots/` : '/dashboard'
  const billingLink = team ? `/dashboard/${team}/settings/billing` : '/dashboard'

  const handleLogout = async () => {
    await signOut({
      redirect: true,
      callbackUrl: '/auth/signin'
    })
    // toast({
    //   title: '退出登录',
    //   description: '你已成功退出登录'
    // })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={session?.user?.image || '/avatar.png'} alt={session?.user?.name || ''} />
            <AvatarFallback>{session?.user?.name?.[0]?.toUpperCase() || 'U'}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{session?.user?.name || 'User'}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {session?.user?.email || ''}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link
              href={dashboardLink}
              className="flex items-center"
            >
              <LayoutGrid className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/dashboard/account" className="flex items-center">
              <Settings2 className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </Link>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href={billingLink}
              className="flex items-center"
            >
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
            </Link>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/dashboard/teams/join" className="flex items-center">
              <UserRoundPlus className="mr-2 h-4 w-4" />
              <span>New Team</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

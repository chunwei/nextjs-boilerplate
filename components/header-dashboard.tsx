import { MessageSquare } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { NavUser } from './nav-user'

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-lg leading-none">
              Omni AI Chat
            </span>
            <span className="text-xs text-muted-foreground">
              Powered by Claude & ChatGPT
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <NavUser
            user={{
              name: 'Chunwei Lu',
              email: 'luchunwei@gmail.com',
              avatar: '/avatar.avif'
            }}
          />
        </div>
      </div>
    </header>
  )
}

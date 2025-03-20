/*
 * @Author: luchunwei luchunwei@gmail.com
 * @Date: 2024-12-06 14:53:27
 * @LastEditors: luchunwei luchunwei@gmail.com
 * @LastEditTime: 2025-03-19 09:49:55
 * @FilePath: /omnichat/components/header.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { MessageSquare } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'
import Link from 'next/link'
import { ThemeSwitcher } from './theme-switcher'

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
          <ThemeSwitcher />
          <ThemeToggle />
          <Link href="/dashboard">
            <Button variant={'outline'}>Dashboard</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

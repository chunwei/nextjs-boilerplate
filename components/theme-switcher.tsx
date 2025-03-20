/*
 * @Author: luchunwei luchunwei@gmail.com
 * @Date: 2025-03-19 09:39:22
 * @LastEditors: luchunwei luchunwei@gmail.com
 * @LastEditTime: 2025-03-19 09:49:47
 * @FilePath: /omnichat/components/theme-switcher.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client'

import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <Tabs
      value={theme}
      defaultValue={theme || 'system'}
      onValueChange={(mode) => setTheme(mode)}
    >
      <TabsList className="h-7  gap-1.5 rounded-md  p-1">
        <TabsTrigger value="light" className="h-[22px] w-[22px] rounded-sm p-0">
          <Sun className="h-3.5 w-3.5" />
        </TabsTrigger>
        <TabsTrigger
          value="system"
          className="h-[22px] w-[22px] rounded-sm p-0"
        >
          <Monitor className="h-3.5 w-3.5" />
        </TabsTrigger>
        <TabsTrigger value="dark" className="h-[22px] w-[22px] rounded-sm p-0">
          <Moon className="h-3.5 w-3.5" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

'use client'

import React, { useState } from 'react'
import Playground from './components/playground'
import { Button } from '@/components/ui/button'
import { Plus, ClockFading, ChevronsLeft } from 'lucide-react'
import { ThemeSwitcher } from '@/components/theme-switcher'
// import { SidebarProvider } from '@/components/ui/sidebar'

const PlaygroundPage = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)

  return (
    <div className="flex border-y overflow-hidden h-[calc(100svh-200px)] relative">
      {/* 垂直工具条 */}
      <div className="flex flex-col items-center w-14 border-r bg-background py-4 space-y-4 z-10">
        <Button variant="ghost" size="icon" title="新建聊天">
          <Plus className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          title="历史记录"
          onClick={() => setIsHistoryOpen((open) => !open)}
        >
          <ClockFading className="h-5 w-5" />
        </Button>
      </div>
      <Playground />
      {/* 新增侧边栏 */}
      {/* {isHistoryOpen && ( */}
      <div
        className={`flex flex-col absolute left-14 top-0 bottom-0 w-[300px] bg-background overflow-y-auto transform transition-transform duration-300 z-5 ${
          isHistoryOpen ? ' border-r translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex-1">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">历史记录</h3>
            <Button
              variant="ghost"
              size="icon"
              title="关闭"
              onClick={() => setIsHistoryOpen(false)}
            >
              <ChevronsLeft className="h-5 w-5" />
            </Button>
          </div>

          {/* 按日期分组的聊天历史列表 */}
          <div className="mb-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">
              今天
            </h3>
            <div className="space-y-2">
              <div className="p-2 hover:bg-muted rounded-md cursor-pointer">
                聊天记录 1
              </div>
              <div className="p-2 hover:bg-muted rounded-md cursor-pointer">
                聊天记录 2
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">
              昨天
            </h3>
            <div className="space-y-2">
              <div className="p-2 hover:bg-muted rounded-md cursor-pointer">
                聊天记录 3
              </div>
              <div className="p-2 hover:bg-muted rounded-md cursor-pointer">
                聊天记录 4
              </div>
            </div>
          </div>
        </div>
        <div className="h-15 p-4 border-t">
          <ThemeSwitcher />
        </div>
      </div>
      {/* )} */}
    </div>
  )
}

export default PlaygroundPage

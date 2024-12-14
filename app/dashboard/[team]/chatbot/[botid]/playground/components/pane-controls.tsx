'use client'

import {
  ArrowLeft,
  ArrowRight,
  Eraser,
  MoreVertical,
  Trash2
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

interface PaneControlsProps {
  onClearChat?: () => void
  onMoveLeft?: () => void
  onMoveRight?: () => void
  onDeleteChat?: () => void
}

export function PaneControls({
  onClearChat,
  onMoveLeft,
  onMoveRight,
  onDeleteChat
}: PaneControlsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-4 w-4" />
          <span className="sr-only">Open pane menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={onClearChat}>
          <Eraser className="mr-2 h-4 w-4" />
          Clear Chat
        </DropdownMenuItem>

        {onMoveRight && (
          <DropdownMenuItem onClick={onMoveRight}>
            <ArrowRight className="mr-2 h-4 w-4" />
            Move Right
          </DropdownMenuItem>
        )}

        {onMoveLeft && (
          <DropdownMenuItem onClick={onMoveLeft}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Move Left
          </DropdownMenuItem>
        )}

        {onDeleteChat && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onDeleteChat} className="text-red-600">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Chat
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

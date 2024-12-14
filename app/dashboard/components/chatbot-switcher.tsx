'use client'

import * as React from 'react'
import { Check, ChevronsUpDown, PlusCircle } from 'lucide-react'

import { useRouter, useParams } from 'next/navigation'
import { useDashboard } from '@/contexts/dashboard-context'

import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from '@/components/ui/command'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { getChatbots } from '@/app/actions/chatbots'

const useGroups = () => {
  const { team } = useDashboard()
  const [groups, setGroups] = React.useState<
    {
      label: string
      chatbots: { label: string; value: string }[]
    }[]
  >([])

  React.useEffect(() => {
    const fetchChatbots = async () => {
      if (!team) return
      try {
        const chatbots = await getChatbots(team)
        setGroups([
          {
            label: 'Chatbots',
            chatbots: chatbots.map((bot) => ({
              label: bot.name,
              value: bot.id
            }))
          }
        ])
      } catch (error) {
        console.error('Failed to fetch chatbots:', error)
      }
    }

    fetchChatbots()
  }, [team])

  return groups
}

type Chatbot = {
  label: string
  value: string
}

type ChatbotSwitcherProps = {
  className?: string
}

export default function ChatbotSwitcher({ className }: ChatbotSwitcherProps) {
  const router = useRouter()
  const params = useParams()
  const { botId, updateBotId, team } = useDashboard()
  const groups = useGroups()
  const [open, setOpen] = React.useState(false)
  const [showNewTeamDialog, setShowNewTeamDialog] = React.useState(false)

  const [selectedChatbot, setSelectedChatbot] = React.useState<Chatbot>(() => {
    const currentBotId = params.botid || botId
    if (currentBotId) {
      const bot = groups[0]?.chatbots.find((t) => t.value === currentBotId)
      return bot || groups[0]?.chatbots[0] || { label: '', value: '' }
    }
    return groups[0]?.chatbots[0] || { label: '', value: '' }
  })

  const handleChatbotChange = (chatbot: Chatbot) => {
    setSelectedChatbot(chatbot)
    updateBotId(chatbot.value)

    // 获取当前完整路径
    const currentPath = window.location.pathname
    // 使用正则替换掉路径中的 botId
    const newPath = currentPath.replace(
      /\/dashboard\/[^/]+\/chatbot\/[^/]+/,
      `/dashboard/${team}/chatbot/${chatbot.value}`
    )

    router.push(newPath)
    setOpen(false)
  }

  React.useEffect(() => {
    const currentBotId = params.botid || botId
    if (currentBotId && groups[0]?.chatbots) {
      const bot = groups[0].chatbots.find((t) => t.value === currentBotId)
      if (bot) {
        setSelectedChatbot(bot)
      }
    }
  }, [params.botid, botId, groups])

  const handleCreateChatbot = () => {
    setOpen(false)
    setShowNewTeamDialog(false)
    router.push(`/dashboard/${team}/create-new-chatbot`)
  }

  return (
    <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Select a team"
            className={cn('w-[200px] justify-between', className)}
          >
            <Avatar className="mr-2 h-5 w-5">
              <AvatarImage
                src={`https://avatar.vercel.sh/${selectedChatbot.value}.png`}
                alt={selectedChatbot.label}
                className="grayscale"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            {selectedChatbot.label}
            <ChevronsUpDown className="ml-auto opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search team..." />
            <CommandList>
              <CommandEmpty>No team found.</CommandEmpty>
              {groups.map((group) => (
                <CommandGroup key={group.label} heading={group.label}>
                  {group.chatbots.map((chatbot) => (
                    <CommandItem
                      key={chatbot.value}
                      onSelect={() => {
                        handleChatbotChange(chatbot)
                      }}
                      className="text-sm"
                    >
                      <Avatar className="mr-2 h-5 w-5">
                        <AvatarImage
                          src={`https://avatar.vercel.sh/${chatbot.value}.png`}
                          alt={chatbot.label}
                          className="grayscale"
                        />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      {chatbot.label}
                      <Check
                        className={cn(
                          'ml-auto',
                          selectedChatbot.value === chatbot.value
                            ? 'opacity-100'
                            : 'opacity-0'
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <DialogTrigger asChild>
                  <CommandItem onSelect={handleCreateChatbot}>
                    <PlusCircle className="h-5 w-5" />
                    Create Chatbot
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Chatbot</DialogTitle>
          <DialogDescription>
            Add a new chatbot to sale products and support customers.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="space-y-4 py-2 pb-4">
            <div className="space-y-2">
              <Label htmlFor="name">Chatbot name</Label>
              <Input id="name" placeholder="Acme Inc." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="plan">Subscription plan</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">
                    <span className="font-medium">Free</span> -{' '}
                    <span className="text-muted-foreground">
                      Trial for two weeks
                    </span>
                  </SelectItem>
                  <SelectItem value="pro">
                    <span className="font-medium">Pro</span> -{' '}
                    <span className="text-muted-foreground">
                      $9/month per user
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowNewTeamDialog(false)}>
            Cancel
          </Button>
          <Button type="submit">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

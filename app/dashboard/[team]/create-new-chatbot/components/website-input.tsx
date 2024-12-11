'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { PlusIcon, Trash2Icon } from 'lucide-react'
import { isValidUrl } from '@/lib/utils'

interface WebsiteInputProps {
  loading: boolean
  setLoading: (loading: boolean) => void
  fetchedLinks: Array<{
    url: string
    size?: number
    status?: string
  }>
  setFetchedLinks: (links: Array<{ url: string; size?: number }>) => void
}

interface LinkItemProps {
  link: {
    url: string
    size?: number
  }
  index: number
  onDelete: (index: number) => void
  onChange: (index: number, url: string) => void
}

function LinkItem({ link, index, onDelete, onChange }: LinkItemProps) {
  return (
    <div className="flex items-center pb-4">
      <div className="w-full p-[1px]">
        {/* <span className="break-words">{link.url}</span> */}
        <Input
          className="w-full"
          type="text"
          name="website"
          placeholder="https://www.example.com/"
          value={link.url}
          onChange={(e) => {
            const value = e.target.value.trim()
            onChange(index, value)
          }}
        />
        {link.size && (
          <span className="ml-2 text-xs text-zinc-600">{link.size} 字符</span>
        )}
      </div>
      <div className="flex items-center justify-end">
        <Button
          variant="ghost"
          className="ml-2 h-9 w-9 text-red-500 hover:bg-red-50 hover:text-red-600 bg-transparent"
          size="icon"
          onClick={() => onDelete(index)}
        >
          <Trash2Icon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export function WebsiteInput({
  loading,
  // setLoading,
  fetchedLinks,
  setFetchedLinks
}: WebsiteInputProps) {
  const [url, setUrl] = useState('')
  const [urlError, setUrlError] = useState(false)

  const handleCrawlUrl = () => {
    if (!url) {
      toast.error('请输入URL')
      return
    }

    if (!isValidUrl(url)) {
      setUrlError(true)
      return
    }

    setFetchedLinks([...fetchedLinks, { url }])
    setUrl('')
    setUrlError(false)
  }

  const handleAddUrl = () => {
    setFetchedLinks([{ url: '' }, ...fetchedLinks])
  }

  const handleDeleteUrl = (index: number) => {
    setFetchedLinks(fetchedLinks.filter((_, i) => i !== index))
  }

  const handleChangeUrl = (index: number, url: string) => {
    setFetchedLinks(
      fetchedLinks.map((link, i) => (i === index ? { ...link, url } : link))
    )
  }

  return (
    <div>
      <div className="relative mt-2 rounded-md">
        <div className="font-semibold pb-2">Crawl website</div>
        <div className="flex flex-col gap-2 lg:flex-row">
          <Input
            type="text"
            name="website"
            placeholder="https://www.example.com/"
            value={url}
            onChange={(e) => {
              const value = e.target.value.trim()
              setUrl(value)
              setUrlError(!isValidUrl(value) && value !== '')
            }}
          />
          <Button disabled={loading} onClick={handleCrawlUrl}>
            {fetchedLinks.length > 0 ? '添加更多链接' : '抓取链接'}
          </Button>
        </div>
        <div className="py-4 text-sm text-zinc-600">
          这将抓取以URL开头的所有链接（不包括网站上的文件）。
        </div>
      </div>

      {urlError && <p className="mt-2 text-sm text-red-600">无效的URL</p>}
      <div className="flex items-center py-4">
        <Separator className="flex-1" />
        <span className="mx-2 text-sm text-zinc-600">或者</span>
        <Separator className="flex-1" />
      </div>

      <div className="relative mt-2 rounded-md">
        <div className="font-semibold pb-2">Submit sitemap</div>
        <div className="flex flex-col gap-2 lg:flex-row">
          <Input
            type="text"
            name="sitemap"
            placeholder="https://www.example.com/sitemap.xml"
            value={url}
            onChange={(e) => {
              const value = e.target.value.trim()
              setUrl(value)
              setUrlError(!isValidUrl(value) && value !== '')
            }}
          />
          <Button disabled={loading} onClick={handleAddUrl}>
            {fetchedLinks.length > 0 ? '添加更多链接' : '加载sitemap'}
          </Button>
        </div>
        <div className="py-4 text-sm text-zinc-600">
          这将抓取以URL开头的所有链接（不包括网站上的文件）。
        </div>
      </div>

      {urlError && <p className="mt-2 text-sm text-red-600">无效的Site Map</p>}

      <div className="flex items-center py-4">
        <Separator className="flex-1" />
        <span className="mx-2 text-sm text-zinc-600">已添加链接</span>
        <Separator className="flex-1" />
      </div>
      <div className="relative  overflow-hidden ">
        <div className="flex items-center justify-end mr-3">
          <div className="flex items-center gap-3">
            {fetchedLinks.length > 0 && (
              <Button
                variant="ghost"
                className="text-red-500 hover:bg-red-50 hover:text-red-600 bg-transparent"
                onClick={() => setFetchedLinks([])}
              >
                删除全部
              </Button>
            )}
            <Button size="icon" variant="secondary" onClick={handleAddUrl}>
              <PlusIcon className="h-4 w-4 text-zinc-700" />
            </Button>
          </div>
        </div>
        {fetchedLinks.length > 0 && (
          <ScrollArea className="my-2 pr-3 h-[200px]">
            {fetchedLinks.map((link, index) => (
              <LinkItem
                key={index}
                link={link}
                index={index}
                onDelete={handleDeleteUrl}
                onChange={handleChangeUrl}
              />
            ))}
          </ScrollArea>
        )}
      </div>
    </div>
  )
}

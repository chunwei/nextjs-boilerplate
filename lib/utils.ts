import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getChatId = (userId: string, provider: string) => {
  return `${userId}:${provider}`;
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')        // 替换空格为 -
    .replace(/[^\w\-]+/g, '')    // 移除非单词字符
    .replace(/\-\-+/g, '-')      // 替换多个 - 为单个 -
    .replace(/^-+/, '')          // 去除开头的 -
    .replace(/-+$/, '')          // 去除结尾的 -
}

export function formatCharCount(count: number) {
  return new Intl.NumberFormat('zh-CN').format(count)
}

export function isValidUrl(url: string) {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}
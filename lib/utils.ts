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

export function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export * from './utils/fetcher'
export * from './utils/get-message-id-from-annotations'
export * from './utils/sanitize-messages'
export * from './utils/get-document-timestamp-by-index'
export * from './utils/get-most-recent-user-message'
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist'
import mammoth from 'mammoth'
import type {
  TextItem,
  TextMarkedContent
} from 'pdfjs-dist/types/src/display/api'

// 使用本地 worker
GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString()

// 文件大小限制 (20MB)
export const MAX_FILE_SIZE = 20 * 1024 * 1024

// 支持的文件类型
export const SUPPORTED_FILE_TYPES = {
  'application/pdf': ['.pdf'],
  'text/plain': ['.txt'],
  'application/msword': ['.doc'],
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [
    '.docx'
  ]
}

export async function extractTextFromFile(file: File): Promise<string> {
  // 检查文件大小
  if (file.size > MAX_FILE_SIZE) {
    throw new Error(`文件大小不能超过 ${MAX_FILE_SIZE / 1024 / 1024}MB`)
  }

  const fileType = file.name.split('.').pop()?.toLowerCase()

  switch (fileType) {
    case 'pdf':
      return extractFromPDF(file)
    case 'doc':
    case 'docx':
      return extractFromWord(file)
    case 'txt':
      return extractFromTxt(file)
    default:
      throw new Error('不支持的文件类型')
  }
}

async function extractFromPDF(file: File): Promise<string> {
  try {
    const arrayBuffer = await file.arrayBuffer()
    const pdf = await getDocument({ data: arrayBuffer }).promise
    let fullText = ''

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i)
      const textContent = await page.getTextContent()
      const pageText = textContent.items
        .map((item: TextItem | TextMarkedContent) =>
          'str' in item ? item.str : ''
        )
        .join(' ')
      fullText += pageText + '\n'
    }

    return fullText.trim()
  } catch (error) {
    console.error('PDF提取错误:', error)
    throw new Error('PDF文本提取失败')
  }
}

async function extractFromWord(file: File): Promise<string> {
  try {
    const arrayBuffer = await file.arrayBuffer()
    const result = await mammoth.extractRawText({ arrayBuffer })
    return result.value.trim()
  } catch (error) {
    console.error('Word提取错误:', error)
    throw new Error('Word文本提取失败')
  }
}

async function extractFromTxt(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const text = e.target?.result as string
      resolve(text.trim())
    }
    reader.onerror = (e) => {
      console.error('TXT提取错误:', e)
      reject(new Error('TXT文本提取失败'))
    }
    reader.readAsText(file)
  })
}

'use client'

import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Trash2Icon, UploadIcon } from 'lucide-react'
import { formatCharCount } from '@/lib/utils'
import {
  extractTextFromFile,
  MAX_FILE_SIZE,
  SUPPORTED_FILE_TYPES
} from '@/lib/file-extractors'

interface AttachedFile {
  fileName: string
  fileImageURL: string
  characters: number
}

interface ExtractedText {
  name: string
  text: string
}

interface FileUploadProps {
  existingFileSources: any[]
  setExistingFileSources: (sources: any[]) => void
  setExtractedTexts: React.Dispatch<React.SetStateAction<ExtractedText[]>>
  dropZoneFiles: File[]
  setDropZoneFiles: React.Dispatch<React.SetStateAction<File[]>>
  attachedFiles: AttachedFile[]
  setAttachedFiles: React.Dispatch<React.SetStateAction<AttachedFile[]>>
  setLoading: (loading: boolean) => void
}

interface AttachedFileProps {
  attachedFile: AttachedFile
  removeAttachedFile: (index: number, fileName: string) => void
  index: number
}

const AttachedFile = ({
  attachedFile,
  removeAttachedFile,
  index
}: AttachedFileProps) => {
  return (
    <div className="grid grid-cols-10 pb-4">
      <div className="col-span-9">
        <span className="break-words">{attachedFile?.fileName}</span>{' '}
        <span className="text-sm text-zinc-500">
          ({formatCharCount(attachedFile?.characters)} 字符)
        </span>
      </div>
      <div className="flex items-center justify-end">
        <Button
          variant="ghost"
          className="ml-1 text-red-500 hover:bg-red-50 hover:text-red-600 bg-transparent"
          type="button"
          size="icon"
          onClick={() => removeAttachedFile(index, attachedFile.fileName)}
        >
          <Trash2Icon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export function FileUpload({
  existingFileSources,
  setExistingFileSources,
  setExtractedTexts,
  dropZoneFiles,
  setDropZoneFiles,
  attachedFiles,
  setAttachedFiles,
  setLoading
}: FileUploadProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [processingFile, setProcessingFile] = useState<string>('')

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (!acceptedFiles?.length) return

      const newFiles = [...dropZoneFiles, ...acceptedFiles]
      setDropZoneFiles(newFiles)

      for (const file of acceptedFiles) {
        try {
          // 检查文件类型
          const fileType = file.name.split('.').pop()?.toLowerCase()
          const supportedExtensions = Object.values(SUPPORTED_FILE_TYPES).flat()
          if (!fileType || !supportedExtensions.includes(`.${fileType}`)) {
            toast.error(`不支持的文件类型: ${file.name}`, {
              description: `仅支持 ${supportedExtensions.join('、')} 格式`
            })
            continue
          }

          // 检查文件大小
          if (file.size > MAX_FILE_SIZE) {
            toast.error(`文件 ${file.name} 超过大小限制`, {
              description: `最大允许 ${MAX_FILE_SIZE / 1024 / 1024}MB`
            })
            continue
          }

          setIsProcessing(true)
          setProcessingFile(file.name)

          const text = await extractTextFromFile(file)

          setAttachedFiles((prev) => [
            ...prev,
            {
              fileName: file.name,
              fileImageURL: '',
              characters: text.replace(/\s\s+/g, ' ').length
            }
          ])

          setExtractedTexts((prev) => [
            ...prev,
            {
              name: file.name,
              text: text
            }
          ])
        } catch (error) {
          // console.error(error)
          toast.error(`处理文件 ${file.name} 失败`, {
            description: error instanceof Error ? error.message : '出现了问题'
          })
        }
      }

      setIsProcessing(false)
      setProcessingFile('')
    },
    [dropZoneFiles, setAttachedFiles, setDropZoneFiles, setExtractedTexts]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: SUPPORTED_FILE_TYPES,
    onDrop
  })

  const removeAttachedFile = async (index: number, fileName: string) => {
    setLoading(true)
    setExtractedTexts((prev) => prev.filter((text) => text.name !== fileName))
    setDropZoneFiles((prev) => prev.filter((_, i) => i !== index))
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index))
    setLoading(false)
  }

  return (
    <div>
      <div
        {...getRootProps()}
        className="border border-dashed rounded border-neutral-200 p-16"
      >
        <input {...getInputProps({ name: 'file' })} />
        <div className="flex flex-col items-center justify-center gap-4">
          <UploadIcon className="h-5 w-5" />
          {isDragActive ? (
            <p className="text-center text-sm text-zinc-600">
              拖放文件到这里 ...
            </p>
          ) : (
            <div className="items-center justify-center text-center">
              <p className="text-sm text-zinc-600">
                拖放文件到这里,或点击选择文件
              </p>
              <span className="text-xs text-zinc-500">
                支持的文件类型: .pdf, .doc, .docx, .txt
              </span>
            </div>
          )}
        </div>
      </div>

      <p className="mt-2 text-center text-sm text-zinc-500">
        如果您上传PDF,请确保可以选择/高亮文本。
      </p>

      {isProcessing && (
        <div className="mt-4 text-center">
          <div className="animate-pulse text-sm text-zinc-600">
            正在处理文件: {processingFile}
          </div>
        </div>
      )}

      <div className="pt-8">
        {!isProcessing || dropZoneFiles.length ? (
          <div>
            <div className="flex items-center">
              <Separator className="flex-1" />
              <span className="mx-2 text-sm text-zinc-600">已添加文件</span>
              <Separator className="flex-1" />
            </div>
            <ScrollArea className="mt-5 h-[200px] pr-2">
              {attachedFiles.map((file, index) => (
                <AttachedFile
                  key={index}
                  attachedFile={file}
                  index={index}
                  removeAttachedFile={removeAttachedFile}
                />
              ))}
            </ScrollArea>
          </div>
        ) : null}
      </div>
    </div>
  )
}

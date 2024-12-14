'use client'

import { createContext, useContext, useState, useCallback } from 'react'

interface PlaygroundContextType {
  models: string[]
  addModel: (modelId: string) => void
  removeModel: (index: number) => void
  moveLeft: (index: number) => void
  moveRight: (index: number) => void
  canAdd: boolean
  canRemove: (index: number) => boolean
  canMoveLeft: (index: number) => boolean
  canMoveRight: (index: number) => boolean
}

const PlaygroundContext = createContext<PlaygroundContextType | undefined>(
  undefined
)

const MAX_MODELS = 6

export function PlaygroundProvider({
  children,
  initialModels
}: {
  children: React.ReactNode
  initialModels: string[]
}) {
  const [models, setModels] = useState<string[]>(initialModels)

  const addModel = useCallback(
    (modelId: string) => {
      if (models.length < MAX_MODELS) {
        setModels((prev) => [...prev, modelId])
      }
    },
    [models]
  )

  const removeModel = useCallback((index: number) => {
    setModels((prev) => prev.filter((_, i) => i !== index))
  }, [])

  const moveLeft = useCallback((index: number) => {
    if (index > 0) {
      setModels((prev) => {
        const newModels = [...prev]
        ;[newModels[index - 1], newModels[index]] = [
          newModels[index],
          newModels[index - 1]
        ]
        return newModels
      })
    }
  }, [])

  const moveRight = useCallback(
    (index: number) => {
      if (index < models.length - 1) {
        setModels((prev) => {
          const newModels = [...prev]
          ;[newModels[index], newModels[index + 1]] = [
            newModels[index + 1],
            newModels[index]
          ]
          return newModels
        })
      }
    },
    [models.length]
  )

  const canAdd = models.length < MAX_MODELS
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const canRemove = (index: number) => models.length > 1
  const canMoveLeft = (index: number) => index > 0
  const canMoveRight = (index: number) => index < models.length - 1

  return (
    <PlaygroundContext.Provider
      value={{
        models,
        addModel,
        removeModel,
        moveLeft,
        moveRight,
        canAdd,
        canRemove,
        canMoveLeft,
        canMoveRight
      }}
    >
      {children}
    </PlaygroundContext.Provider>
  )
}

export function usePlayground() {
  const context = useContext(PlaygroundContext)
  if (!context) {
    throw new Error('usePlayground must be used within PlaygroundProvider')
  }
  return context
}

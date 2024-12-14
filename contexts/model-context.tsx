'use client'

import { Model, ModelParameter } from '@/lib/models'
import { createContext, useContext, useState, ReactNode } from 'react'

interface ModelContextType {
  model: Model
  setModel: (model: Model) => void
  updateModelParameter: (key: keyof ModelParameter, value: number) => void
  openPopoverModelCard: boolean
  setOpenPopoverModelCard: (open: boolean) => void
  hoveredModel: Model | null
  setHoveredModel: (model: Model | null) => void
}

const ModelContext = createContext<ModelContextType | undefined>(undefined)

export function useModel() {
  const context = useContext(ModelContext)
  if (!context) {
    throw new Error('useModel must be used within a ModelProvider')
  }
  return context
}

interface ModelProviderProps {
  initialModel: Model
  children: ReactNode
}

export function ModelProvider({ initialModel, children }: ModelProviderProps) {
  const [model, setModel] = useState<Model>(initialModel)
  const [openPopoverModelCard, setOpenPopoverModelCard] = useState(false)
  const [hoveredModel, setHoveredModel] = useState<Model | null>(null)
  const updateModelParameter = (key: keyof ModelParameter, value: number) => {
    setModel(
      (prevModel) =>
        ({
          ...prevModel,
          parameters: {
            ...prevModel.parameters,
            [key]: {
              ...prevModel.parameters[key],
              value
            }
          }
        } as Model)
    )
  }

  return (
    <ModelContext.Provider
      value={{
        model,
        setModel,
        updateModelParameter,
        openPopoverModelCard,
        setOpenPopoverModelCard,
        hoveredModel,
        setHoveredModel
      }}
    >
      {children}
    </ModelContext.Provider>
  )
}

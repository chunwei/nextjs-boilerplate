'use client'

import { createContext, useContext, ReactNode, useState } from 'react'

interface DashboardContextType {
  team: string
  botId?: string
  updateTeam: (team: string) => void
  updateBotId: (botId: string) => void
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined)

export function DashboardProvider({ 
  children,
  initialTeam,
  initialBotId 
}: { 
  children: ReactNode
  initialTeam: string
  initialBotId?: string 
}) {
  const [team, setTeam] = useState(initialTeam)
  const [botId, setBotId] = useState(initialBotId)

  const updateTeam = (newTeam: string) => {
    if (!newTeam) {
      console.warn('Attempting to set empty team value')
      return
    }
    setTeam(newTeam)
  }

  return (
    <DashboardContext.Provider value={{
      team,
      botId,
      updateTeam,
      updateBotId: setBotId
    }}>
      {children}
    </DashboardContext.Provider>
  )
}

export function useDashboard() {
  const context = useContext(DashboardContext)
  if (!context) {
    throw new Error('useDashboard must be used within DashboardProvider')
  }
  return context
} 
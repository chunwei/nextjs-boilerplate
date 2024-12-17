import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback
} from 'react'

interface SyncContextType {
  syncStates: Record<string, boolean>
  toggleSync: (paneId: string) => void
}

const SyncContext = createContext<SyncContextType | undefined>(undefined)

export function SyncProvider({ children }: { children: ReactNode }) {
  const [syncStates, setSyncStates] = useState<Record<string, boolean>>({})

  const toggleSync = useCallback((paneId: string) => {
    setSyncStates((prev) => ({ ...prev, [paneId]: !prev[paneId] }))
  }, [])

  return (
    <SyncContext.Provider
      value={{
        syncStates,
        toggleSync
      }}
    >
      {children}
    </SyncContext.Provider>
  )
}

export const useSync = () => {
  const context = useContext(SyncContext)
  if (!context) {
    throw new Error('useSync must be used within a SyncProvider')
  }
  return context
}

'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-react'

export default function DashboardError({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Dashboard Error:', error)
  }, [error])

  return (
    <div className="container mx-auto p-4">
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>
          Something went wrong while loading the dashboard
        </AlertTitle>
        <AlertDescription className="mt-2 flex flex-col gap-4">
          <p>{error.message || 'Failed to load dashboard data'}</p>
          <Button onClick={reset} variant="outline" size="sm">
            Retry
          </Button>
        </AlertDescription>
      </Alert>
    </div>
  )
}

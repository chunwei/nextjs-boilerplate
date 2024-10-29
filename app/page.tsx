import { getChatMessages } from '@/lib/api'
import { ClientHome } from '@/components/client-home'
import { Suspense } from 'react'
import { LoadingSpinner } from '@/components/loading-spinner'


export default async function Home() {
  const messages = await getChatMessages('user1')
  
  return (
 
      <Suspense fallback={<LoadingSpinner />}>
        <ClientHome initialMessages={messages} />
      </Suspense>
   
  )
}

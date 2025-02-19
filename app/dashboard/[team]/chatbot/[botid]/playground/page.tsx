import React from 'react';
import Playground from './components/playground'
// import { SidebarProvider } from '@/components/ui/sidebar'

const PlaygroundPage = () => {
  return (
    <div className="flex overflow-hidden h-[calc(100svh-200px)]">
      <Playground />
    </div>
  )
}

export default PlaygroundPage; 
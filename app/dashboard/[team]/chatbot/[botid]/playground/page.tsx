import React from 'react';
import Playground from './components/playground'

const PlaygroundPage = () => {
  return (
    <div className="flex overflow-hidden h-[calc(100svh-200px)]">
      <Playground />
    </div>
  )
}

export default PlaygroundPage; 
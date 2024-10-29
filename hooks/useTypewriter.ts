import { useState, useCallback } from 'react'

export function useTypewriter(speed = 50) {
  const [text, setText] = useState('')
  
  const startTyping = useCallback((content: string) => {
    setText('')
    let i = 0
    
    const type = () => {
      if (i < content.length) {
        setText(prev => prev + content.charAt(i))
        i++
        setTimeout(type, speed)
      }
    }
    
    type()
  }, [speed])

  return { text, startTyping }
}

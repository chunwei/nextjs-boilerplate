import { Mic } from 'lucide-react'
import { Button } from '../ui/button'
import { memo } from 'react'
import { StopIcon } from './icons'

function PureSpeechRecognitionButton({
  isListening,
  onStart,
  onStop,
  disabled
}: {
  isListening: boolean
  onStart: () => void
  onStop: () => void
  disabled: boolean
}) {
  return (
    <Button
      className="p-1 h-fit m-0.5 "
      onClick={(event) => {
        event.preventDefault()
        if (isListening) {
          onStop()
        } else {
          onStart()
        }
      }}
      variant="ghost"
      disabled={disabled}
    >
      {isListening ? <StopIcon size={14} /> : <Mic size={14} />}
    </Button>
  )
}

export const SpeechRecognitionButton = memo(PureSpeechRecognitionButton)

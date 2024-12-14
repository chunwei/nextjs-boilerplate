import { useModel } from '@/contexts/model-context'
import React from 'react'
import { ModelInfoCard } from './model-info-card'

function ModeCardPopover() {
  const { openPopoverModelCard } = useModel()
  return openPopoverModelCard ? (
    <div className="absolute z-50 left-[318px] top-[52px]">
      <div className="w-[320px] min-h-[280px]">
        <ModelInfoCard isPopover />
      </div>
    </div>
  ) : null
}

export default ModeCardPopover

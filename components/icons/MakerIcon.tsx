import React from 'react'
import { MAKER_ICONS } from './model-makers'
import { DefaultMakerIcon } from './model-makers/DefaultMaker'

const MakerIcon = ({ makerName }: { makerName: string }) => {
  const IconComponent =
    MAKER_ICONS[makerName.toLowerCase() as keyof typeof MAKER_ICONS]
  return IconComponent ? (
    React.createElement(IconComponent, {
      className: 'flex-shrink-0 flex-grow-0'
    })
  ) : (
    <DefaultMakerIcon className="flex-shrink-0 flex-grow-0" />
  )
}

export default MakerIcon

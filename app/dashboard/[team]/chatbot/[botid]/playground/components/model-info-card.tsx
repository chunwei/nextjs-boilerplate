import { ExternalLink } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useModel } from '@/contexts/model-context'
import React from 'react'
import MakerIcon from '@/components/icons/MakerIcon'

interface ModelInfoCardProps {
  isPopover?: boolean
}

export function ModelInfoCard({ isPopover }: ModelInfoCardProps) {
  const { model, hoveredModel } = useModel()
  if (isPopover && hoveredModel === null) return null
  console.log('hoveredModel', hoveredModel)
  const { providerHumanName, makerHumanName, name, info } =
    isPopover && hoveredModel ? hoveredModel : model
  const { description, contextWindow, pricing } = info
  return (
    <Card className="w-full max-w-2xl rounded-md">
      <CardContent className="pt-4">
        <div className="flex items-center gap-1 flex-1 overflow-hidden">
          <MakerIcon makerName={makerHumanName} />

          <span className="text-xs text-muted-foreground flex-shrink-0 flex-grow-0">
            {providerHumanName}
          </span>
          <span className="text-xs text-muted-foreground flex-shrink-0 flex-grow-0">
            /
          </span>
          <span className="flex-1 text-start whitespace-nowrap overflow-hidden text-ellipsis  text-xs truncate">
            {name}
          </span>
        </div>
        <div className="my-4 text-xs text-zinc-500 dark:text-zinc-400">
          {description}
        </div>

        <div className="px-1 my-0 text-xs divide-y">
          <div className="flex items-start py-3">
            <div className="font-medium w-28">Context</div>
            <div className="flex-1 text-zinc-600 dark:text-zinc-400">
              {contextWindow} tokens
            </div>
          </div>
          <div className="flex items-start py-3">
            <div className="font-medium w-28">Input Pricing</div>
            <div className="flex-1 text-zinc-600 dark:text-zinc-400">
              {pricing?.inputCostPerMil} / million tokens
            </div>
          </div>
          <div className="flex items-start py-3">
            <div className="font-medium w-28">Output Pricing</div>
            <div className="flex-1 text-zinc-600 dark:text-zinc-400">
              {pricing?.outputCostPerMil} / million tokens
            </div>
          </div>
        </div>
      </CardContent>
      {!isPopover && (
        <CardFooter className="p-0">
          <div className="flex flex-1 items-center justify-between px-6 py-4 font-medium border-t rounded-b-lg bg-zinc-100/75 dark:bg-zinc-900/75">
            <div className="flex items-center gap-3">
              <Button variant="link" className="h-auto p-0" asChild>
                <a
                  href={info.modelUrl}
                  className="text-xs flex items-center gap-1"
                >
                  Model Page
                  <ExternalLink className="!w-3 !h-3" />
                </a>
              </Button>
              <Button variant="link" className="h-auto p-0" asChild>
                <a
                  href={info.pricing?.pricingUrl}
                  className="text-xs flex items-center gap-1"
                >
                  Pricing
                  <ExternalLink className="!w-3 !h-3" />
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="link" className="h-auto p-0" asChild>
                <a
                  href={info.website}
                  className="text-xs flex items-center gap-1"
                >
                  Website
                  <ExternalLink className="!w-3  !h-3" />
                </a>
              </Button>
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  )
}

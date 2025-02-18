import { FC } from 'react'

import CopyIcon from '@/assets/icons/copy-icon'
import { getClampExpression } from '@/helpers/fluid-sizes'
import useSizes from '@/store/useSizes'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

const CopyComponent: FC = () => {
  return (
    <TooltipProvider delayDuration={50}>
      <Tooltip>
        <TooltipTrigger>
          <div className="border-l-input size-14 cursor-pointer border-l px-4 py-2">
            <CopyIcon />
          </div>
        </TooltipTrigger>
        <TooltipContent className="bg-secondary text-white">Copy to clipboard</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

const CopyProperty = () => {
  const { intercept, slope, minValue, maxValue } = useSizes()
  const clampExpression = getClampExpression({ intercept, slope, minValue, maxValue })

  return (
    <div className="flex w-full justify-center">
      <div className="border-input flex rounded-lg border">
        <div className="flex w-108 items-center px-4 py-2">{clampExpression}</div>
        <CopyComponent />
      </div>
    </div>
  )
}

export default CopyProperty

import { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

import CheckmarkIcon from '@/assets/icons/checkmark-icon'
import CopyIcon from '@/assets/icons/copy-icon'
import { getClampExpression } from '@/helpers/fluid-sizes'
import useSizes from '@/store/useSizes'

const CopyProperty = () => {
  const [isCopied, setIsCopied] = useState(false)

  const { intercept, slope, minValue, maxValue } = useSizes()
  const clampExpression = getClampExpression({ intercept, slope, minValue, maxValue })

  const handleCopy = () => {
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 4000)
  }

  return (
    <div className="flex w-full justify-center">
      <div className="border-input flex rounded-lg border">
        <div className="flex max-w-full min-w-92 items-center px-4 py-2">{clampExpression}</div>
        <CopyToClipboard text={clampExpression} onCopy={handleCopy}>
          <div className="border-l-input flex min-w-28 cursor-pointer items-center justify-start gap-x-2 border-l px-4 py-2">
            <div className="size-4">{isCopied ? <CheckmarkIcon /> : <CopyIcon />}</div>
            {isCopied ? 'Copied!' : 'Copy'}
          </div>
        </CopyToClipboard>
      </div>
    </div>
  )
}

export default CopyProperty

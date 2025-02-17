import { FC } from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { SCREEN_SIZES } from '@/core/constants'
import { calculateFluidSize } from '@/helpers/fluid-sizes'
import useSizes from '@/store/useSizes'

interface FluidSizeProps {
  screenSize: number
  minValue: number
  maxValue: number
  slope: number
  intercept: number
}

const FluidSizeRow: FC<FluidSizeProps> = ({ screenSize, minValue, maxValue, slope, intercept }) => (
  <TableRow key={`screen-size-${screenSize}`}>
    <TableCell className="font-medium">{screenSize}</TableCell>
    <TableCell className="text-right">
      {calculateFluidSize({ screenSize, minValue, maxValue, slope, intercept }).toFixed(0)}
    </TableCell>
  </TableRow>
)

const SizesTable = () => {
  const { slope, intercept, minValue, maxValue } = useSizes()

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Screen Size</TableHead>
          <TableHead className="text-right">Fluid Size</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {SCREEN_SIZES.map(screenSize => (
          <FluidSizeRow
            key={`screen-size-${screenSize}`}
            screenSize={screenSize}
            minValue={minValue}
            maxValue={maxValue}
            slope={slope}
            intercept={intercept}
          />
        ))}
      </TableBody>
    </Table>
  )
}

export default SizesTable

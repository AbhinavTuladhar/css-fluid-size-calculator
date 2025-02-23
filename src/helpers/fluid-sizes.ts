import { SizesFormValues } from '@/types/'
import { roundNumber } from '@/utils/number.utils'

/**
 * Get the slope and intercept of the fluid size formula
 */
export const calculateSlopeAndIntercept = ({
  minValue,
  maxValue,
  minScreenSize,
  maxScreenSize,
}: SizesFormValues) => {
  const slope = (maxValue - minValue) / (maxScreenSize - minScreenSize)
  const intercept = minValue - slope * minScreenSize
  return { slope, intercept }
}

interface FluidSizeProps {
  screenSize: number
  minValue: number
  maxValue: number
  slope: number
  intercept: number
}

// To calculate the size value at a specific screen size
export const calculateFluidSize = ({
  screenSize,
  minValue,
  maxValue,
  slope,
  intercept,
}: FluidSizeProps) => {
  const fluidSize = slope * screenSize + intercept
  // Simulate a clamp function
  return Math.min(Math.max(fluidSize, minValue), maxValue)
}

// To compute the string representation of the fluid size at a specific screen size
export const getClampExpression = ({
  minValue,
  maxValue,
  slope,
  intercept,
}: Omit<FluidSizeProps, 'screenSize'>) => {
  const minValueRem = roundNumber(minValue / 16)
  const maxValueRem = roundNumber(maxValue / 16)
  const slopeVw = roundNumber(slope * 100)
  const interceptRem = roundNumber(intercept / 16)

  return `clamp(${minValueRem}rem, ${slopeVw}vw ${intercept > 0 ? '+' : '-'} ${intercept > 0 ? interceptRem : -interceptRem}rem, ${maxValueRem}rem)`
}

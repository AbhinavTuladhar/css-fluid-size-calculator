import { SizesFormValues } from '@/types/'
import { formatNumber } from '@/utils/number.utils'

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
  const minValueRem = formatNumber(minValue / 16)
  const maxValueRem = formatNumber(maxValue / 16)
  const slopeVw = formatNumber(slope * 100)
  const interceptRem = formatNumber(intercept / 16)

  return `clamp(${minValueRem}rem, ${slopeVw}vw + ${interceptRem}rem, ${maxValueRem}rem)`
}

import { SizesFormValues } from '@/types/'

export const calculateFluidSizes = ({
  minValue,
  maxValue,
  minScreenSize,
  maxScreenSize,
}: SizesFormValues) => {
  const slope = (maxValue - minValue) / (maxScreenSize - minScreenSize)
  const intercept = minValue - slope * minScreenSize
  return {
    slope: slope * 100, // Converting to 100vw
    intercept: intercept / 16, // Converting to rem
  }
}

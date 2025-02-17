import { create } from 'zustand'

import { calculateSlopeAndIntercept } from '@/helpers/fluid-sizes'
import { SizesFormValues } from '@/types'

interface SizesState extends SizesFormValues {
  slope: number
  intercept: number
  updateMinValue: (value: number) => void
  updateMaxValue: (value: number) => void
  updateMinScreenSize: (value: number) => void
  updateMaxScreenSize: (value: number) => void
}

// Helper function to update state and recalculate slope/intercept
const updateStateAndRecalculate = (state: SizesState, newValues: Partial<SizesFormValues>) => {
  const updatedState = { ...state, ...newValues }
  const { slope, intercept } = calculateSlopeAndIntercept(updatedState)
  return { ...updatedState, slope, intercept }
}

const useSizes = create<SizesState>(set => {
  const defaultValues: SizesFormValues = {
    minValue: 1,
    maxValue: 2,
    minScreenSize: 360,
    maxScreenSize: 1366,
  }

  // Calculate initial slope and intercept
  const { slope, intercept } = calculateSlopeAndIntercept(defaultValues)

  return {
    ...defaultValues,
    slope,
    intercept,
    updateMinValue: value => set(state => updateStateAndRecalculate(state, { minValue: value })),
    updateMaxValue: value => set(state => updateStateAndRecalculate(state, { maxValue: value })),
    updateMinScreenSize: value =>
      set(state => updateStateAndRecalculate(state, { minScreenSize: value })),
    updateMaxScreenSize: value =>
      set(state => updateStateAndRecalculate(state, { maxScreenSize: value })),
  }
})

export default useSizes

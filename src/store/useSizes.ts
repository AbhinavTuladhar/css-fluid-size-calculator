import { create } from 'zustand'

import { SizesFormValues } from '@/types'

interface SizesState extends SizesFormValues {
  updateMinValue: (value: number) => void
  updateMaxValue: (value: number) => void
  updateMinScreenSize: (value: number) => void
  updateMaxScreenSize: (value: number) => void
}

const useSizes = create<SizesState>(set => ({
  minValue: 1,
  maxValue: 2,
  minScreenSize: 360,
  maxScreenSize: 1366,
  updateMinValue: value => set({ minValue: value }),
  updateMaxValue: value => set({ maxValue: value }),
  updateMaxScreenSize: value => set({ maxScreenSize: value }),
  updateMinScreenSize: value => set({ minScreenSize: value }),
}))

export default useSizes

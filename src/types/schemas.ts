import { z } from 'zod'

export const sizesFormSchema = z.object({
  minValue: z.number(),
  maxValue: z.number(),
  minScreenSize: z.number(),
  maxScreenSize: z.number(),
})

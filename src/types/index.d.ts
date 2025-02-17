import { z } from 'zod'

import { sizesFormSchema } from './schemas'

export type SizesFormValues = z.infer<typeof sizesFormSchema>

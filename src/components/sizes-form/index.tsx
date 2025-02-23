import { ChangeEvent } from 'react'
import { ControllerRenderProps, useForm } from 'react-hook-form'

import useSizes from '@/store/useSizes'
import { SizesFormValues } from '@/types'
import { sizesFormSchema } from '@/types/schemas'
import { zodResolver } from '@hookform/resolvers/zod'

import InputBox from '../input-box'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'

const SizesForm = () => {
  const {
    minValue,
    maxValue,
    minScreenSize,
    maxScreenSize,
    updateMinValue,
    updateMaxValue,
    updateMinScreenSize,
    updateMaxScreenSize,
  } = useSizes()

  const form = useForm<SizesFormValues>({
    resolver: zodResolver(sizesFormSchema),
    defaultValues: {
      minValue,
      maxValue,
      minScreenSize,
      maxScreenSize,
    },
  })

  const handleChange = (
    field: ControllerRenderProps<SizesFormValues>,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const { name: fieldName, value: fieldValue } = event.target
    field.onChange(fieldValue)

    switch (fieldName) {
      case 'minValue':
        updateMinValue(Number(fieldValue))
        break
      case 'maxValue':
        updateMaxValue(Number(fieldValue))
        break
      case 'minScreenSize':
        updateMinScreenSize(Number(fieldValue))
        break
      case 'maxScreenSize':
        updateMaxScreenSize(Number(fieldValue))
        break
      default:
        break
    }
  }

  return (
    <Form {...form}>
      <form className="grid items-stretch gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
        <InputBox>
          <FormField
            control={form.control}
            name="minValue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Min. Size (px)</FormLabel>
                <FormControl>
                  <Input {...field} type="number" onChange={event => handleChange(field, event)} />
                </FormControl>
                <FormDescription>The minimum value of your property.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </InputBox>
        <FormField
          control={form.control}
          name="maxValue"
          render={({ field }) => (
            <InputBox>
              <FormItem>
                <FormLabel>Max. Size (px)</FormLabel>
                <FormControl>
                  <Input {...field} type="number" onChange={event => handleChange(field, event)} />
                </FormControl>
                <FormDescription>The maximum value of your property.</FormDescription>
                <FormMessage />
              </FormItem>
            </InputBox>
          )}
        />
        <FormField
          control={form.control}
          name="minScreenSize"
          render={({ field }) => (
            <InputBox>
              <FormItem>
                <FormLabel>Min. Screen Size (px)</FormLabel>
                <FormControl>
                  <Input {...field} type="number" onChange={event => handleChange(field, event)} />
                </FormControl>
                <FormDescription>The minimum value of the viewport size.</FormDescription>
                <FormMessage />
              </FormItem>
            </InputBox>
          )}
        />
        <FormField
          control={form.control}
          name="maxScreenSize"
          render={({ field }) => (
            <InputBox>
              <FormItem>
                <FormLabel>Max Screen Size (px)</FormLabel>
                <FormControl>
                  <Input {...field} type="number" onChange={event => handleChange(field, event)} />
                </FormControl>
                <FormDescription>The maximum value of the viewport size.</FormDescription>
                <FormMessage />
              </FormItem>
            </InputBox>
          )}
        />
      </form>
    </Form>
  )
}

export default SizesForm

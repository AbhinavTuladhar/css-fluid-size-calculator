import { useForm } from 'react-hook-form'
import { z } from 'zod'

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
  const form = useForm<z.infer<typeof sizesFormSchema>>({
    resolver: zodResolver(sizesFormSchema),
  })

  const onSubmit = (data: z.infer<typeof sizesFormSchema>) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid items-stretch gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <InputBox>
          <FormField
            control={form.control}
            name="minValue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Min. Size</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                <FormLabel>Max. Size</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                <FormLabel>Min. Screen Size</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>The minimum value of the viewport size.</FormDescription>
                <FormMessage />
              </FormItem>
            </InputBox>
          )}
        />
        <FormField
          control={form.control}
          name="maxValue"
          render={({ field }) => (
            <InputBox>
              <FormItem>
                <FormLabel>Max Screen Size</FormLabel>
                <FormControl>
                  <Input {...field} />
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

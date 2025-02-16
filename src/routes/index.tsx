import SizesForm from '@/components/sizes-form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="feature">
      <SizesForm />
    </div>
  )
}

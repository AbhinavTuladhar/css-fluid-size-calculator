import SizesForm from '@/components/sizes-form'
import useSizes from '@/store/useSizes'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { slope, intercept } = useSizes()

  return (
    <div className="feature">
      <SizesForm />
      <span>
        {' '}
        Slope: {slope} Intercept: {intercept}
      </span>
    </div>
  )
}

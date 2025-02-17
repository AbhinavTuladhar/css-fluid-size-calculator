import SizesForm from '@/components/sizes-form'
import SizesTable from '@/components/sizes-table'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="feature space-y-4">
      <SizesForm />
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <SizesTable />
        </div>
      </div>
    </div>
  )
}

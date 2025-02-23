import CopyProperty from '@/components/copy-property'
import SizesChart from '@/components/sizes-chart'
import SizesForm from '@/components/sizes-form'
import SizesTable from '@/components/sizes-table'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="feature space-y-4 lg:space-y-6">
      <SizesForm />
      <CopyProperty />
      <div className="grid grid-cols-12 items-start gap-x-6 gap-y-4">
        <div className="col-span-12 md:col-span-5 lg:col-span-3">
          <SizesTable />
        </div>
        <div className="border-border col-span-12 rounded-lg border p-4 md:col-span-7 lg:col-span-9">
          <SizesChart />
        </div>
      </div>
    </div>
  )
}

'use client'

import { FC } from 'react'
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { calculateFluidSize } from '@/helpers/fluid-sizes'
import useSizes from '@/store/useSizes'

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

const SizesChart = () => {
  const { minValue, maxValue, slope, intercept } = useSizes()

  return (
    <SizesChartBody minValue={minValue} maxValue={maxValue} slope={slope} intercept={intercept} />
  )
}

interface SizesChartBodyProps {
  minValue: number
  maxValue: number
  slope: number
  intercept: number
}

const SizesChartBody: FC<SizesChartBodyProps> = ({ minValue, maxValue, slope, intercept }) => {
  // Vary the x axis from 320 to 1920px, with 1px differences
  const xAxisValues = []
  for (let i = 320; i <= 1920; i += 1) {
    xAxisValues.push(i)
  }

  const chartData = xAxisValues.map(screenSize => {
    const fluidSize = calculateFluidSize({
      screenSize,
      minValue,
      maxValue,
      slope,
      intercept,
    })

    return {
      screenSize,
      fluidSize,
    }
  })

  return (
    <ChartContainer config={chartConfig}>
      <AreaChart accessibilityLayer data={chartData}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={1} />
            <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={true} color={'var(--border)'} />
        <XAxis
          allowDuplicatedCategory={false}
          dataKey="screenSize"
          tickLine={false}
          axisLine={true}
          offset={200}
          ticks={xAxisValues.filter((_, index) => index % 100 === 0)}
          tickFormatter={value => ` ${value} `}
        />
        <YAxis
          dataKey="fluidSize"
          tickLine={false}
          unit="px"
          interval="preserveStartEnd"
          minTickGap={4}
          max={32}
          type="number"
        />
        <Area
          name="screenSize"
          dot={false}
          dataKey="fluidSize"
          type="monotoneX"
          stroke="var(--chart-1)"
          strokeWidth={3}
          fill="url(#colorUv)"
        />
        <ChartTooltip
          // formatter={value => 'Value'}
          label="{screenSize}"
          labelFormatter={value => `Value: ${value}`}
          content={
            <ChartTooltipContent
              hideLabel={true}
              nameKey="screenSize"
              formatter={(value, _name, props) => {
                const screenSize = props.payload.screenSize // Get the screenSize from the payload
                return (
                  <div className="flex flex-col gap-y-2">
                    <span> @{screenSize}px </span>
                    <span className="font-semibold">
                      Fluid Size: {Math.floor(value as number)}px
                    </span>
                  </div>
                )
              }}
            />
          }
        />
      </AreaChart>
    </ChartContainer>
  )
}

export default SizesChart

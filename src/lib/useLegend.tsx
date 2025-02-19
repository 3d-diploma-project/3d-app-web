import { useAppDispatch } from '@/hooks/use-redux'
import { generateLegend } from '@/lib/colorUtils'
import useStressUtils from '@/lib/useStressUtils'
import { setLegend } from '@/redux/slices/legendSlice'
import { LegendType } from '@/types/Legend'
import { useEffect } from 'react'

export default function useLegend() {
  const { stress } = useStressUtils()
  const legend = generateLegend(stress.min, stress.max)

  const dispatch = useAppDispatch()
  const onLegend = (legend: LegendType[], min: number, max: number) => {
    dispatch(setLegend({ legend, min, max }))
  }

  useEffect(() => {
    if (!stress) return
    onLegend(legend, stress.min, stress.max)
  }, [stress, dispatch])
}

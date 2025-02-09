import { Legend } from '@/types/Legend'

export function generateDiapasons(legend: Legend[]) {
  const firstValue = 0

  return legend.map((item) => {
    const value = item.minValueForColor - firstValue
    return { ...item, value }
  })
}

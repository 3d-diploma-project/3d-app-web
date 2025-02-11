import LegendItem from '@/components/LegendItem'
import { generateLegend } from '@/lib/colorUtils'

import useGenerateColor from '@/lib/useGenerateColor'

const Legend = () => {
  const { stress, stressLoaded } = useGenerateColor()

  if (!stressLoaded || !stress) return null

  const legend = generateLegend(stress.min, stress.max)

  return (
    <div className="absolute left-0 top-[20%] z-10 flex w-full flex-row justify-center gap-1">
      {legend.map((item) => (
        <LegendItem color={item.color} diapason={item.minValueForColor} />
      ))}
    </div>
  )
}

export default Legend

import LegendItem from '@/components/LegendItem'
import { generateLegend } from '@/lib/colorUtils'

import useStressUtils from '@/lib/useStressUtils'

const Legend = () => {
  const { stress, stressLoaded } = useStressUtils()

  if (!stressLoaded || !stress) return null

  const legend = generateLegend(stress.min, stress.max)
  console.log(legend)

  return (
    <div className="absolute z-10 ml-44 flex flex-col justify-center">
      {legend.map((item, idx) => (
        <LegendItem
          color={item.color}
          diapasonStart={item.diapasonStart}
          key={item.diapasonStart}
          lastValue={idx == legend.length - 1 ? item.diapasonEnd : null}
        />
      ))}
    </div>
  )
}

export default Legend

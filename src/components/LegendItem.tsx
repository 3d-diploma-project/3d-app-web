import useConvertColor from '@/lib/useConvertColor'
import { FC } from 'react'
type LegendItemType = {
  color: number[]
  diapason: number
}

const LegendItem: FC<LegendItemType> = ({ color, diapason }) => {
  const rgbColor = useConvertColor(color)
  return (
    <div className="flex flex-col gap-1">
      <div className="h-6 w-24" style={{ backgroundColor: rgbColor }}></div>
      <div className="h-10 text-xs">{diapason.toExponential(6)}</div>
    </div>
  )
}

export default LegendItem

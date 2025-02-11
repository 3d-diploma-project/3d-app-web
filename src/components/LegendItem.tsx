import useConvertColor from '@/lib/useConvertColor'
import { FC } from 'react'
type LegendItemType = {
  color: number[]
  diapason: number
}

const LegendItem: FC<LegendItemType> = ({ color, diapason }) => {
  const rgbColor = useConvertColor(color)
  return (
    <div className="relative flex flex-col">
      <div className="h-6 w-24" style={{ backgroundColor: rgbColor }}></div>
      <div className="absolute left-1/2 top-1/2 flex h-4 w-16 -translate-x-1/2 -translate-y-5 items-center justify-center border border-coal-black bg-white">
        <div className="text-center text-xs">{diapason.toExponential(2)}</div>
      </div>
    </div>
  )
}

export default LegendItem

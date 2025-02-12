import useConvertColor from '@/lib/useConvertColor'
import { FC } from 'react'
type LegendItemType = {
  color: number[]
  diapasonStart: number
  lastValue: number | null
}

const LegendItem: FC<LegendItemType> = ({ color, diapasonStart, lastValue }) => {
  const rgbColor = useConvertColor(color)
  return (
    <div className="relative flex flex-col">
      <div className="h-9 w-24 border-y border-black" style={{ backgroundColor: rgbColor }}></div>
      <div className="absolute left-1/2 top-1/2 flex h-7 w-16 -translate-x-1/2 -translate-y-8 items-center justify-center border border-black bg-white">
        <div className="text-center text-xs">{diapasonStart.toExponential(2)}</div>
      </div>
      {lastValue !== null && (
        <div className="absolute left-1/2 top-1/2 flex h-7 w-16 -translate-x-1/2 translate-y-1 items-center justify-center border border-black bg-white text-center text-xs">
          {lastValue.toExponential(2)}
        </div>
      )}
    </div>
  )
}

export default LegendItem

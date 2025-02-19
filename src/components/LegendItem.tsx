import useConvertColor from '@/lib/useConvertColor'
import { LegendItemType } from '@/types/LegendItem'
import { FC } from 'react'

const LegendItem: FC<LegendItemType> = ({ color, diapasonStart, diapasonEnd }) => {
  const rgbColor = useConvertColor(color)
  return (
    <div className="relative flex flex-col">
      <div className="h-9 w-24 border-y border-black" style={{ backgroundColor: rgbColor }}></div>
      <div className="absolute left-1/2 top-1/2 flex h-5 w-16 -translate-x-1/2 -translate-y-7 items-center justify-center border border-black bg-white">
        <div className="text-center text-xs">{diapasonStart.toExponential(2)}</div>
        <div className="text-center text-xs">{diapasonEnd.toExponential(2)}</div>
      </div>
    </div>
  )
}

export default LegendItem

import LegendItem from '@/components/LegendItem'
import { useAppSelector } from '@/hooks/use-redux'

const Legend = () => {
  const legendColors = useAppSelector((store) => store.legend?.legend)

  if (!legendColors) {
    return
  }

  return (
    <div className="absolute z-10 ml-44 flex flex-col justify-center bg-red-500">
      {legendColors.map((item) => (
        <LegendItem color={item.color} rangeStart={item.rangeStart} rangeEnd={item.rangeEnd} key={item.rangeStart} />
      ))}
    </div>
  )
}

export default Legend

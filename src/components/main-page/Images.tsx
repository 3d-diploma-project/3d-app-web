import figure1 from '@/assets/figure1.png'
import figure2 from '@/assets/figure2.png'
import figure3 from '@/assets/figure3.png'

export default function Images() {
  return (
    <div className="flex w-full select-none justify-between pt-16 md:px-10">
      <div className="relative aspect-square flex-1">
        <img
          draggable={false}
          src={figure1}
          alt="figure1"
          className="absolute -top-20 h-full w-full object-scale-down"
        />
      </div>
      <div className="aspect-square flex-1">
        <img draggable={false} src={figure2} alt="figure2" className="h-full w-full object-scale-down" />
      </div>
      <div className="relative aspect-square flex-1">
        <img
          draggable={false}
          src={figure3}
          alt="figure3"
          className="absolute -top-28 h-full w-full object-scale-down"
        />
      </div>
    </div>
  )
}

import LegendItem from '@/components/LegendItem'
import { LegendType } from '@/types/Legend'
import { cva } from 'class-variance-authority'
import { FC } from 'react'

const legendVariants = cva('absolute z-10 flex bg-red-500', {
  variants: {
    variant: {
      stress: 'flex-col justify-center',
      nodes: 'flex-row justify-center'
    },
    alignment: {
      stress: 'ml-44',
      nodes: 'ml-44'
    }
  },
  defaultVariants: {
    variant: 'stress',
    alignment: 'stress'
  }
})

export interface LegendProps {
  array: LegendType[]
  variant?: 'stress' | 'nodes'
}

const Legend: FC<LegendProps> = ({ array, variant }) => {
  return (
    <div className={legendVariants({ variant, alignment: variant })}>
      {array.map((item) => (
        <LegendItem
          color={item.color}
          diapasonStart={item.diapasonStart}
          diapasonEnd={item.diapasonEnd}
          key={item.diapasonStart}
        />
      ))}
    </div>
  )
}

export default Legend

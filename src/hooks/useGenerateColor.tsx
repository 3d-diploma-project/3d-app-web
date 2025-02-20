import { useAppSelector } from '@/hooks/use-redux'
import { generateColorArray } from '@/lib/colorUtils'
import { ModelPhysicalQuantity } from '@/types/ModelPhysicalQuantity'

import { useEffect, useState } from 'react'

export default function useGenerateColor() {
  const stress: ModelPhysicalQuantity = useAppSelector((store) => store.model.stress)!
  const stressLoaded = useAppSelector((store) => store.model.stressLoaded)

  const [color, setColor] = useState(new Float32Array())

  useEffect(() => {
    if (stressLoaded && stress) {
      setColor(generateColorArray(stress.values, stress.min, stress.max))
    }
  }, [stress, stressLoaded])

  return { color, stressLoaded }
}

import { useAppSelector } from '@/hooks/use-redux'
import { generateColorArray } from '@/lib/colorUtils'
import { ModelPhysicalQuantity } from '@/types/ModelPhysicalQuantity'

import { useEffect, useState } from 'react'

export default function useGenerateColor() {
  const stress: ModelPhysicalQuantity = useAppSelector((store) => store.model.stress)!
  const stressLoaded = useAppSelector((store) => store.model.stressLoaded)

  const otherCharacteristic: ModelPhysicalQuantity = useAppSelector((store) => store.model.otherCharacteristic)!
  const otherLoaded = useAppSelector((store) => store.model.otherLoaded)

  const [color, setColor] = useState(new Float32Array())

  useEffect(() => {
    if (stressLoaded && stress) {
      setColor(generateColorArray(stress.values, stress.min, stress.max))
    } else if (otherLoaded && otherCharacteristic) {
      setColor(generateColorArray(otherCharacteristic.values, otherCharacteristic.min, otherCharacteristic.max))
    }
  }, [stress, stressLoaded, otherCharacteristic, otherLoaded])

  return { color, stressLoaded, otherLoaded }
}

import useStressUtils from '@/hooks/useStressUtils'
import { generateColorArray } from '@/lib/colorUtils'

import { useEffect, useState } from 'react'

export default function useGenerateColor() {
  const { stress, stressLoaded } = useStressUtils()

  const [color, setColor] = useState(new Float32Array())

  useEffect(() => {
    if (stressLoaded && stress) {
      setColor(generateColorArray(stress.values, stress.min, stress.max))
    }
  }, [stress, stressLoaded])

  return { color }
}

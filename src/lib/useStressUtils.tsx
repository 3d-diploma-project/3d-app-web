import { useAppSelector } from '@/hooks/use-redux'
import { ModelPhysicalQuantity } from '@/types/ModelPhysicalQuantity'

export default function useStressUtils() {
  const stress: ModelPhysicalQuantity = useAppSelector((store) => store.model.stress)!
  const stressLoaded = useAppSelector((store) => store.model.stressLoaded)

  return { stress, stressLoaded }
}

import { Index } from '../types/Index'

export function useIndice(data: Index[]) {
  const faces = new Uint16Array(
    data.flatMap((indexSet) => [
      indexSet.vertex1 - 1,
      indexSet.vertex2 - 1,
      indexSet.vertex3 - 1,

      indexSet.vertex1 - 1,
      indexSet.vertex2 - 1,
      indexSet.vertex4 - 1,

      indexSet.vertex2 - 1,
      indexSet.vertex3 - 1,
      indexSet.vertex4 - 1,

      indexSet.vertex3 - 1,
      indexSet.vertex1 - 1,
      indexSet.vertex4 - 1
    ])
  )

  return faces
}

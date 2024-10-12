import { Vertex } from '../types/Vertex'

export function parseVerticies(input: string): Vertex[] {
  const verticies = []
  const lines = input.split('\n')

  for (const line of lines) {
    const params = line.trim().split(' ')
    console.log('\n\n', line)

    if (params.length !== 4) {
      console.log('Error: ', params)
      return []
    }

    verticies.push({
      index: Number(params[0]),
      x: Number(params[1]),
      y: Number(params[2]),
      z: Number(params[3])
    })
  }
  return verticies
}

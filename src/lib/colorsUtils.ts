import { Legend } from '@/types/Legend.ts'

export const COLOR_ARRAY_SIZE = 9
export const COLORS: number[][] = buildColors()

export function generateLegend(minValue: number, maxValue: number): Legend[] {
  const legend: Legend[] = []

  const diapason: number = maxValue - minValue
  const chunkSize: number = diapason / COLOR_ARRAY_SIZE

  for (let i = 0; i < COLOR_ARRAY_SIZE; i++) {
    const minValueForColor = minValue + chunkSize * i
    legend[i] = {
      minValueForColor,
      color: COLORS[i]
    }
  }

  return legend
}

export function generateColorArray(values: number[], minValue: number, maxValue: number): Float32Array {
  const legend: Legend[] = generateLegend(minValue, maxValue)
  const colors: number[] = []

  for (let i = 0; i < values.length; i++) {
    const colorsForValue = getColorFromLegend(values[i], legend)

    for (let j = 0; j < 4 * 3; j++) {
      colors.push(colorsForValue[0], colorsForValue[1], colorsForValue[2])
    }
  }

  return Float32Array.from(colors)
}

function getColorFromLegend(value: number, legend: Legend[]): number[] {
  for (let i = legend.length - 1; i >= 0; i--) {
    const legendItem = legend[i]
    if (value >= legendItem.minValueForColor) {
      return legendItem.color
    }
  }

  //show some exception
}

function buildColors() {
  //const jump = 0.66 / COLOR_ARRAY_SIZE
  const colors: number[][] = []

  for (let i = 0; i < COLOR_ARRAY_SIZE; i++) {
    //TODO: change from grey to rainbow
    colors[i] = [(i + 1.0) / 10.0, (i + 1.0) / 10.0, (i + 1.0) / 10.0]
  }

  return colors
}

import { Legend } from '@/types/Legend.ts'

export const COLOR_ARRAY_SIZE = 7
export const COLORS: number[][] = buildColorsForLegend(COLOR_ARRAY_SIZE)

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

  console.error("Can't find color for value in legend.")
}

export function buildColorsForLegend(size) {
  const jump = 0.66 / size
  const colors: number[][] = []

  for (let i = 0; i < size; i++) {
    colors[i] = HSVtoRGB(jump * i, 0.8, 0.8)
  }

  return colors
}

function HSVtoRGB(h: number, s: number, v: number) {
  const i = Math.floor(h * 6)
  const f = h * 6 - i
  const p = v * (1 - s)
  const q = v * (1 - f * s)
  const t = v * (1 - (1 - f) * s)

  switch (i % 6) {
    case 0:
      return [v, t, p]
    case 1:
      return [q, v, p]
    case 2:
      return [p, v, t]
    case 3:
      return [p, q, v]
    case 4:
      return [t, p, v]
    case 5:
      return [v, p, q]
  }
}

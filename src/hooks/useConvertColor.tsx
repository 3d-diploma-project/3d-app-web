export default function useConvertColor(color: number[]) {
  const [r, g, b] = color.map((c) => Math.round(c * 255))
  const rgbColor = `rgb(${r}, ${g}, ${b})`

  return rgbColor
}

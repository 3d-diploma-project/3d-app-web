import { parseDefaultFaces, parseDefaultVertices } from '@/lib/parser'
import { describe, expect, it } from 'vitest'

describe('parseDefaultVertices', () => {
  it('parses valid input correctly', () => {
    const input = '1 1 1 1\n2 2 2 2\n3 3 3 3'
    const expected = [
      { index: 1, x: 1, y: 1, z: 1 },
      { index: 2, x: 2, y: 2, z: 2 },
      { index: 3, x: 3, y: 3, z: 3 }
    ]
    expect(parseDefaultVertices(input)).toEqual(expected)
  })

  it('should ignore lines with less than 4 elements', () => {
    const input = '1 10 20\n22 22 22 22\n3 70 80'
    const expected = [{ index: 22, x: 22, y: 22, z: 22 }]
    expect(parseDefaultVertices(input)).toEqual(expected)
  })

  it('handles empty input', () => {
    expect(parseDefaultVertices('')).toEqual([])
  })

  it('trims spaces and parses correctly', () => {
    const input = ' 11  11   11  11 \n   22 22 22 22   \n33  33  33  33  '
    const expected = [
      { index: 11, x: 11, y: 11, z: 11 },
      { index: 22, x: 22, y: 22, z: 22 },
      { index: 33, x: 33, y: 33, z: 33 }
    ]
    expect(parseDefaultVertices(input)).toEqual(expected)
  })

  it('parses negative numbers correctly', () => {
    const input = '1 -10 20 -30\n2 -40 -50 60'
    const expected = [
      { index: 1, x: -10, y: 20, z: -30 },
      { index: 2, x: -40, y: -50, z: 60 }
    ]
    expect(parseDefaultVertices(input)).toEqual(expected)
  })

  it('returns empty array if no lines have exactly 4 elements', () => {
    const input = '4 4 4\n5 5 5\n6 6 6'
    expect(parseDefaultVertices(input)).toEqual([])
  })
})

describe('parseDefaultFaces', () => {
  it('parses valid input correctly', () => {
    const input = '1 24 25 43 26\n2 42 46 41 32\n3 16 43 46 42'
    const expected = [
      { index: 1, vertex1: 24, vertex2: 25, vertex3: 43, vertex4: 26 },
      { index: 2, vertex1: 42, vertex2: 46, vertex3: 41, vertex4: 32 },
      { index: 3, vertex1: 16, vertex2: 43, vertex3: 46, vertex4: 42 }
    ]
    expect(parseDefaultFaces(input)).toEqual(expected)
  })

  it('ignores lines with less than 5 elements', () => {
    const input = '24 25 43 26\n42 46 41 32\n3 16 43 46 42'
    const expected = [{ index: 3, vertex1: 16, vertex2: 43, vertex3: 46, vertex4: 42 }]
    expect(parseDefaultFaces(input)).toEqual(expected)
  })

  it('handles empty input', () => {
    expect(parseDefaultFaces('')).toEqual([])
  })

  it('trims spaces and parses correctly', () => {
    const input = ' 10  43   35  19 36 \n   11 8 44 6  7   \n12  41  45  44  39  '
    const expected = [
      { index: 10, vertex1: 43, vertex2: 35, vertex3: 19, vertex4: 36 },
      { index: 11, vertex1: 8, vertex2: 44, vertex3: 6, vertex4: 7 },
      { index: 12, vertex1: 41, vertex2: 45, vertex3: 44, vertex4: 39 }
    ]
    expect(parseDefaultFaces(input)).toEqual(expected)
  })

  it('parses negative numbers correctly', () => {
    const input = '16 41 39 -30 38\n17 -45 -14 -4 -18'
    const expected = [
      { index: 16, vertex1: 41, vertex2: 39, vertex3: -30, vertex4: 38 },
      { index: 17, vertex1: -45, vertex2: -14, vertex3: -4, vertex4: -18 }
    ]
    expect(parseDefaultFaces(input)).toEqual(expected)
  })

  it('returns empty array if no lines have exactly 5 elements', () => {
    const input = '41 46 15 38\n24 28 36 46 37 37 37\n17 36 12 46'
    expect(parseDefaultFaces(input)).toEqual([])
  })
})

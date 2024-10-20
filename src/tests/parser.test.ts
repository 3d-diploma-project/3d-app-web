import { parseFaces, parseVertices } from '@/lib/parser'
import { describe, expect, it } from 'vitest'

describe('parseVertices', () => {
  it('parses valid input correctly', () => {
    const input = '1 10 20 30\n2 40 50 60\n3 70 80 90'
    const expected = [
      { index: 1, x: 10, y: 20, z: 30 },
      { index: 2, x: 40, y: 50, z: 60 },
      { index: 3, x: 70, y: 80, z: 90 }
    ]
    expect(parseVertices(input)).toEqual(expected)
  })

  it('should ignore lines with less than 4 elements', () => {
    const input = '1 10 20\n2 40 50 60\n3 70 80'
    const expected = [{ index: 2, x: 40, y: 50, z: 60 }]
    expect(parseVertices(input)).toEqual(expected)
  })

  it('handles empty input gracefully', () => {
    const input = ''
    expect(parseVertices(input)).toEqual([])
  })

  it('trims spaces and parses correctly', () => {
    const input = ' 1  10   20  30 \n   2 40 50 60   \n3  70  80  90  '
    const expected = [
      { index: 1, x: 10, y: 20, z: 30 },
      { index: 2, x: 40, y: 50, z: 60 },
      { index: 3, x: 70, y: 80, z: 90 }
    ]
    expect(parseVertices(input)).toEqual(expected)
  })

  it('parses negative numbers correctly', () => {
    const input = '1 -10 20 -30\n2 -40 -50 60'
    const expected = [
      { index: 1, x: -10, y: 20, z: -30 },
      { index: 2, x: -40, y: -50, z: 60 }
    ]
    expect(parseVertices(input)).toEqual(expected)
  })

  it('returns empty array if no lines have exactly 4 elements', () => {
    const input = '1 10 20\n2 40 50\n3 70 80'
    expect(parseVertices(input)).toEqual([])
  })
})

describe('parseFaces', () => {
  it('parses valid input correctly', () => {
    const input = '1 10 20 30 40\n2 50 60 70 80\n3 90 100 110 120'
    const expected = [
      { index: 1, vertex1: 10, vertex2: 20, vertex3: 30, vertex4: 40 },
      { index: 2, vertex1: 50, vertex2: 60, vertex3: 70, vertex4: 80 },
      { index: 3, vertex1: 90, vertex2: 100, vertex3: 110, vertex4: 120 }
    ]
    expect(parseFaces(input)).toEqual(expected)
  })

  it('ignores lines with less than 5 elements', () => {
    const input = '1 10 20 30\n2 50 60 70 80\n3 90 100'
    const expected = [{ index: 2, vertex1: 50, vertex2: 60, vertex3: 70, vertex4: 80 }]
    expect(parseFaces(input)).toEqual(expected)
  })

  it('handles empty input gracefully', () => {
    const input = ''
    expect(parseFaces(input)).toEqual([])
  })

  it('trims spaces and parses correctly', () => {
    const input = ' 1  10   20  30 40 \n   2 50 60 70  80   \n3  90  100  110  120  '
    const expected = [
      { index: 1, vertex1: 10, vertex2: 20, vertex3: 30, vertex4: 40 },
      { index: 2, vertex1: 50, vertex2: 60, vertex3: 70, vertex4: 80 },
      { index: 3, vertex1: 90, vertex2: 100, vertex3: 110, vertex4: 120 }
    ]
    expect(parseFaces(input)).toEqual(expected)
  })

  it('parses negative numbers correctly', () => {
    const input = '1 -10 20 -30 40\n2 -50 -60 70 80'
    const expected = [
      { index: 1, vertex1: -10, vertex2: 20, vertex3: -30, vertex4: 40 },
      { index: 2, vertex1: -50, vertex2: -60, vertex3: 70, vertex4: 80 }
    ]
    expect(parseFaces(input)).toEqual(expected)
  })

  it('returns empty array if no lines have exactly 5 elements', () => {
    const input = '1 10 20 30\n2 50 60 70\n3 90 100'
    expect(parseFaces(input)).toEqual([])
  })
})

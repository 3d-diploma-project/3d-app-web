import useConvertColor from '@/hooks/useConvertColor'
import { describe, expect, it } from 'vitest'

describe('color', () => {
  it('converts color to rgb', () => {
    const mockArray = [1, 0, 1]
    const expected = 'rgb(255, 0, 255)'
    expect(useConvertColor(mockArray)).toBe(expected)
  })
})

import NodeDisplay from '@/components/NodeDisplay'
import ReactThreeTestRenderer from '@react-three/test-renderer'
import { describe, it } from 'vitest'

const mockPos = new Float32Array([1.164824615, 0.25, 0.141412788])
const mockSize: number = 0.05

describe('NodeDisplay ', () => {
  it('should be rendered correcty', async () => {
    await ReactThreeTestRenderer.create(<NodeDisplay positions={mockPos} meshSize={mockSize} />)
  })

  it('position should be corrected type', () => {
    expectTypeOf(mockPos).toMatchTypeOf<Float32Array>()
  })

  it('size should be corrected type', () => {
    expectTypeOf(mockSize).toBeNumber()
  })
})

import NodeDisplay from '@/components/NodeDisplay'
import ReactThreeTestRenderer from '@react-three/test-renderer'
import { describe, it } from 'vitest'

const mockPos = new Float32Array([1.164824615, 0.25, 0.141412788])

describe('NodeDisplay ', () => {
  it('should be rendered correcty', async () => {
    await ReactThreeTestRenderer.create(<NodeDisplay positions={mockPos} />)
  })

  it('position should be corrected type', () => {
    expectTypeOf(mockPos).toMatchTypeOf<Float32Array>()
  })
})

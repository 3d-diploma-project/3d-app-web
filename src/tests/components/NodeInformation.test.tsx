import NodeInformation from '@/components/NodeInformation'
import { render } from '@testing-library/react'
import * as THREE from 'three'
import { describe } from 'vitest'

const mockId = 5
const mockPosition = new THREE.Vector3(0.5, 0.5, 0.5)
const mockScale = 0.4

describe('NodeInformation test', () => {
  it('shoulbe be rendered correctly', () => {
    render(<NodeInformation id={mockId} position={mockPosition} scale={mockScale} />)
  })
})

import NodeInformation from '@/components/NodeInformation'
import { Html } from '@react-three/drei'
import { FC, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

interface NodeType {
  positions: Float32Array
  meshSize: number
}

const NodeDisplay: FC<NodeType> = ({ positions, meshSize }) => {
  const [isClicked, setIsClicked] = useState<number | null>(null)
  const sphereRef = useRef<(THREE.Mesh | null)[]>([])

  const getScale = (size: number) => {
    const minMeshSize = 0.01
    const maxMeshSize = 1
    const minScale = 0.0005
    const maxScale = 0.03

    const normalizedSize = (size - minMeshSize) / (maxMeshSize - minMeshSize)
    return normalizedSize * (maxScale - minScale) + minScale
  }

  const indexedPositions = useMemo(() => {
    const points = []

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i]
      const y = positions[i + 1]
      const z = positions[i + 2]

      points.push({
        position: new THREE.Vector3(x, y, z),
        id: i,
        scale: getScale(meshSize)
      })
    }
    return points
  }, [positions, meshSize])

  const handleColorChange = (id: number) => {
    setIsClicked(id)
  }

  return (
    <>
      {indexedPositions.map((point, idx) => (
        <mesh
          position={point.position}
          key={point.id}
          scale={point.scale}
          onClick={() => handleColorChange(point.id)}
          ref={(child) => (sphereRef.current[idx] = child)}
        >
          <sphereGeometry />
          <meshBasicMaterial color="blue" />

          {isClicked === point.id && (
            <Html distanceFactor={6} center>
              <NodeInformation id={point.id} position={point.position} scale={point.scale} />
            </Html>
          )}
        </mesh>
      ))}
    </>
  )
}

export default NodeDisplay

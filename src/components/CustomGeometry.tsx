import { useAppSelector } from '@/hooks/use-redux'
import { Wireframe } from '@react-three/drei'
import { FC, useRef } from 'react'
import * as THREE from 'three'

import NodeDisplay from '@/components/NodeDisplay'
import useGenerateColor from '@/lib/useGenerateColor'
import { generateFaceIndexArray, generateVertexPositions } from '@/lib/utils'

const CustomGeometry: FC = () => {
  const vertices = useAppSelector((store) => store.model.vertices)
  const faces = useAppSelector((store) => store.model.faces)

  const { displayNodeIndices } = useAppSelector((store) => store.model)

  const meshRef = useRef<THREE.Mesh>(null)

  const size = meshRef.current
    ? new THREE.Box3().setFromObject(meshRef.current).getSize(new THREE.Vector3())
    : new THREE.Vector3(0, 0, 0)

  const position = generateVertexPositions(vertices)
  const indexArray = generateFaceIndexArray(faces)

  const { color, stressLoaded } = useGenerateColor()

  return (
    <>
      <mesh ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={position} itemSize={3} count={position.length / 3} />
          <bufferAttribute attach="index" array={indexArray} itemSize={1} count={indexArray.length} />
          <bufferAttribute attach="attributes-color" args={[color, 3]} />
        </bufferGeometry>

        <meshBasicMaterial vertexColors={stressLoaded} />

        <Wireframe thickness={0.01} stroke={'black'} />
      </mesh>

      {displayNodeIndices && <NodeDisplay positions={position} meshSize={size.y} />}
    </>
  )
}

export default CustomGeometry

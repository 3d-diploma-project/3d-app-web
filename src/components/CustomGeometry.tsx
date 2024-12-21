import { useAppSelector } from '@/hooks/use-redux'
import { Wireframe } from '@react-three/drei'
import { FC, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

import NodeDisplay from '@/components/NodeDisplay'
import { generateColorArray } from '@/lib/colorUtils.ts'
import { generateFaceIndexArray, generateVertexPositions } from '@/lib/utils'
import { ModelPhysicalQuantity } from '@/types/ModelPhysicalQuantity.ts'

const CustomGeometry: FC = () => {
  const vertices = useAppSelector((store) => store.model.vertices)
  const faces = useAppSelector((store) => store.model.faces)
  const stress: ModelPhysicalQuantity = useAppSelector((store) => store.model.stress)
  const stressLoaded = useAppSelector((store) => store.model.stressLoaded)

  const { displayNodeIndices } = useAppSelector((store) => store.model)

  const meshRef = useRef<THREE.Mesh>(null)

  const size = meshRef.current
    ? new THREE.Box3().setFromObject(meshRef.current).getSize(new THREE.Vector3())
    : new THREE.Vector3(0, 0, 0)

  const position = generateVertexPositions(vertices)
  const indexArray = generateFaceIndexArray(faces)
  const [color, setColor] = useState(new Float32Array())

  useEffect(() => {
    if (stressLoaded && stress) {
      setColor(generateColorArray(stress.values, stress.min, stress.max))
    }
  }, [stress, stressLoaded])

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

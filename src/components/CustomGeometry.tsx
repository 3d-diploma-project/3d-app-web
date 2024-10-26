import { useAppSelector } from '@/hooks/use-redux'
import { Center, Wireframe } from '@react-three/drei'
import { FC } from 'react'

import { generateFaceIndexArray, generateVertexPositions } from '@/lib/utils'

const CustomGeometry: FC = () => {
  const vertices = useAppSelector((store) => store.model.vertices)
  const faces = useAppSelector((store) => store.model.faces)

  const position = generateVertexPositions(vertices)
  const indexArray = generateFaceIndexArray(faces)

  return (
    <Center>
      <mesh>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={position} itemSize={3} count={position.length / 3} />
          <bufferAttribute attach="index" array={indexArray} itemSize={1} count={indexArray.length} />
        </bufferGeometry>

        <meshBasicMaterial />

        <Wireframe thickness={0.01} stroke={'black'} />
      </mesh>
    </Center>
  )
}

export default CustomGeometry

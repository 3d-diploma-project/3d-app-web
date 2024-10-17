import { Center, Wireframe } from '@react-three/drei'
import { FC } from 'react'
import { useFace } from '../hooks/useIndice'
import { useVertex } from '../hooks/useVertex'
import { Face } from '../types/Index'
import { Vertex } from '../types/Vertex'

const CustomGeometry: FC = () => {
  const verticesData: Vertex[] = [
    { index: 1, x: 0, y: 1, z: 0 },
    { index: 2, x: 0, y: 0, z: 0 },
    { index: 3, x: 1, y: 1, z: 0 },
    { index: 4, x: 1, y: 0, z: 0 },
    { index: 5, x: 0.5, y: 0.5, z: 0 },
    { index: 6, x: 0, y: 0, z: 1 },
    { index: 7, x: 1, y: 0, z: 1 },
    { index: 8, x: 1, y: 1, z: 1 },
    { index: 9, x: 0, y: 1, z: 1 },
    { index: 10, x: 0.5, y: 0.5, z: 1 },
    { index: 11, x: 0.5, y: 0, z: 0.5 },
    { index: 12, x: 0.5, y: 1, z: 0.5 },
    { index: 13, x: 0, y: 0.5, z: 0.5 },
    { index: 14, x: 1, y: 0.5, z: 0.5 },
    { index: 15, x: 0.499983877, y: 0.499983877, z: 0.499983877 }
  ]

  const facesData: Face[] = [
    { index: 1, vertex1: 12, vertex2: 14, vertex3: 10, vertex4: 15 },
    { index: 2, vertex1: 12, vertex2: 14, vertex3: 5, vertex4: 3 },
    { index: 3, vertex1: 11, vertex2: 14, vertex3: 10, vertex4: 7 },
    { index: 4, vertex1: 12, vertex2: 9, vertex3: 1, vertex4: 13 },
    { index: 5, vertex1: 14, vertex2: 7, vertex3: 8, vertex4: 10 },
    { index: 6, vertex1: 9, vertex2: 10, vertex3: 13, vertex4: 12 },
    { index: 7, vertex1: 12, vertex2: 8, vertex3: 9, vertex4: 10 },
    { index: 8, vertex1: 14, vertex2: 3, vertex3: 4, vertex4: 5 },
    { index: 9, vertex1: 12, vertex2: 1, vertex3: 3, vertex4: 5 },
    { index: 10, vertex1: 4, vertex2: 5, vertex3: 11, vertex4: 14 },
    { index: 11, vertex1: 6, vertex2: 9, vertex3: 10, vertex4: 13 },
    { index: 12, vertex1: 15, vertex2: 5, vertex3: 11, vertex4: 13 },
    { index: 13, vertex1: 12, vertex2: 5, vertex3: 15, vertex4: 1 },
    { index: 14, vertex1: 1, vertex2: 2, vertex3: 5, vertex4: 13 },
    { index: 15, vertex1: 13, vertex2: 10, vertex3: 11, vertex4: 15 },
    { index: 16, vertex1: 13, vertex2: 5, vertex3: 11, vertex4: 2 },
    { index: 17, vertex1: 8, vertex2: 14, vertex3: 10, vertex4: 12 },
    { index: 18, vertex1: 14, vertex2: 5, vertex3: 11, vertex4: 15 },
    { index: 19, vertex1: 14, vertex2: 4, vertex3: 7, vertex4: 11 },
    { index: 20, vertex1: 1, vertex2: 13, vertex3: 15, vertex4: 12 },
    { index: 21, vertex1: 8, vertex2: 12, vertex3: 3, vertex4: 14 },
    { index: 22, vertex1: 1, vertex2: 5, vertex3: 15, vertex4: 13 },
    { index: 23, vertex1: 15, vertex2: 14, vertex3: 5, vertex4: 12 },
    { index: 24, vertex1: 7, vertex2: 6, vertex3: 10, vertex4: 11 },
    { index: 25, vertex1: 15, vertex2: 14, vertex3: 10, vertex4: 11 },
    { index: 26, vertex1: 6, vertex2: 10, vertex3: 11, vertex4: 13 },
    { index: 27, vertex1: 12, vertex2: 10, vertex3: 13, vertex4: 15 },
    { index: 28, vertex1: 2, vertex2: 4, vertex3: 5, vertex4: 11 },
    { index: 29, vertex1: 6, vertex2: 11, vertex3: 2, vertex4: 13 }
  ]

  const position = useVertex(verticesData)
  const index = useFace(facesData)

  return (
    <Center>
      <mesh>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={position} itemSize={3} count={position.length / 3} />
          <bufferAttribute attach="index" array={index} itemSize={1} count={index.length} />
        </bufferGeometry>

        <meshBasicMaterial />

        <Wireframe thickness={0.01} stroke={'black'} />
        {/* <Helper type={VertexNormalsHelper} args={[1, 0xff0000]} /> */}
      </mesh>
    </Center>
  )
}

export default CustomGeometry

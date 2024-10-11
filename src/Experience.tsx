import { Canvas } from '@react-three/fiber'
import StandartCube from './StandartCube'

const Experience = () => {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 10000,
        position: [-4, 3, 6]
      }}
    >
      <StandartCube />
    </Canvas>
  )
}

export default Experience

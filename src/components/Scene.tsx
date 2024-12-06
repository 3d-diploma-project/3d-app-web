import { Center, GizmoHelper, GizmoViewport, OrbitControls } from '@react-three/drei'
import CustomGeometry from './CustomGeometry'

const Scene = () => {
  return (
    <>
      <OrbitControls enablePan={true} />

      <Center>
        <CustomGeometry />
      </Center>

      <GizmoHelper alignment="bottom-center" margin={[80, 80]}>
        <GizmoViewport axisColors={['red', '#94D82D', 'blue']} labelColor="black" />
      </GizmoHelper>
    </>
  )
}

export default Scene

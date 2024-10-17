import { GizmoHelper, GizmoViewport, Html, MeshReflectorMaterial, OrbitControls } from '@react-three/drei'
import React, { useContext } from 'react'
import * as THREE from 'three'
import CustomGeometry from './CustomGeometry'
import AppButton from './AppButton'

const Scene = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.7}/>
      <CustomGeometry />
      <GizmoHelper
        alignment="bottom-center"
        margin={[80, 80]}
      >
        <GizmoViewport axisColors={['red', '#94D82D', 'blue']} labelColor="black" />

      </GizmoHelper>
      
    </>
  )
}

export default Scene

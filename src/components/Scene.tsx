import { Html, MeshReflectorMaterial, OrbitControls } from '@react-three/drei'
import React from 'react'
import * as THREE from 'three'
import CustomGeometry from './CustomGeometry'
import AppButton from './AppButton'

const Scene = () => {
  return (
    <>
      <OrbitControls />
      <directionalLight position={[0, 15, 0]} intensity={1.5} />
      <CustomGeometry/>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeGeometry args={[550, 550]} />
        <MeshReflectorMaterial
          mirror={0}
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
          side={THREE.DoubleSide}
        />
          </mesh>
          
    </>
  )
}

export default Scene
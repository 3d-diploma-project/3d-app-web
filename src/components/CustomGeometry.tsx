import React from 'react'
import { useVertex } from '../hooks/useVertex'
import * as THREE from 'three'
import { useIndice } from '../hooks/useIndice'

const CustomGeometry = () => {
  const positions = useVertex()
  const indices = useIndice()
  return (
    <mesh>
      {/* <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={positions.length / 3} itemSize={3} />
        <bufferAttribute  array={indices} count={indices.length} itemSize={1}/>
      </bufferGeometry> */}
      <boxGeometry/>
      <meshBasicMaterial side={THREE.DoubleSide} />
    </mesh>
  )
}

export default CustomGeometry

import { Html } from '@react-three/drei'
import { FC } from 'react'
import * as THREE from 'three'

interface NodeType {
  position: Float32Array
}

const NodeDisplay: FC<NodeType> = ({ position }) => {
  const indexPositions = []

  for (let i = 0; i < position.length; i += 3) {
    const x = position[i]
    const y = position[i + 1]
    const z = position[i + 2]
    indexPositions.push(new THREE.Vector3(x, y, z))
  }

  return (
    <>
      {indexPositions.map((pos, idx) => (
        <mesh key={idx} position={pos} scale={0.005}>
          <boxGeometry />
          <meshBasicMaterial color="red" />
          <Html distanceFactor={6} center className="group -space-x-0.5 -space-y-2">
            <div className="peer relative size-1 select-none rounded-full bg-black bg-opacity-30 text-center text-[2px] leading-[4px] text-white">
              {idx}
            </div>
            <div className="absolute flex h-2 max-h-1 w-4 max-w-2 select-none flex-col gap-[0.5px] rounded-[1px] bg-black/50 text-center text-[0.5px] font-bold text-white opacity-0 group-hover:opacity-100">
              <div>X: {pos.x}</div>
              <div>Y: {pos.y}</div>
              <div>Z: {pos.z}</div>
            </div>
          </Html>
        </mesh>
      ))}
    </>
  )
}

export default NodeDisplay

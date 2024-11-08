import { Html } from '@react-three/drei'
import { FC, useMemo } from 'react'
import * as THREE from 'three'

interface NodeType {
  positions: Float32Array
}

const NodeDisplay: FC<NodeType> = ({ positions }) => {
  const indexedPositions = useMemo(() => {
    const points = []
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i]
      const y = positions[i + 1]
      const z = positions[i + 2]
      points.push({
        position: new THREE.Vector3(x, y, z)
      })
    }
    return points
  }, [positions])

  return (
    <>
      {indexedPositions.map((point, idx) => (
        <mesh key={idx} scale={0.005} position={point.position}>
          <sphereGeometry />
          <meshBasicMaterial color="blue" />
          <Html distanceFactor={6} center className="group -space-x-0.5 -space-y-2">
            <div className="peer relative size-1 select-none rounded-full bg-black bg-opacity-30 text-center text-[2px] leading-[4px] text-white">
              {idx}
            </div>

            <div className="absolute flex h-2 max-h-1 w-4 max-w-2 select-none flex-col gap-[0.5px] rounded-[1px] bg-black/50 text-center text-[0.5px] font-bold text-white opacity-0 group-hover:opacity-100">
              <div>X: {point.position.x}</div>
              <div>Y: {point.position.y}</div>
              <div>Z: {point.position.z}</div>
            </div>
          </Html>
        </mesh>
      ))}
    </>
  )
}

export default NodeDisplay

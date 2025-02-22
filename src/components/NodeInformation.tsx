import { FC } from 'react'
import * as THREE from 'three'

interface NodeInformationProps {
  id: number
  position: THREE.Vector3
  scale: number
}

const NodeInformation: FC<NodeInformationProps> = ({ id, position, scale }) => {
  return (
    <div className="group -space-x-0.5 -space-y-2" style={{ transform: `scale(${scale * 100})` }}>
      <div className="peer relative size-1 select-none rounded-full bg-black bg-opacity-30 text-center text-[2px] leading-[4px] text-white">
        {id}
      </div>

      <div className="absolute flex h-2 max-h-1 w-4 max-w-2 select-none items-center justify-center gap-[0.5px] rounded-[1px] bg-black/50 text-center text-[1px] font-bold text-white group-hover:opacity-100">
        <div>X: {position.x.toFixed(1)}</div>
        <div>Y: {position.y.toFixed(1)}</div>
        <div>Z: {position.z.toFixed(1)}</div>
      </div>
    </div>
  )
}

export default NodeInformation

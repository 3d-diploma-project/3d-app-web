import { useThree } from '@react-three/fiber'
import { FC, useEffect } from 'react'
import { Vector3 } from 'three'
import { cameraType } from './Experience'

interface UpdaterProps {
  cameraPosition: cameraType
}

const CameraUpdater: FC<UpdaterProps> = ({ cameraPosition }) => {
  const { camera } = useThree()

  useEffect(() => {
    if (camera) {
      camera.position.set(...cameraPosition)
      camera.lookAt(new Vector3(0, 0, 0))
      camera.updateProjectionMatrix()
    }
  }, [cameraPosition])

  return null
}

export default CameraUpdater

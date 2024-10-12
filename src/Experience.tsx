import { Canvas } from '@react-three/fiber'
import StandartCube from './StandartCube'
import Scene from './components/Scene'
import { Html } from '@react-three/drei'
import AppButton from './components/AppButton'
import { useEffect, useRef, useState } from 'react'
import LoadWindow from './components/LoadWindow'
import cn from './utils/cn'

const Experience = () => {
  const folderButton = useRef(null)
  const [opened, setOpened] = useState(false)
  const cameraConfig = {
    fov: 45,
    near: 0.1,
    far: 10000,
    position: [-6, 85, 10]
  }
  const windowRef = useRef<HTMLDivElement>(null)

  const toggleWindow = () => {
    setOpened(!opened)
  }

  const loadWIndow = opened ? <LoadWindow state={opened} ref={windowRef} /> : null

  useEffect(() => {
    const onCLick = (e: MouseEvent) => {
      if (windowRef.current == null) return

      if (!windowRef.current.contains(e.target as Node) && e.target !== folderButton.current) {
        setOpened(false)
      }
    }

    document.addEventListener('mousedown', onCLick)
    return () => {
      document.removeEventListener('mousedown', onCLick)
    }
  }, [])
  return (
    <>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 10000,
          position: [-6, 85, 10]
        }}
      >
        <fog attach="fog" args={['#1B1C1D', 70, 170]} />
        <Scene />
      </Canvas>

      <button
        ref={folderButton}
        onClick={toggleWindow}
        className={cn(
          'hover: rounded-md bg-[#1E0094] px-2 py-1 hover:bg-[#1e0094af]',
          'fixed bottom-10 right-10 bg-gray-500'
        )}
      >
        📂
      </button>
      {loadWIndow}
    </>
  )
}

export default Experience

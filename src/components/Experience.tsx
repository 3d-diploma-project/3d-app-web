import { useEffect, useRef, useState } from 'react'

import LoadWindow from '@/components/LoadWindow'
import Scene from '@/components/Scene'
import { Canvas } from '@react-three/fiber'

const Experience = () => {
  const folderButton = useRef(null)
  const [opened, setOpened] = useState(false)

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
          position: [3, 3, 3]
        }}
      >
        <Scene />
      </Canvas>

      <button
        ref={folderButton}
        onClick={toggleWindow}
        className="fixed bottom-10 right-10 rounded-md bg-app-blue px-2 py-1 hover:bg-button-hover"
      >
        📂
      </button>
      {loadWIndow}
    </>
  )
}

export default Experience

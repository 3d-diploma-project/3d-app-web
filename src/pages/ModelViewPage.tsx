import { useState } from 'react'

import FilesUploader from '@/components/FilesUploader'
import Scene from '@/components/Scene'
import { useAppDispatch, useAppSelector } from '@/hooks/use-redux'
import { setFaces, setReady, setVertices } from '@/redux/slices/modelSlice'
import { Face } from '@/types/Face'
import { Vertex } from '@/types/Vertex'
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export type cameraType = [number, number, number]

const ModelViewPage = () => {
  const { isReady, facesFileName, verticesFileName, faces, vertices } = useAppSelector((store) => store.model)
  const [filesUploaderOpen, setFilesUploaderOpen] = useState(!isReady)
  const dispatch = useAppDispatch()

  const onFacesLoad = (faces: Face[], fileName: string) => {
    dispatch(
      setFaces({
        faces,
        fileName
      })
    )
  }

  const onVerticesLoad = (vertices: Vertex[], fileName: string) => {
    dispatch(
      setVertices({
        vertices,
        fileName
      })
    )
  }

  const closeModal = () => {
    dispatch(setReady(faces.length > 0 && vertices.length > 0))
    setFilesUploaderOpen(false)
  }

  const [cameraPosition] = useState<cameraType>([3, 3, 3])

  const cameraProps = {
    fov: 45,
    near: 0.001,
    far: 10000,
    position: cameraPosition
  }

  return (
    <>
      {isReady && (
        <div data-testid="experience">
          <Canvas>
            <PerspectiveCamera {...cameraProps} makeDefault />
            <Scene />
          </Canvas>
        </div>
      )}
      {filesUploaderOpen && (
        <FilesUploader
          verticesFileName={verticesFileName}
          facesFileName={facesFileName}
          disableCreateModelButton={isReady}
          closeModal={closeModal}
          onFacesLoad={onFacesLoad}
          onVerticesLoad={onVerticesLoad}
          onCreateModelClick={closeModal}
        />
      )}
    </>
  )
}

export default ModelViewPage

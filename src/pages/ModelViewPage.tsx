import { useState } from 'react'

import Experience from '@/components/Experience'
import FilesUploader from '@/components/FilesUploader'
import { useAppDispatch, useAppSelector } from '@/hooks/use-redux'
import { setFaces, setReady, setVertices } from '@/redux/slices/modelSlice'
import { Face } from '@/types/Face'
import { Vertex } from '@/types/Vertex'

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

  return (
    <>
      {isReady && (
        <div data-testid="experience">
          <Experience />
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

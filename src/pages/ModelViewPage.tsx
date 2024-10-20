import { useState } from 'react'

import Experience from '@/components/Experience'
import FilesUploader from '@/components/FilesUploader'
import { useAppDispatch, useAppSelector } from '@/hooks/use-redux'
import { setFaces, setVertices } from '@/redux/slices/modelSlice'
import { Face } from '@/types/Face'
import { Vertex } from '@/types/Vertex'

const ModelViewPage = () => {
  const { isEmpty, facesFileName, verticesFileName } = useAppSelector((store) => store.model)
  const [filesUploaderOpen, setFilesUploaderOpen] = useState(isEmpty)
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
    setFilesUploaderOpen(false)
  }

  if (!filesUploaderOpen) {
    return <Experience />
  }

  return (
    <>
      {filesUploaderOpen && (
        <FilesUploader
          verticesFileName={verticesFileName}
          facesFileName={facesFileName}
          disableCreateModelButton={isEmpty}
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

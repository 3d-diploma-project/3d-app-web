import { useState } from 'react'
import DragAndDrop from './DragAndDrop'
import { Button } from './ui/button'
import OutsideClickHandler from './OutsideClickHandler'

interface FilesUploaderProps {
  defaultOpen?: boolean
}

const FilesUploader = ({ defaultOpen = false }: FilesUploaderProps) => {
  const [open, setOpen] = useState(defaultOpen)

  const onLoadFilesClick = () => {
    setOpen(true)
  }

  const outsideClickHandler = () => {
    setOpen(false)
  }

  const onIndicesLoad = (files: File[]) => {
    console.log(files[0].name)
  }

  const onVerticesLoad = (files: File[]) => {
    console.log(files[0].name)
  }

  const onCreateModelClick = () => {
    console.log('onCreateModelClick')
  }

  if (!open) return <Button onClick={onLoadFilesClick}>Load files</Button>

  return (
    <div
      data-testid="wrapper"
      className="absolute left-0 top-0 flex size-96 h-dvh w-dvw items-center justify-center bg-black/50 p-5 md:p-10"
    >
      <OutsideClickHandler callback={outsideClickHandler}>
        <div className="grid aspect-video max-w-7xl grid-rows-[1fr,auto] gap-5 rounded-3xl bg-white p-5 md:gap-10 md:p-10">
          <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-10">
            <DragAndDrop
              onFilesLoad={onVerticesLoad}
              title="Vertices file"
              className="w-full max-w-80 p-5 md:aspect-square"
            />
            <DragAndDrop
              onFilesLoad={onIndicesLoad}
              title="Indices file"
              className="w-full max-w-80 p-5 md:aspect-square"
            />
          </div>
          <div className="flex items-center justify-end">
            <Button onClick={onCreateModelClick}>Create Model</Button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  )
}

export default FilesUploader

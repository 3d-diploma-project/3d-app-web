import { useState } from 'react'
import DragAndDrop from './DragAndDrop'
import { Button } from './ui/button'
import OutsideClickHandler from './OutsideClickHandler'

const FilesUploader = () => {
  const [open, setOpen] = useState(false)

  const onLoadFilesClick = () => {
    setOpen(true)
  }

  const outsideClickHandler = () => {
    setOpen(false)
  }

  const onFileLoad = (files: File[]) => {
    console.log(files)
  }

  if (!open) return <Button onClick={onLoadFilesClick}>Load files</Button>

  return (
    <div className="absolute left-0 top-0 flex size-96 h-dvh w-dvw items-center justify-center bg-black/50 p-5 md:p-10">
      <OutsideClickHandler callback={outsideClickHandler}>
        <div className="grid aspect-video max-w-7xl grid-rows-[1fr,auto] gap-5 rounded-3xl bg-white p-5 md:gap-10 md:p-10">
          <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-10">
            <DragAndDrop
              onFilesLoad={onFileLoad}
              title="Файл з координатами вузлів"
              className="w-full max-w-80 p-5 md:aspect-square"
            />
            <DragAndDrop
              onFilesLoad={onFileLoad}
              title="Файл з індексами елементів"
              className="w-full max-w-80 p-5 md:aspect-square"
            />
          </div>
          <div className="flex items-center justify-end">
            <Button>Створити модель</Button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  )
}

export default FilesUploader

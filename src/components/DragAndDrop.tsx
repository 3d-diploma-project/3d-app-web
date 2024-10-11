import { ChangeEvent, DragEvent, MouseEvent, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import cn from '../utils/cn'
import AppButton from './AppButton'

interface DragAndDropProps {
  className?: string
  accept?: string
  onFilesLoad: (files: File[]) => void
}

const filterByType = (type: string, files: File[]) => files.filter((file) => file.type === type)

const DragAndDrop = ({ onFilesLoad, accept, className = '' }: DragAndDropProps) => {
  const { t } = useTranslation()
  const [drag, setDrag] = useState(false)
  const fileInput = useRef<HTMLInputElement>(null)

  const onBrowseButtonClick = (e: MouseEvent) => {
    e.preventDefault()
    fileInput.current?.click()
  }

  const onDragOverHandler = (e: DragEvent<HTMLFormElement>) => {
    e.preventDefault()
    setDrag(true)
  }

  const onDragLeaveHandler = (e: DragEvent<HTMLFormElement>) => {
    e.preventDefault()
    setDrag(false)
  }

  const onDropHandler = (e: DragEvent<HTMLFormElement>) => {
    e.preventDefault()
    setDrag(false)
    if (!e.dataTransfer.files) return

    const files = [...e.dataTransfer.files]
    const filtered = accept ? filterByType(accept, files) : files
    onFilesLoad(filtered)
  }

  const onFilesLoadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return

    const files = [...e.target.files]
    const filtered = accept ? filterByType(accept, files) : files
    onFilesLoad(filtered)
  }

  return (
    <form
      onDragOver={onDragOverHandler}
      onDragStart={onDragOverHandler}
      onDragLeave={onDragLeaveHandler}
      onDrop={onDropHandler}
      className={cn(
        'flex h-full w-full select-none flex-col items-center justify-center gap-2 rounded-md border-2 border-white',
        { 'border-dashed': drag },
        className
      )}
    >
      <input accept={accept} ref={fileInput} type="file" hidden onChange={onFilesLoadHandler} multiple />
      <AppButton onClick={onBrowseButtonClick} className="text-2xl">
        {t('dragAndDrop.browseButtonTitle')}
      </AppButton>
      <p className="text-xl">{t('dragAndDrop.orDragFileHere')}</p>
    </form>
  )
}

export default DragAndDrop

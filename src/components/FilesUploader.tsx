import { useTranslation } from 'react-i18next'

import DragAndDrop from '@/components/DragAndDrop'
import OutsideClickHandler from '@/components/OutsideClickHandler'
import { Button } from '@/components/ui/button'
import { parseFaces, parseVertices } from '@/lib/parser'
import { Face } from '@/types/Face'
import { Vertex } from '@/types/Vertex'

interface FilesUploaderProps {
  verticesFileName: string
  facesFileName: string
  disableCreateModelButton: boolean
  closeModal: () => void
  onFacesLoad: (faces: Face[], fileName: string) => void
  onVerticesLoad: (vertices: Vertex[], fileName: string) => void
  onCreateModelClick: () => void
}

const FilesUploader = ({
  verticesFileName,
  facesFileName,
  disableCreateModelButton,
  closeModal,
  onFacesLoad,
  onVerticesLoad,
  onCreateModelClick
}: FilesUploaderProps) => {
  const { t } = useTranslation()

  const verticesHint = verticesFileName === '' ? t('filesUploader.hint') : verticesFileName
  const facesHint = facesFileName === '' ? t('filesUploader.hint') : facesFileName

  const outsideClickHandler = () => {
    closeModal()
  }

  async function parseText<T>(file: File, parser: (input: string) => T) {
    const input = await file.text()
    return parser(input)
  }

  const onFacesLoadHandler = async (files: File[]) => {
    const file = files[0]
    const faces = await parseText(files[0], parseFaces)
    onFacesLoad(faces, file.name)
  }

  const onVerticesLoadHandler = async (files: File[]) => {
    const file = files[0]
    const vertices = await parseText(file, parseVertices)
    onVerticesLoad(vertices, file.name)
  }

  return (
    <div
      data-testid="wrapper"
      className="absolute left-0 top-0 z-50 flex size-96 h-dvh w-dvw items-center justify-center bg-black/50 p-5 md:p-10"
    >
      <OutsideClickHandler callback={outsideClickHandler}>
        <div className="grid aspect-video max-w-7xl grid-rows-[1fr,auto] gap-5 rounded-3xl bg-white p-5 md:gap-10 md:p-10">
          <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-10">
            <DragAndDrop
              hint={verticesHint}
              onFilesLoad={onVerticesLoadHandler}
              title={t('filesUploader.verticesFile')}
              className="aspect-square w-64 p-5"
            />
            <DragAndDrop
              hint={facesHint}
              onFilesLoad={onFacesLoadHandler}
              title={t('filesUploader.facesFile')}
              className="aspect-square w-64 p-5"
            />
          </div>
          <div className="flex items-center justify-end">
            <Button disabled={disableCreateModelButton} onClick={onCreateModelClick}>
              {t('filesUploader.createModelButton')}
            </Button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  )
}

export default FilesUploader

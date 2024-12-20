import ColorPicker from '@/components/ColorPicker'
import FileUploadButton from '@/components/FileUploadButton.tsx'
import SwitchWithTitle from '@/components/SwitchWithTitle'
import TitleWithCoordinates from '@/components/TitleWithCoodinates'
import { useAppDispatch, useAppSelector } from '@/hooks/use-redux.ts'
import { parseDefaultPhysicalQuantity } from '@/lib/parser.ts'
import { setDisplayNodeIndices, setStress } from '@/redux/slices/modelSlice.ts'

const Toolbar = () => {
  const dispatch = useAppDispatch()
  const { displayNodeIndices } = useAppSelector((store) => store.model)

  const loadStress = async (file: File) => {
    const input = await file.text()
    const stress = parseDefaultPhysicalQuantity(input)

    dispatch(setStress({ stress, fileName: file.name }))
  }

  return (
    <div className="absolute right-14 z-10 flex max-h-full select-none flex-col gap-3 overflow-y-auto rounded-3xl p-3 py-10 shadow-md backdrop-blur-sm">
      <TitleWithCoordinates title="Координати" />
      <TitleWithCoordinates title="Обертання" />

      <ColorPicker title="Колір фону" />
      <ColorPicker title="Колір моделі" />
      <ColorPicker title="Колір вузлів" />

      <SwitchWithTitle label="Вузли" id="faces" />
      <SwitchWithTitle
        label="Номери вузлів"
        id="face-numbers"
        onClick={() => dispatch(setDisplayNodeIndices(!displayNodeIndices))}
      />
      <SwitchWithTitle label="Легенда" id="legend" />

      <FileUploadButton title="Напруження у вузлах" buttonText="Завантажити файл" onFileSelect={loadStress} />
      <FileUploadButton title="Переміщення у вузлах" buttonText="Завантажити файл" />
      <FileUploadButton variant="ghost" title="Прикладені сили" buttonText="file.txt" />
      <FileUploadButton buttonText="Завантажити файл" />
      <FileUploadButton title="Закріплені вузли" buttonText="Завантажити файл" />
    </div>
  )
}

export default Toolbar

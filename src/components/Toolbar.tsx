import ButtonWithTitle from '@/components/ButtonWithTitle'
import ColorPicker from '@/components/ColorPicker'
import TitleWithCoodinates from '@/components/TitleWithCoodinates'

const Toolbar = () => {
  return (
    <div className="absolute right-14 z-10 flex select-none flex-col gap-3 rounded-3xl p-3 py-10 shadow-md backdrop-blur-sm">
      <TitleWithCoodinates title="Координати" />
      <TitleWithCoodinates title="Обертання" />
      <ColorPicker title="Колір фону" />
      <ColorPicker title="Колір моделі" />
      <ColorPicker title="Колір вузлів" />
      <ButtonWithTitle title="Напруження у вузлах" buttonText="Завантажити файл" />
      <ButtonWithTitle title="Переміщення у вузлах" buttonText="Завантажити файл" />
      <ButtonWithTitle variant="ghost" title="Прикладені сили" buttonText="file.txt" />
      <ButtonWithTitle buttonText="Завантажити файл" />
      <ButtonWithTitle title="Закріплені вузли" buttonText="Завантажити файл" />
    </div>
  )
}

export default Toolbar

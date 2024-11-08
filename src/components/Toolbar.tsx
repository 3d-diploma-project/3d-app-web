import ButtonWithTitle from '@/components/ButtonWithTitle'
import ColorPicker from '@/components/ColorPicker'
import SwitchWithTitle from '@/components/SwitchWithTitle'
import TitleWithCoodinates from '@/components/TitleWithCoodinates'

const Toolbar = () => {
  return (
    <div className="absolute right-14 z-10 flex max-h-full select-none flex-col gap-3 overflow-y-auto rounded-3xl p-3 py-10 shadow-md backdrop-blur-sm">
      <TitleWithCoodinates title="Координати" />
      <TitleWithCoodinates title="Обертання" />

      <ColorPicker title="Колір фону" />
      <ColorPicker title="Колір моделі" />
      <ColorPicker title="Колір вузлів" />

      <SwitchWithTitle label="Вузли" id="faces" />
      <SwitchWithTitle label="Номери вузлів" id="face-numbers" />
      <SwitchWithTitle label="Легенда" id="legend" />

      <ButtonWithTitle title="Напруження у вузлах" buttonText="Завантажити файл" />
      <ButtonWithTitle title="Переміщення у вузлах" buttonText="Завантажити файл" />
      <ButtonWithTitle variant="ghost" title="Прикладені сили" buttonText="file.txt" />
      <ButtonWithTitle buttonText="Завантажити файл" />
      <ButtonWithTitle title="Закріплені вузли" buttonText="Завантажити файл" />
    </div>
  )
}

export default Toolbar

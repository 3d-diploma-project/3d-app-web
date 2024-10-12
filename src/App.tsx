import { Html } from '@react-three/drei'
import DragAndDrop from './components/DragAndDrop'
import Experience from './Experience'

const App = () => {
  return (
    <div className="flex h-dvh items-center justify-center gap-10 bg-[#1B1C1D] text-4xl text-[#FAFAFA]">
      <Experience />
    </div>
  )
}

export default App

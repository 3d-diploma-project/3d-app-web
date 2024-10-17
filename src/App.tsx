import { Html } from '@react-three/drei'
import DragAndDrop from './components/DragAndDrop'
import Experience from './Experience'
import LoadWindowProvider from './hooks/context'

const App = () => {
  return (
    <LoadWindowProvider>
      <div className="flex h-dvh items-center justify-center gap-10 bg-[#EAF4FF] text-4xl text-[#FAFAFA]">
        <Experience />
      </div>
    </LoadWindowProvider>
  )
}

export default App

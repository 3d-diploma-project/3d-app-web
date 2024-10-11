import DragAndDrop from './components/DragAndDrop'
import Experience from './Experience'

const App = () => {
  async function callback(files: File[]) {
    const text = await files[0].text()
    console.log(text)
  }
  return (
    <div className="flex h-dvh items-center justify-center gap-10 bg-[#030B22] text-4xl text-[#FAFAFA]">
      <div className="aspect-video w-full max-w-2xl">
        <DragAndDrop onFilesLoad={callback} accept="text/plain" />
      </div>
      {/* <Experience /> */}
    </div>
  )
}

export default App

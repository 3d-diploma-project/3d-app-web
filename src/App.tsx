import { useTranslation } from 'react-i18next'
import DragAndDrop from './components/DragAndDrop'
import { LanguageSelector } from './components/LanguageSelector'
import Experience from './Experience'

const App = () => {
  const { t } = useTranslation()
  async function callback(files: File[]) {
    const text = await files[0].text()
    console.log(text)
  }

  return (
    <div className="flex h-dvh items-center justify-center gap-10 text-4xl">
      {/* <div className="aspect-video w-full max-w-2xl">
        <DragAndDrop onFilesLoad={callback} accept="text/plain" />
      </div> */}
      <LanguageSelector />
      {/* <Experience /> */}
      <span className="w-20">{t('mainPage.title')}</span>
    </div>
  )
}

export default App

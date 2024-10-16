import { useTranslation } from 'react-i18next'
import { LanguageSelector } from './components/LanguageSelector'

const App = () => {
  const { t } = useTranslation()
  return (
    <div className="flex h-dvh items-center justify-center gap-10 text-4xl">
      <LanguageSelector />
      <span className="w-20">{t('mainPage.title')}</span>
    </div>
  )
}

export default App

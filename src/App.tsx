
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import MainPage from '@/pages/MainPage'
import Navbar from './components/Navbar'
import ModelViewPage from './pages/ModelViewPage'
import LoadWindowProvider from './hooks/context'

const App = () => {
  return (
    <Router>
    <LoadWindowProvider>
      <div className="grid h-dvh grid-rows-[auto,1fr] text-coal-black">
        <Navbar />
        <Routes>
          <Route path="/" index element={<MainPage />} />
          <Route path="/model" index element={<ModelViewPage />} />
    
        </Routes>
      </div>
    </LoadWindowProvider>
    </Router>

  )
}

export default App

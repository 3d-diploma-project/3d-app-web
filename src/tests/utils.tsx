import model from '@/redux/slices/modelSlice'
import { configureStore } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: { model }
})

export const renderWithProviders = (element: ReactNode) => {
  render(<Provider store={store}>{element}</Provider>)
}

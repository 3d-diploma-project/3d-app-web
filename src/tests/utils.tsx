import { store } from '@/redux/store'
import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'

export const renderWithProviders = (element: ReactNode) => {
  render(<Provider store={store}>{element}</Provider>)
}

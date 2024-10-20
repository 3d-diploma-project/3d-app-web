import ModelViewPage from '@/pages/ModelViewPage'
import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from './utils'

const mockCanvasContext = {
  fillStyle: ''
}

Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
  value: vi.fn(() => mockCanvasContext),
  writable: true
})

describe('ModelViewPage', () => {
  it('displays the button', () => {
    renderWithProviders(<ModelViewPage />)

    const button = screen.getByText(/filesUploader.createModelButton/i)

    expect(button).toBeInTheDocument()
  })
})

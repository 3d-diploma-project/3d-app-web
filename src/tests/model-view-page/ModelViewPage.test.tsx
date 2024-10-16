import { describe, expect, it } from 'vitest'

import ModelViewPage from '@/pages/ModelViewPage'
import { render, screen } from '@testing-library/react'

describe('MainPage', () => {
  it('displays the text', () => {
    render(<ModelViewPage />)
    const text = screen.getByText('Model View Page')

    expect(text).toBeInTheDocument()
  })
})

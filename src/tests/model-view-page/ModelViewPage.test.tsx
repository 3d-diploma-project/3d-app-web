import { describe, expect, it } from 'vitest'

import ModelViewPage from '@/pages/ModelViewPage'
import { render, screen } from '@testing-library/react'

describe('MainPage', () => {
  it('displays the button', () => {
    render(<ModelViewPage />)
    const button = screen.getByText('Load files')

    expect(button).toBeInTheDocument()
  })
})

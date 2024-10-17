import { describe, expect, it, vi } from 'vitest'

import MainPage from '@/pages/MainPage'
import { fireEvent, render, screen } from '@testing-library/react'

const navigateMock = vi.fn()

vi.mock('react-router-dom', () => ({
  useNavigate: () => navigateMock
}))

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: vi.fn()
    }
  })
}))

describe('MainPage', () => {
  it('displays headers and sub headers', () => {
    render(<MainPage />)
    const headerItems = [
      'mainPage.headerPart1',
      'mainPage.headerPart2',
      'mainPage.subHeader',
      'mainPage.programFeaturesHeader',
      'mainPage.programFeaturesSubHeader'
    ]

    for (const item of headerItems) {
      const founditem = screen.getByText(item)
      expect(founditem).toBeInTheDocument()
    }
  })

  it('navigates to /model on button click', () => {
    render(<MainPage />)

    const button = screen.getByText('mainPage.createModelButton')
    fireEvent.click(button)

    expect(navigateMock).toHaveBeenCalled()
  })
})

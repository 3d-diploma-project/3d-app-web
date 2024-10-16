import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import OutsideClickHandler from '@/components/OutsideClickHandler'

const callbackMock = vi.fn()

describe('OutsideClickHandler', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('should display child elements', () => {
    render(
      <OutsideClickHandler callback={callbackMock}>
        <div>childContent</div>
      </OutsideClickHandler>
    )

    const child = screen.getByText('childContent')
    expect(child).toBeInTheDocument()
  })

  it('should call callback when clicked outside', () => {
    render(
      <div>
        <OutsideClickHandler callback={callbackMock}>
          <div>childContent</div>
        </OutsideClickHandler>
        <div>outsideContent</div>
      </div>
    )

    const outsideContent = screen.getByText('outsideContent')
    fireEvent.mouseDown(outsideContent)

    expect(callbackMock).toHaveBeenCalled()
  })

  it('should not call callback when clicked inside', () => {
    const { getByText } = render(
      <OutsideClickHandler callback={callbackMock}>
        <div>childContent</div>
      </OutsideClickHandler>
    )
    const childContent = getByText('childContent')
    fireEvent.mouseDown(childContent)

    expect(callbackMock).not.toHaveBeenCalled()
  })

  // it('должен удалять обработчик событий при размонтировании', () => {
  //   const removeEventListenerSpy = vi.spyOn(document, 'removeEventListener')

  //   const { unmount } = render(
  //     <OutsideClickHandler callback={callbackMock}>
  //       <div>childContent</div>
  //     </OutsideClickHandler>
  //   )

  //   unmount()

  //   expect(removeEventListenerSpy).toHaveBeenCalledWith('mousedown', expect.any(Function))
  // })

  // it('должен обновлять callback при его изменении', () => {
  //   const { rerender } = render(
  //     <OutsideClickHandler callback={callbackMock}>
  //       <div>childContent</div>
  //     </OutsideClickHandler>
  //   )

  //   const newCallback = vi.fn()
  //   rerender(
  //     <OutsideClickHandler callback={newCallback}>
  //       <div>childContent</div>
  //     </OutsideClickHandler>
  //   )

  //   // Клик вне после обновления callback
  //   fireEvent.mouseDown(document)

  //   expect(newCallback).toHaveBeenCalledTimes(1)
  //   expect(callbackMock).not.toHaveBeenCalled()
  // })
})

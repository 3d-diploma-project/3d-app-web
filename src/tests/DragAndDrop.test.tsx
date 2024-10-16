import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import DragAndDrop from '@/components/DragAndDrop'

const onFilesLoadMock = vi.fn()
const mockTextFile = new File(['Hello, World!'], 'hello.txt', { type: 'text/plain' })
const mockImageFile = new File([], 'hello.png', { type: 'image/png' })

describe('DragAndDrop component', () => {
  beforeEach(() => {
    render(<DragAndDrop onFilesLoad={onFilesLoadMock} accept="text/plain" />)
  })

  afterEach(() => {
    onFilesLoadMock.mockReset()
  })

  it('should render button and label', () => {
    const button = screen.getByRole('button')
    const label = screen.getByText('dragAndDrop.hint')

    expect(button).toBeInTheDocument()
    expect(label).toBeInTheDocument()
  })

  it('triggers file input on browse button click', () => {
    const button = screen.getByRole('button')
    const fileInput = screen.getByTestId('file-input')

    const clickSpy = vi.spyOn(fileInput, 'click')

    fireEvent.click(button)
    expect(clickSpy).toHaveBeenCalled()
  })

  it('should trigger file input on browse button click', () => {
    const button = screen.getByRole('button')
    const fileInput = screen.getByTestId('file-input')

    const clickSpy = vi.spyOn(fileInput, 'click')

    fireEvent.click(button)
    expect(clickSpy).toHaveBeenCalled()
  })

  it('should change border on drag events', () => {
    const form = screen.getByTestId('drop-zone')

    fireEvent.dragOver(form)

    expect(form).toHaveClass('border-dashed')

    fireEvent.dragLeave(form)

    expect(form).not.toHaveClass('border-dashed')
  })

  it('should accept a text file when dragged and dropped', () => {
    const form = screen.getByTestId('drop-zone')

    fireEvent.drop(form, {
      dataTransfer: {
        files: [mockTextFile]
      }
    })

    expect(onFilesLoadMock).toHaveBeenCalledWith([mockTextFile])
  })

  it('should return if no files are dropped', () => {
    const form = screen.getByTestId('drop-zone')

    fireEvent.drop(form, {
      dataTransfer: {
        files: null
      }
    })

    expect(onFilesLoadMock).not.toHaveBeenCalled()
  })

  it('should accept a text file when selected', () => {
    const fileInput = screen.getByTestId('file-input')

    fireEvent.change(fileInput, {
      target: { files: [mockTextFile] }
    })

    expect(onFilesLoadMock).toHaveBeenCalledWith([mockTextFile])
  })

  it('should return if no files are selected', () => {
    const fileInput = screen.getByTestId('file-input')

    fireEvent.change(fileInput, {
      target: { files: [] }
    })

    expect(onFilesLoadMock).not.toHaveBeenCalled()
  })
})

describe('DragAndDrop component no accept provided', () => {
  it('just return files if no accept is provided', () => {
    render(<DragAndDrop onFilesLoad={onFilesLoadMock} accept={undefined} />)
    const fileInput = screen.getByTestId('file-input')

    fireEvent.change(fileInput, {
      target: { files: [mockImageFile, mockTextFile] }
    })

    expect(onFilesLoadMock).toHaveBeenCalledWith([mockImageFile, mockTextFile])
  })
})

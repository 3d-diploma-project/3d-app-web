import FilesUploader from '@/components/FilesUploader'
import { fireEvent, render, screen } from '@testing-library/react'

global.File = vi.fn().mockImplementation(() => ({
  text: Promise.resolve(vi.fn())
}))

const propsMock = {
  verticesFileName: 'vertices.txt',
  facesFileName: 'faces.txt',
  disableCreateModelButton: true,
  closeModal: vi.fn(),
  onFacesLoad: vi.fn(),
  onVerticesLoad: vi.fn(),
  onCreateModelClick: vi.fn()
}

const verticesFile = new File(['1 0 1 0'], 'vertices.txt', { type: 'text/plain' })
const facesFile = new File(['1 12 14 10 15'], 'faces.txt', { type: 'text/plain' })

describe('FilesUploader', () => {
  it('should call closeModal callback when clicked outside', () => {
    render(
      <div>
        <FilesUploader {...propsMock} />
        <div>outside</div>
      </div>
    )

    const outsideContent = screen.getByText('outside')
    fireEvent.mouseDown(outsideContent)

    expect(propsMock.closeModal).toHaveBeenCalled()
  })

  it('should render default hints if the fileName is not provided for vertices or faces', () => {
    const props = { ...propsMock, verticesFileName: '', facesFileName: '' }
    render(<FilesUploader {...props} />)

    const defaulHints = screen.getAllByText('filesUploader.hint')

    expect(defaulHints.length).toEqual(2)
  })

  it('should call onVerticesLoad when vertices file is loaded', async () => {
    render(<FilesUploader {...propsMock} />)
    const verticesDropZone = screen.getByText('filesUploader.verticesFile')

    fireEvent.drop(verticesDropZone, {
      dataTransfer: {
        files: [verticesFile]
      }
    })

    expect(propsMock.onVerticesLoad).toHaveBeenCalled()
  })

  it('should call onFacesLoad when faces file is loaded', () => {
    render(<FilesUploader {...propsMock} />)
    const facesDropZone = screen.getByText('filesUploader.facesFile')

    fireEvent.drop(facesDropZone, {
      dataTransfer: {
        files: [facesFile]
      }
    })

    expect(propsMock.onFacesLoad).toHaveBeenCalled()
  })
})

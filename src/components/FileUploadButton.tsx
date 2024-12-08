import { Button } from '@/components/ui/button'
import { useRef } from 'react'

interface ButtonWithTitleProps {
  title?: string
  buttonText: string
  variant?: 'default' | 'ghost'
  onFileSelect?: (file: File) => void
}

const FileUploadButton = ({ title, buttonText, onFileSelect, variant = 'default' }: ButtonWithTitleProps) => {
  const inputFile = useRef(null)

  const handleFileUpload = (e) => {
    const { files } = e.target
    if (files && files.length) {
      if (onFileSelect) {
        onFileSelect(files[0])
      }
    }
  }

  const onButtonClick = () => {
    inputFile.current.click()
  }

  return (
    <div className="space-y-1">
      <input style={{ display: 'none' }} ref={inputFile} onChange={handleFileUpload} type="file" />
      {title && <p className="font-semibold">{title}</p>}
      <Button variant={variant} onClick={onButtonClick} size="sm" className="w-full">
        {buttonText}
      </Button>
    </div>
  )
}

export default FileUploadButton

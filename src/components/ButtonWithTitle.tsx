import { Button } from '@/components/ui/button'

interface ButtonWithTitleProps {
  title?: string
  buttonText: string
  variant?: 'default' | 'ghost'
  onClick?: () => void
}

const ButtonWithTitle = ({ title, buttonText, onClick, variant = 'default' }: ButtonWithTitleProps) => {
  return (
    <div className="space-y-1">
      {title && <p className="font-semibold">{title}</p>}
      <Button variant={variant} onClick={onClick} size="sm" className="w-full">
        {buttonText}
      </Button>
    </div>
  )
}

export default ButtonWithTitle

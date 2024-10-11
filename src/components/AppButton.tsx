import { ButtonHTMLAttributes, ReactNode } from 'react'
import cn from '../utils/cn'

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

const AppButton = ({ children, className = '', ...props }: AppButtonProps) => {
  return (
    <button {...props} className={cn('hover: rounded-md bg-[#1E0094] hover:bg-[#1e0094af] px-2 py-1', className)}>
      {children}
    </button>
  )
}

export default AppButton

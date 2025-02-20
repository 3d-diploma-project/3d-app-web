import { Switch } from '@/components/ui/switch'

interface SwitchWithTitleProps extends React.ComponentPropsWithoutRef<typeof Switch> {
  label: string
}

const SwitchWithTitle = ({ label, ...props }: SwitchWithTitleProps) => {
  return (
    <div className="flex items-center">
      <label htmlFor={props.id} className="flex-1 cursor-pointer">
        {label}
      </label>
      <Switch id={props.id} {...props} />
    </div>
  )
}

export default SwitchWithTitle

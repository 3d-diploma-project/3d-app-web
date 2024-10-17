import DragAndDrop from './DragAndDrop'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { parseIndices, parseVertices } from '../utils/parser'

import { useWindowContext } from '../hooks/context'

interface WindowType {
  state: boolean
}

const LoadWindow = forwardRef<HTMLDivElement, WindowType>(({ state }, ref) => {
  const { setVertices, setIndices } = useWindowContext()
  async function callback(files: File[]) {
    const text = await files[0].text()

    setVertices(parseVertices(text))
    setIndices(parseIndices(text))

    console.log(parseVertices(text))
    console.log(parseIndices(text))
  }

  return (
    <div ref={ref} className={cn('fixed aspect-video w-full max-w-2xl', { hidden: !state })}>
      <DragAndDrop onFilesLoad={callback} accept="text/plain" />
    </div>
  )
})

export default LoadWindow

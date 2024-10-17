import { cn } from '@/lib/utils'
import { forwardRef } from 'react'
import { parseFaces, parseVertices } from '../utils/parser'
import DragAndDrop from './DragAndDrop'

import { useWindowContext } from '../hooks/context'

interface WindowType {
  state: boolean
}

const LoadWindow = forwardRef<HTMLDivElement, WindowType>(({ state }, ref) => {
  const { setVertices, setFaces } = useWindowContext()
  async function callback(files: File[]) {
    const text = await files[0].text()

    setVertices(parseVertices(text))
    setFaces(parseFaces(text))

    console.log(parseVertices(text))
    console.log(parseFaces(text))
  }

  return (
    <div ref={ref} className={cn('fixed aspect-video w-full max-w-2xl', { hidden: !state })}>
      <DragAndDrop onFilesLoad={callback} accept="text/plain" />
    </div>
  )
})

export default LoadWindow

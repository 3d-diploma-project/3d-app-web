import React, { FC } from 'react'
import DragAndDrop from './DragAndDrop'
import { forwardRef } from 'react'
import cn from '../utils/cn'
import { parseIndices, parseVertices } from '../utils/parser'

interface WindowType {
  state: boolean
}

const LoadWindow = forwardRef<HTMLDivElement, WindowType>(({ state }, ref) => {
  async function callback(files: File[]) {
    const text = await files[0].text()
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

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'
import { Face } from '../types/Face'
import { Vertex } from '../types/Vertex'

interface CustomGeometryProps {
  vertices: Vertex[]
  faces: Face[]
  setVertices: Dispatch<SetStateAction<Vertex[]>>
  setFaces: Dispatch<SetStateAction<Face[]>>
}

const LoadWindowContext = createContext<CustomGeometryProps | undefined>(undefined)

export function useWindowContext() {
  const context = useContext(LoadWindowContext)

  if (!context) {
    throw new Error('useWindowContext must be used with a LoadWindowContext')
  }

  const { vertices, faces, setVertices, setFaces } = context

  return { vertices, faces, setVertices, setFaces }
}

export default function LoadWindowProvider({ children }: { children: ReactNode }) {
  const [vertices, setVertices] = useState<Vertex[]>([])
  const [faces, setFaces] = useState<Face[]>([])

  return (
    <LoadWindowContext.Provider value={{ vertices, faces, setVertices, setFaces }}>
      {children}
    </LoadWindowContext.Provider>
  )
}

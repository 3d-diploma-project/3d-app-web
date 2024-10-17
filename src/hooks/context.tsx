import { createContext, ReactNode, useContext, useState, SetStateAction, Dispatch } from 'react'
import { Vertex } from '../types/Vertex'
import { Index } from '../types/Index'

interface CustomGeometryProps {
  vertices: Vertex[]
  indices: Index[]
  setVertices: Dispatch<SetStateAction<Vertex[]>>
  setIndices: Dispatch<SetStateAction<Index[]>>
}

const LoadWindowContext = createContext<CustomGeometryProps | undefined>(undefined)

export function useWindowContext() {
  const context = useContext(LoadWindowContext)

  if (!context) {
    throw new Error('useWindowContext must be used with a LoadWindowContext')
  }

  const { vertices, indices, setVertices, setIndices } = context

  return { vertices, indices, setVertices, setIndices }
}

export default function LoadWindowProvider({ children }: { children: ReactNode }) {
  const [vertices, setVertices] = useState<Vertex[]>([])
  const [indices, setIndices] = useState<Index[]>([])

  return (
    <LoadWindowContext.Provider value={{ vertices, indices, setVertices, setIndices }}>
      {children}
    </LoadWindowContext.Provider>
  )
}

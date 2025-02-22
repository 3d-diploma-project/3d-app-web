import { Face } from '@/types/Face'
import { ModelPhysicalQuantity } from '@/types/ModelPhysicalQuantity.ts'
import { Vertex } from '@/types/Vertex'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface ModelState {
  faces: Face[]
  vertices: Vertex[]
  isReady: boolean
  facesFileName: string
  verticesFileName: string
  facesLoaded: boolean
  verticesLoaded: boolean
  displayNodeIndices: boolean
  stress: ModelPhysicalQuantity | null
  stressLoaded: boolean
  stressFileName: string | null
}

export const initialState: ModelState = {
  faces: [],
  vertices: [],
  isReady: false,
  facesFileName: '',
  verticesFileName: '',
  facesLoaded: false,
  verticesLoaded: false,
  displayNodeIndices: false,
  stress: null,
  stressLoaded: false,
  stressFileName: null
}

export const modelSlice = createSlice({
  name: 'model',
  initialState,
  reducers: {
    setFaces: (state, action: PayloadAction<{ faces: Face[]; fileName: string }>) => {
      const { faces, fileName } = action.payload
      state.faces = faces
      state.facesFileName = fileName
      state.facesLoaded = true
    },
    setVertices: (state, action: PayloadAction<{ vertices: Vertex[]; fileName: string }>) => {
      const { vertices, fileName } = action.payload
      state.vertices = vertices
      state.verticesFileName = fileName
      state.verticesLoaded = true
    },
    setStress: (state, action: PayloadAction<{ stress: ModelPhysicalQuantity; fileName: string }>) => {
      const { stress, fileName } = action.payload
      state.stress = stress
      state.stressFileName = fileName
      state.stressLoaded = true
    },
    resetModel: () => initialState,
    setReady: (state, action: PayloadAction<boolean>) => {
      state.isReady = action.payload
    },
    setDisplayNodeIndices: (state, action: PayloadAction<boolean>) => {
      state.displayNodeIndices = action.payload
    }
  }
})

export const { setFaces, setVertices, resetModel, setReady, setDisplayNodeIndices, setStress } = modelSlice.actions

export default modelSlice.reducer

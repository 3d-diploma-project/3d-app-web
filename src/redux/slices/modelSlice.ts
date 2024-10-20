import { Face } from '@/types/Face'
import { Vertex } from '@/types/Vertex'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface ModelState {
  faces: Face[]
  vertices: Vertex[]
  isReady: boolean
  facesFileName: string
  verticesFileName: string
}

export const initialState: ModelState = {
  faces: [],
  vertices: [],
  isReady: false,
  facesFileName: '',
  verticesFileName: ''
}

export const modelSlice = createSlice({
  name: 'model',
  initialState,
  reducers: {
    setFaces: (state, action: PayloadAction<{ faces: Face[]; fileName: string }>) => {
      const { faces, fileName } = action.payload
      state.faces = faces
      state.facesFileName = fileName
    },
    setVertices: (state, action: PayloadAction<{ vertices: Vertex[]; fileName: string }>) => {
      const { vertices, fileName } = action.payload
      state.vertices = vertices
      state.verticesFileName = fileName
    },
    resetModel: () => initialState,
    setReady: (state, action: PayloadAction<boolean>) => {
      state.isReady = action.payload
    }
  }
})

export const { setFaces, setVertices, resetModel, setReady } = modelSlice.actions

export default modelSlice.reducer

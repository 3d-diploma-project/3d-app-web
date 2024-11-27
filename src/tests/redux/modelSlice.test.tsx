import reducer, {
  initialState,
  resetModel,
  setDisplayNodeIndices,
  setFaces,
  setReady,
  setVertices
} from '@/redux/slices/modelSlice'
import { describe, expect, it } from 'vitest'

const facesFileNameMock = 'faces.txt'
const verticesFileNameMock = 'vertices.txt'

const facesMock = [
  { index: 1, vertex1: 1, vertex2: 2, vertex3: 3, vertex4: 4 },
  { index: 2, vertex1: 5, vertex2: 6, vertex3: 7, vertex4: 8 }
]

const verticesMock = [
  { index: 1, x: 1, y: 2, z: 3 },
  { index: 2, x: 5, y: 6, z: 7 }
]

describe('modelSlice', () => {
  it('should set faces correctly with setFaces', () => {
    const action = setFaces({ faces: facesMock, fileName: facesFileNameMock })
    const state = reducer(initialState, action)

    expect(state.faces).toMatchObject(facesMock)
    expect(state.facesFileName).toEqual(facesFileNameMock)
  })

  it('should set vertices correctly with setVertices', () => {
    const action = setVertices({ vertices: verticesMock, fileName: verticesFileNameMock })
    const state = reducer(initialState, action)

    expect(state.vertices).toMatchObject(verticesMock)
    expect(state.verticesFileName).toEqual(verticesFileNameMock)
  })

  it('should reset model to the initial state with resetModel', () => {
    const action = resetModel()
    const state = reducer(initialState, action)

    expect(state).toMatchObject(initialState)
  })

  it('should set isReady correctly with setReady', () => {
    const action = setReady(true)
    const state = reducer(initialState, action)

    expect(state.isReady).toEqual(true)
  })

  it('should set displayNodeIndices correctly with setDisplayNodeIndices', () => {
    const action = setDisplayNodeIndices(true)
    const state = reducer(initialState, action)

    expect(state.displayNodeIndices).toEqual(true)
  })
})

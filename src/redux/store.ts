import { configureStore } from '@reduxjs/toolkit'
import legend from './slices/legendSlice'
import model from './slices/modelSlice'

export const store = configureStore({
  reducer: { model, legend }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

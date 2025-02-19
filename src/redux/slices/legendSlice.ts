import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface LegendState {
  min?: number | null
  max?: number | null
  isLoaded: boolean
}

export const initialState: LegendState = {
  min: null,
  max: null,
  isLoaded: false
}

export const legendSlice = createSlice({
  name: 'legend',
  initialState,
  reducers: {
    setLegend: (state, action: PayloadAction<{ min: number; max: number }>) => {
      state.isLoaded = action.payload.min !== undefined && action.payload.max !== undefined
      state.max = action.payload.max
      state.min = action.payload.min
    },
    resetLegend: () => initialState
  }
})

export const { setLegend, resetLegend } = legendSlice.actions

export default legendSlice.reducer

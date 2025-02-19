import { LegendType } from '@/types/Legend'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface LegendState {
  legend: LegendType[]
  min?: number
  max?: number
  isLoaded: boolean
}

export const initialState: LegendState = {
  legend: [],
  isLoaded: false,
  min: undefined,
  max: undefined
}

export const legendSlice = createSlice({
  name: 'legend',
  initialState,
  reducers: {
    setLegend: (state, action: PayloadAction<{ legend: LegendType[]; min: number; max: number }>) => {
      state.legend = action.payload.legend
      state.isLoaded =
        action.payload.legend.length > 0 && action.payload.min !== undefined && action.payload.max !== undefined
      state.max = action.payload.max
      state.min = action.payload.min
    },
    resetLegend: () => initialState
  }
})

export const { setLegend, resetLegend } = legendSlice.actions

export default legendSlice.reducer

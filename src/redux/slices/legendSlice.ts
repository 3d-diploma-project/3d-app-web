import { generateLegend } from '@/lib/colorUtils'
import { setStress } from '@/redux/slices/modelSlice'
import { LegendType } from '@/types/Legend'
import { ModelPhysicalQuantity } from '@/types/ModelPhysicalQuantity'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface LegendState {
  legend: LegendType[]
  min?: number | null
  max?: number | null
  isLoaded: boolean
}

export const initialState: LegendState = {
  legend: [],
  min: null,
  max: null,
  isLoaded: false
}

export const legendSlice = createSlice({
  name: 'legend',
  initialState,
  reducers: {
    setLegend: (state, action: PayloadAction<{ min: number; max: number }>) => {
      state.max = action.payload.max
      state.min = action.payload.min
      state.legend = generateLegend(state.min, state.max)
      state.isLoaded = true
    },
    resetLegend: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(
      setStress,
      (
        state,
        action: PayloadAction<{
          stress: ModelPhysicalQuantity
          fileName: string
        }>
      ) => {
        state.max = action.payload.stress.max
        state.min = action.payload.stress.min
        state.legend = generateLegend(state.min, state.max)
        state.isLoaded = true
      }
    )
  }
})

export const { setLegend } = legendSlice.actions

export default legendSlice.reducer

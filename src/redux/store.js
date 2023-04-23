import { configureStore } from '@reduxjs/toolkit'
import sliceReducer from './previewSlice.js'

export const store = configureStore({
  reducer: {
    previewSlice: sliceReducer
  },
})

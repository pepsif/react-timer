import { configureStore } from '@reduxjs/toolkit'
import stopwatchSlice from './slices/stopwatchSlice'
import timerSlice from './slices/timerSlice'

export const store = configureStore({
    reducer: {
        timer: timerSlice,
        stopwatch: stopwatchSlice
    },
  })


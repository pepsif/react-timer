import { configureStore } from '@reduxjs/toolkit';
import stopwatchSlice from './slices/stopwatchSlice';
import timerSlice from './slices/timerSlice.js';
import darkThemeSlice from './slices/darkThemeSlice';

export const store = configureStore({
    reducer: {
        timer: timerSlice,
        stopwatch: stopwatchSlice,
        darkTheme: darkThemeSlice
    },
  })


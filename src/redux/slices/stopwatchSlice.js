import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    stopwatchStarter: false,
    minute: 0,
    second: 0
  }

  export const stopwatchSlice = createSlice({
    name: 'stopwatch',
    initialState,
    reducers: {
        setStopwatchStarter: ( state ) => {
            state.stopwatchStarter = !state.stopwatchStarter
            
          },
        setStopwatchPause: ( state, action) => {
         state.minute = action.payload
        },
        setStopwatchReset: (state, action) => {
         state.second = 0;
         state.minute = 0;
        },
        updateStopwatchMinutes: (state, action) => {
          state.minute = state.minute+1;
        },
        updateStopwatchSeconds: (state, action) => {
          state.second = state.second+1;
        },
        setStopwatchMinutes: (state, action) => {
          state.minute = action.payload;
        },
        setStopwatchSeconds: (state, action) => {
          state.second = action.payload;
        }       
  
     
    },
  })

  export const {  setStopwatchStarter, stopwatchPause, setStopwatchReset, updateStopwatchMinutes, updateStopwatchSeconds,
  setStopwatchMinutes, setStopwatchSeconds } = stopwatchSlice.actions

export default stopwatchSlice.reducer
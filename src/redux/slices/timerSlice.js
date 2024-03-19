import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    timerStarter: false,
    timerMinute: 0,
    timerSecond: 0
  }

  export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setTimerStarter: (state, action) => {
            state.timerStarter = action.payload;

          },  
      setTimerMinute: (state, action) => {
        state.timerMinute = action.payload
      },
      setTimerSeconds: (state,action) => {
        state.timerSecond = action.payload
      },
     
    },
  })

  export const { setTimerStarter, setTimerMinute, setTimerSeconds } = timerSlice.actions

export default timerSlice.reducer
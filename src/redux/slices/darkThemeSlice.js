import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkThemeOnOff: false,
   
  }

  export const darkThemeSlice = createSlice({
    name: 'darkTheme',
    initialState,
    reducers: {
     setThemeOnOff: ( state, action)  => {
        state.darkThemeOnOff = action.payload
     }
     
    },
  })

  export const { setThemeOnOff } = darkThemeSlice.actions

export default darkThemeSlice.reducer
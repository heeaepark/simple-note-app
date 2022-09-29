import { createSlice, configureStore } from '@reduxjs/toolkit'

let isDarkMode = createSlice({
  name : 'isDarkMode',
  initialState : false,
  reducers: {
    darkMode: (state) => {
      return state = true
    },
    lightMode: (state) => {
      return state = false
    }
  }
})

export default configureStore({
  reducer: {
    isDarkMode: isDarkMode.reducer
  }
})
export let { darkMode, lightMode } = isDarkMode.actions;
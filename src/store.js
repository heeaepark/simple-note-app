import { createSlice, configureStore } from '@reduxjs/toolkit'

let isDarkMode = createSlice({
  name : 'isDarkMode',
  initialState : false,
  reducers: {
    changeMode(state) {
      return !state
    }
  }
})

export default configureStore({
  reducer: {
    isDarkMode: isDarkMode.reducer
  }
})
export let { changeMode } = isDarkMode.actions;
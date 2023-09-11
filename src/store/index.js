import { configureStore } from '@reduxjs/toolkit'
import movies from './movies/slice'
const store = configureStore({
  reducer: {
    user: '',
    movies
  }
})

export default store

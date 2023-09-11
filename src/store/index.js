import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './movies/slice'
import userReducer from './user/slice'

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer
  }
})

export default store

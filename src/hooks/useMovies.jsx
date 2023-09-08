import {  useEffect, useState } from "react"
import { getMovies } from "../service/getMovies"

export const useMovies = () => {
  const [initialState, setInitialState] = useState({})

  const searchMovies = () => {
    getMovies().then(movies => setInitialState(movies))
  }

  useEffect(() => {
    searchMovies()
  },[])

  return {initialState, setInitialState}
}


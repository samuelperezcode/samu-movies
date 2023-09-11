import { useEffect, useState } from 'react'
import { getMovies } from '../service/getMovies'

export const useMovies = () => {
  const [initialState, setInitialState] = useState({})
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const searchMovies = () => {
    getMovies().then(movies => setInitialState(movies))
  }

  useEffect(() => {
    try {
      setError(false)
      setIsLoading(true)
      searchMovies()
    } catch (e) {
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { initialState, error, isLoading, setInitialState }
}

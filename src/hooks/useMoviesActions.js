import { useAppDispatch } from './store'
import { addMovie, setFavorite, deleteFavorite } from '../store/movies/slice'

export const useMoviesActions = () => {
  const dispatch = useAppDispatch()

  const handleSetFavorie = (id) => {
    dispatch(setFavorite(id))
  }

  const handleAddMovie = () => {
    dispatch(addMovie())
  }

  const handleDeletefavorite = (id) => {
    dispatch(deleteFavorite(id))
  }

  return { handleSetFavorie, handleAddMovie, handleDeletefavorite }
}

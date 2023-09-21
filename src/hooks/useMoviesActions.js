import { useAppDispatch } from './store'
import { addMovie, setFavorite, deleteFavorite, getSourceMovieById } from '../store/movies/slice'

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
  const handleGetSourcebyId = ({ id }) => {
    dispatch(getSourceMovieById({ id }))
  }

  return { handleSetFavorie, handleAddMovie, handleDeletefavorite, handleGetSourcebyId }
}

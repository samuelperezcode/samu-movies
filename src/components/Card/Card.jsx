import { Link } from 'react-router-dom'
import { IconDelete, IconPlay, IconPlus } from '../Icons'
import { useMoviesActions } from '../../hooks/useMoviesActions'
import { useAppSelector } from '../../hooks/store'
import './Card.css'

// eslint-disable-next-line react/prop-types
function Card ({ id, title, year, rating, poster }) {
  const isFav = useAppSelector(state => state.movies.miLista).some(movie => movie.id === id)
  const { handleSetFavorie, handleDeletefavorite, handleGetSourcebyId } = useMoviesActions()

  const handleCLickPlus = () => {
    handleSetFavorie(id)
  }

  const handleCLickDelete = () => {
    handleDeletefavorite(id)
  }

  const handleClickPlay = () => {
    handleGetSourcebyId({ id })
  }

  return (
    <article className='card'>
      <img className='card-image' src={poster} alt='' />
      <div className='card-info'>
        <section className='card-info--icons'>
          <Link onClick={handleClickPlay} to={`/player/${id}`} className='card-info--icons-btn'>
            <IconPlay className='card-info--icon' />
          </Link>
          {
            !isFav
              ? (
                <button onClick={handleCLickPlus} className='card-info--icons-btn'>
                  <IconPlus className='card-info--icon' />
                </button>
                )
              : (
                <button onClick={handleCLickDelete} className='card-info--icons-btn'>
                  <IconDelete />
                </button>
                )
          }
        </section>
        <p className='card-info--title'>{title}</p>
        <p className='card-info--subtitle'>{`${year}   ⭐ ${rating}`}</p>
      </div>
    </article>
  )
}

export default Card

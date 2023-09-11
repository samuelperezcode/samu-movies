import { IconPlay, IconPlus } from '../Icons'
import { useMoviesActions } from '../../hooks/useMoviesActions'
import './Card.css'
import { useAppSelector } from '../../hooks/store'

// eslint-disable-next-line react/prop-types
function Card ({ id, title, year, rating, poster }) {
  const isFav = useAppSelector(state => state.movies.miLista).some(movie => movie.id === id)

  const { handleSetFavorie, handleDeletefavorite } = useMoviesActions()

  const handleCLickPlus = () => {
    handleSetFavorie(id)
  }

  const handleCLickDelete = () => {
    handleDeletefavorite(id)
  }

  return (
    <article className='card'>
      <img className='card-image' src={poster} alt='' />
      <div className='card-info'>
        <section className='card-info--icons'>
          <button className='card-info--icons-btn'>
            <IconPlay className='card-info--icon' />
          </button>
          {
            !isFav
              ? (
                <button onClick={handleCLickPlus} className='card-info--icons-btn'>
                  <IconPlus className='card-info--icon' />
                </button>
                )
              : (
                <button onClick={handleCLickDelete} className='card-info--icons-btn'>
                  🗑
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

import './Card.css'
import cover from '../../assets/img1_DCytNvp.png'
import {IconPlay, IconUser} from '../Icons'


// eslint-disable-next-line react/prop-types
function Card({id,title, year, rating, poster}) {
  return (
    <article className="card">
      <img className="card-image" src={cover} alt="" />
      <div className="card-info">
        <ul className="card-info--icons">
          <IconPlay className="card-info--icon"/>
          <IconUser className="card-info--icon"/>
        </ul>
        <p className="card-info--title">{title}</p>
        <p className="card-info--subtitle">{`${year} ⭐${rating}`}</p>
      </div>
    </article>
  )
}

export default Card
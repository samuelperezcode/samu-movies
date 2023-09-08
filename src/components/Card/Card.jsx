import './Card.css'
import icon from '../../assets/react.svg'
import cover from '../../assets/img1_DCytNvp.png'


// eslint-disable-next-line react/prop-types
function Card({id,title, year, rating, poster}) {
  return (
    <article className="card">
      <img className="card-image" src={cover} alt="" />
      <div className="card-info">
        <ul className="card-info--icons">
          <img className="card-info--icon" src={icon} alt="" />
          <img className="card-info--icon" src={icon} alt="" />
        </ul>
        <p className="card-info--title">{title}</p>
        <p className="card-info--subtitle">{`${year} ⭐${rating}`}</p>
      </div>
    </article>
  )
}

export default Card
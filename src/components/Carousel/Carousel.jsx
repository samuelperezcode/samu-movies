import './Carousel.css'

// eslint-disable-next-line react/prop-types
function Carousel({children}) {
  return (
    <section className="carousel">
      <div className="carousel-container">
        {children}
      </div>
    </section>
  )
}

export default Carousel
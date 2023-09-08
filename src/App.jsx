
import Card from "./components/Card/Card"
import Carousel from "./components/Carousel/Carousel"
import CategorySection from "./components/CategorySection/CategorySection"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import SearchBar from "./components/SearchBar/SearchBar"
import { useMovies } from "./hooks/useMovies"


function App() {
  const { initialState } = useMovies()
  const miLista = initialState.miLista
  const tendencias = initialState.tendencias
  const mejores = initialState.mejorRating

  return (
    <>
      <Header />
      <SearchBar />
      <CategorySection title='Mi Lista'>
        <Carousel>
          {
            miLista 
              ? miLista.map(item => {
                return <Card key={item.id} id={item.id} title={item.title} year={item.year} rating={item.rating} poster={item.poster} />
              })
              : <p>Loanding...</p>
          }
          
        </Carousel>
      </CategorySection>

      <CategorySection title='Tendencia'>
        <Carousel>
          {
            tendencias 
            ? tendencias.map(item => {
              return <Card key={item.id} id={item.id} title={item.title} year={item.year} rating={item.rating} poster={item.poster} />
            })
            : <p>Loanding...</p>
          }
        </Carousel>
      </CategorySection>

      <CategorySection title='Mejores'>
        <Carousel>
          {
            mejores 
            ? mejores.map(item => {
              return <Card key={item.id} id={item.id} title={item.title} year={item.year} rating={item.rating} poster={item.poster} />
            })
            : <p>Loanding...</p>
          }
        </Carousel>
      </CategorySection>
      <Footer />
    </>
  )
}

export default App

import Layout from '../components/Layout'
import Card from '../components/Card/Card'
import Carousel from '../components/Carousel/Carousel'
import CategorySection from '../components/CategorySection/CategorySection'
import SearchBar from '../components/SearchBar/SearchBar'
import { useAppSelector } from '../hooks/store'

function Home () {
  const movies = useAppSelector(state => state.movies)
  const displayFavorites = movies.miLista.length > 0
  return (
    <Layout>
      <SearchBar />
      {
        displayFavorites && (
          <CategorySection title='Mi Lista'>
            <Carousel>
              {
                movies.miLista.map(item => {
                  return <Card key={item.id} id={item.id} title={item.title} year={item.year} rating={item.rating} poster={item.poster} />
                })
              }
            </Carousel>
          </CategorySection>
        )
      }

      <CategorySection title='Tendencia'>
        <Carousel>
          {
            movies.tendencias.map(item => {
              return <Card key={item.id} id={item.id} title={item.title} year={item.year} rating={item.rating} poster={item.poster} />
            })
          }
        </Carousel>
      </CategorySection>

      <CategorySection title='Mejores'>
        <Carousel>
          {
            movies.mejorRating.map(item => {
              return <Card key={item.id} id={item.id} title={item.title} year={item.year} rating={item.rating} poster={item.poster} />
            })
          }
        </Carousel>
      </CategorySection>
    </Layout>
  )
}

export default Home

import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

function Page404 () {
  return (
    <Layout>
      <section>
        <h1>404</h1>
        <p>Page Not Found</p>
        <Link to='/' className='button'>Inicio</Link>
      </section>
    </Layout>
  )
}

export default Page404

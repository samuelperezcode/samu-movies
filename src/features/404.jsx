import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import { Link } from "react-router-dom"

function Page404() {
  return (
    <>
      <Header />
      <section>
        <h1>404</h1>
        <p>Page Not Found</p>
        <Link to='/' className="button">Inicio</Link>
      </section>
      <Footer />
    </>
  )
}

export default Page404
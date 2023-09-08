import './SearchBar.css'

function SearchBar() {
  return (
    <section className="search">
      <h2 className="search-title">¿Que quieres ver hoy?</h2>
      <input className="search-bar" type="text" placeholder="Buscar..." />
    </section>
  )
}

export default SearchBar
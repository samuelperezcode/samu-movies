import './CategorySection.css'

// eslint-disable-next-line react/prop-types
function CategorySection({title, children}) {
  return (
    <section className='category' >
      <h3 className="category-title">{title}</h3>
      {children}
    </section>
  )
}

export default CategorySection
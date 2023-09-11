export const getMovies = async () => {
  try {
    const json = await fetch('http://localhost:3001/initialState')
    const data = await json.json()
    return data
  } catch (error) {
    throw new Error(error)
  }
}

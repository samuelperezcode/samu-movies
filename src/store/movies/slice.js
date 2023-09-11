import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  playing: {},
  miLista: [],
  tendencias: [
    {
      id: 1,
      slug: 'video-1',
      title: 'in The Dark',
      rating: '9.2',
      year: '2009',
      category: 'Drama',
      language: 'english',
      duration: '164',
      poster: '/src/assets/img1_DCytNvp.png',
      source: '',
      desc: 'Based on 1904...'
    },
    {
      id: 2,
      slug: 'video-1',
      title: 'in The Dark',
      rating: '9.2',
      year: '2009',
      category: 'Drama',
      language: 'english',
      duration: '164',
      poster: '/src/assets/img1_DCytNvp.png',
      source: '',
      desc: 'Based on 1904...'
    },
    {
      id: 3,
      slug: 'video-1',
      title: 'in The Dark',
      rating: '9.2',
      year: '2009',
      category: 'Drama',
      language: 'english',
      duration: '164',
      poster: '/src/assets/img1_DCytNvp.png',
      source: '',
      desc: 'Based on 1904...'
    },
    {
      id: 4,
      slug: 'video-1',
      title: 'in The Dark',
      rating: '9.2',
      year: '2009',
      category: 'Drama',
      language: 'english',
      duration: '164',
      poster: '/src/assets/img1_DCytNvp.png',
      source: '',
      desc: 'Based on 1904...'
    },
    {
      id: 5,
      slug: 'video-1',
      title: 'in The Dark',
      rating: '9.2',
      year: '2009',
      category: 'Drama',
      language: 'english',
      duration: '164',
      poster: '/src/assets/img1_DCytNvp.png',
      source: '',
      desc: 'Based on 1904...'
    }
  ],
  mejorRating: [
    {
      id: 6,
      slug: 'video-1',
      title: 'in The Dark',
      rating: '9.2',
      year: '2009',
      category: 'Drama',
      language: 'english',
      duration: '164',
      poster: '/src/assets/img1_DCytNvp.png',
      source: '',
      desc: 'Based on 1904...'
    },
    {
      id: 7,
      slug: 'video-1',
      title: 'in The Dark',
      rating: '9.2',
      year: '2009',
      category: 'Drama',
      language: 'english',
      duration: '164',
      poster: '/src/assets/img1_DCytNvp.png',
      source: '',
      desc: 'Based on 1904...'
    },
    {
      id: 8,
      slug: 'video-1',
      title: 'in The Dark',
      rating: '9.2',
      year: '2009',
      category: 'Drama',
      language: 'english',
      duration: '164',
      poster: '/src/assets/img1_DCytNvp.png',
      source: '',
      desc: 'Based on 1904...'
    },
    {
      id: 9,
      slug: 'video-1',
      title: 'in The Dark',
      rating: '9.2',
      year: '2009',
      category: 'Drama',
      language: 'english',
      duration: '164',
      poster: '/src/assets/img1_DCytNvp.png',
      source: '',
      desc: 'Based on 1904...'
    },
    {
      id: 10,
      slug: 'video-1',
      title: 'in The Dark',
      rating: '9.2',
      year: '2009',
      category: 'Drama',
      language: 'english',
      duration: '164',
      poster: '/src/assets/img1_DCytNvp.png',
      source: '',
      desc: 'Based on 1904...'
    }
  ]

}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: () => {},
    setFavorite: (state, action) => {
      const id = action.payload
      const isAlreadyFav = state.miLista.some(movie => movie.id === id)
      if (!isAlreadyFav) {
        const isFromTrends = state.tendencias.some(movie => movie.id === id)
        if (isFromTrends) {
          const newMovieFav = state.tendencias.filter(movie => movie.id === id)
          state.miLista.push(newMovieFav[0])
        } else {
          const newMovieFav = state.mejorRating.filter(movie => movie.id === id)
          state.miLista.push(newMovieFav[0])
        }
      }
    },
    deleteFavorite: (state, action) => {
      const id = action.payload
      const newMiLista = state.miLista.filter(movie => movie.id !== id)
      return {
        ...state,
        miLista: newMiLista
      }
    }
  }
})

export default moviesSlice.reducer
export const { addMovie, setFavorite, deleteFavorite } = moviesSlice.actions

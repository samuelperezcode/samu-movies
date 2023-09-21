import './Player.css'
import Layout from '../../components/Layout'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/store'

// eslint-disable-next-line react/prop-types
function Player () {
  const source = useAppSelector(state => state.movies).playing

  const navigate = useNavigate()
  return (
    <Layout>
      <section className='player'>
        <video controls autoPlay>
          <source src={source} type='video/mp4' />
        </video>
        <div className='player-back'>
          <button onClick={() => navigate('/')} type='button'>Go Back</button>
        </div>
      </section>
    </Layout>
  )
}

export default Player

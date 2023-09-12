import './Player.css'
import Layout from '../../components/Layout'

function Player () {
  const source = ''
  return (
    <Layout>
      <section className='player'>
        <video controls autoPlay>
          <source src={source} type='video/mp4' />
        </video>
        <div>
          <button type='button' className='button'>Regresar</button>
        </div>
      </section>
    </Layout>
  )
}

export default Player

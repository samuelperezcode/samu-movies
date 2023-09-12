import { useAppSelector } from '../hooks/store'
// import { useUserActions } from "../hooks/useUserActions"

function Perfil () {
  const user = useAppSelector(state => state.user)
  const account = user.account
  const listOfUsers = user.users
  return (
    <section>
      <h1>Perfil</h1>
      <article>
        <h3>{account.name}</h3>
        <p>{account.correo}</p>
      </article>
      <ul>
        {
          listOfUsers.map(user => {
            return <li key={user.id}>{user.name}, email: {user.correo}</li>
          })
        }
      </ul>
    </section>
  )
}

export default Perfil

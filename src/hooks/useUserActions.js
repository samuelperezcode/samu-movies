import { useAppDispatch } from './store'
import { addUser, editUser, loginUser, deleteUser, logoutUser } from '../store/user/slice'

export const useUserActions = () => {
  const dispatch = useAppDispatch()

  const handleCreateUser = ({ name, email, password }) => {
    dispatch(addUser({ name, email, password }))
  }

  const handleLoginUser = ({ email, password }) => {
    dispatch(loginUser({ email, password }))
  }

  const handleDeleteUser = ({ id }) => {
    dispatch(deleteUser({ id }))
  }

  const handleEditUser = ({ name, email, password }) => {
    dispatch(editUser({ name, email, password }))
  }

  const handleLogoutUser = () => {
    dispatch(logoutUser())
  }

  return { handleCreateUser, handleLoginUser, handleDeleteUser, handleEditUser, handleLogoutUser }
}

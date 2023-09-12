import { useAppDispatch } from './store'
import { addUser, editUser, loginUser, deleteUser } from '../store/user/slice'

export const useUserActions = () => {
  const dispatch = useAppDispatch()

  const handleCreateUser = ({ name, email, password }) => {
    dispatch(addUser({ name, email, password }))
  }

  const handleLoginUser = ({ email, password }) => {
    dispatch(loginUser({ email, password }))
  }

  const handleDeleteUser = ({ name }) => {
    dispatch(deleteUser({ name }))
  }

  const handleEditUser = ({ name, email, password }) => {
    dispatch(editUser({ name, email, password }))
  }

  return { handleCreateUser, handleLoginUser, handleDeleteUser, handleEditUser }
}

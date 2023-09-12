import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  account: {},
  users: [
    {
      id: crypto.randomUUID(),
      name: 'samudev',
      correo: 'samuel@react.dev',
      password: '1234'
    }
  ]
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { name, email, password } = action.payload
      const newUser = {
        id: crypto.randomUUID(),
        name,
        correo: email,
        password
      }
      return {
        users: [...state.users, newUser],
        account: newUser
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload
      return state.users.filter(user => user.id !== id)
    },
    editUser: () => {},
    loginUser: (state, action) => {
      const { email, password } = action.payload
      const user = state.users.filter(user => user.correo === email)[0]

      if (user) {
        const userValid = user.password === password
        if (userValid) {
          return {
            ...state,
            account: user
          }
        } else {
          throw new Error('Invalid Password')
        }
      } else {
        throw new Error('Email not found')
      }
    },
    logoutUser: (state) => {
      return {
        ...state,
        account: {}
      }
    }
  }
})

export default userSlice.reducer
export const { addUser, deleteUser, editUser, loginUser, logoutUser } = userSlice.actions

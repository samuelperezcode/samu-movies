import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {}
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: () => {}
  }
})

export default userSlice.reducer
export const { addUser } = userSlice.actions

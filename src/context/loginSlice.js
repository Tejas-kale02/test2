import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  editUser:{},
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    addUser: (state,action) => {
      return{...state,users:[...action.payload]}
    },
    edtUser: (state,action) => {
      return{editUser:action.payload}
    },

  },
})

export const { addUser , edtUser} = loginSlice.actions

export default loginSlice.reducer
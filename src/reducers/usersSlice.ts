import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Cookies from 'js-cookies'

type User = {
  id: string | number
  name: string
  role: string
  email: string
  avatar?: string | null
  token?: string | null
  remenber: boolean | false
  expires: Date | string
  lastEmail?: string | null
}

type UserState = {
  user: User | null
}

const initialState: UserState = {
  user: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state) => {
      const user = Cookies.get('user-rifamax')
      if (user) {
        state.user = JSON.parse(user)
      }
    },
    validateToken: (state) => {
      const user = Cookies.get('user-rifamax')
      if (user) {
        state.user = JSON.parse(user)
      }

      if (state.user) {
        const expires = new Date(state.user.expires)
        const now = new Date()
        if (expires < now) {
          state.user = null
          Cookies.remove('user-rifamax')
          Cookies.remove('token-rifamax')
        }
      }
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      Cookies.set('user-rifamax', JSON.stringify(action.payload))
      Cookies.set('token-rifamax', action.payload.token || '')
    },
    clearUser: (state) => {
      state.user = null
      Cookies.remove('user-rifamax')
    }
  }
})

export const { getUser, setUser, clearUser } = userSlice.actions

export default userSlice.reducer
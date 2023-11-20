import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '@reducers/themeSlice'
import authReducer from '@reducers/usersSlice'

export const store = configureStore({
  reducer: {
    user: authReducer,
    theme: themeReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
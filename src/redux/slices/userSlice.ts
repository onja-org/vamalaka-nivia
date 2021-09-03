import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { FETCH_STATUS } from '../../constants'
import { loginMutation, registerMutation, sendQuery } from '../../graphqlHelper'
import { RootState } from '../store'

type FetchUserError = {
  message: string
}

interface UserData {
  username: string
  id: string
  token: string
  email: string
}

interface UserRegisterForm {
  username: string
  password: string
  email: string
  confirmPassword: string
  role: string
}

interface UserLoginForm {
  username: string
  password: string
}

interface PayloadRegister {
  register: UserData
}

interface PayloadLogin {
  login: UserData
}

export const fetchRegisterUser = createAsyncThunk<
  PayloadRegister,
  UserRegisterForm,
  {
    dispatch: any
    state: RootState
    rejectValue: FetchUserError
  }
>('register/fetch', async (userRegistrationFormData, thunkApi) => {
  const {
    username,
    password,
    email,
    confirmPassword,
    role,
  } = userRegistrationFormData
  const response = await sendQuery(
    registerMutation(username, password, email, confirmPassword, role)
  )

  const user = response?.data?.data
  if (response.status !== 200) {
    return thunkApi.rejectWithValue({
      message: 'Failed to fetch todos.',
    })
  }

  const errorMessage = response?.data?.errors
  if (errorMessage) {
    return thunkApi.rejectWithValue({
      message: errorMessage?.[0]?.message,
    })
  }

  return user
})

export const fetchLogin = createAsyncThunk<
  PayloadLogin,
  UserLoginForm,
  {
    dispatch: any
    state: RootState
    rejectValue: FetchUserError
  }
>('login/fetch', async (userLoginFormData, thunkApi) => {
  const { username, password } = userLoginFormData
  const response = await sendQuery(loginMutation(username, password))

  const user = response?.data?.data
  if (response.status !== 200) {
    return thunkApi.rejectWithValue({
      message: 'Failed to fetch todos.',
    })
  }

  const errorMessage = response?.data?.errors
  if (errorMessage) {
    return thunkApi.rejectWithValue({
      message: errorMessage?.[0]?.message,
    })
  }

  return user
})

const initialState = {
  user: { username: '' } as UserData,
  status: '',
  error: null as FetchUserError | null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRegisterUser.pending, (state) => {
      state.status = FETCH_STATUS.LOADING
      state.error = null
    })

    builder.addCase(fetchRegisterUser.fulfilled, (state, { payload }) => {
      state.user = payload?.register
      state.status = FETCH_STATUS.IDLE
    })

    builder.addCase(fetchRegisterUser.rejected, (state, { payload }) => {
      if (payload) state.error = payload
      state.status = FETCH_STATUS.IDLE
    })
    builder.addCase(fetchLogin.pending, (state) => {
      state.status = FETCH_STATUS.LOADING
      state.error = null
    })

    builder.addCase(fetchLogin.fulfilled, (state, { payload }) => {
      state.user = payload?.login
      state.status = FETCH_STATUS.IDLE
    })

    builder.addCase(fetchLogin.rejected, (state, { payload }) => {
      if (payload) state.error = payload
      state.status = FETCH_STATUS.IDLE
    })
  },
})

const selectUser = (state: RootState) => state.user.user
const selectUserError = (state: RootState) => state.user.error
const selectUserStatus = (state: RootState) => state.user.status
export const userSelector = createSelector<RootState, UserData, UserData>(
  selectUser,
  (user) => user
)

export const userErrorSelector = createSelector<RootState, any, any>(
  selectUserError,
  (error) => error
)

export const userStatusSelector = createSelector<RootState, string, string>(
  selectUserStatus,
  (status) => status
)

export default userSlice.reducer

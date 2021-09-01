import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { FETCH_STATUS } from '../../constants'
import { registerMutation, sendQuery } from '../../graphqlHelper'
import { RootState } from '../store'

type FetchUserError = {
  message: string
}

interface UserData {
  username: string
}

interface UserRegisterForm {
  username: string
  password: string
  email: string
  confirmPassword: string
  role: string
}
interface PayloadRegister {
  register: UserRegisterForm
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

const initialState = {
  user: { username: '' } as UserData,
  status: '',
  error: null as FetchUserError | null,
}

export const userSlice = createSlice({
  name: 'counter',
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
import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { FETCH_STATUS } from '../../constants'
import { sendQuery, getCategoriesQuery } from '../../graphqlHelper'
import { RootState } from '../store'

type FetchCategoriesError = {
  message: string
}
export const fetchCategories = createAsyncThunk<
  any[],
  string[],
  { rejectValue: FetchCategoriesError }
>('categories/fetch', async (limit: string[], thunkApi) => {
  const response = await sendQuery(getCategoriesQuery())
  const categories = response?.data?.data?.categories
  if (response.status !== 200) {
    return thunkApi.rejectWithValue({
      message: 'Failed to fetch todos.',
    })
  }

  return categories
})

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [] as any[],
    status: '',
    error: null as FetchCategoriesError | null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.status = FETCH_STATUS.LOADING
      state.error = null
    })

    builder.addCase(fetchCategories.fulfilled, (state, { payload }) => {
      state.categories = payload
      state.status = FETCH_STATUS.IDLE
    })

    builder.addCase(fetchCategories.rejected, (state, { payload }) => {
      if (payload) state.error = payload
      state.status = FETCH_STATUS.IDLE
    })
  },
})

export const selectCategories = (state: RootState) =>
  state.categories.categories
export const categoriesSelector = createSelector<RootState, any[], any[]>(
  selectCategories,
  (categories) => categories
)

export const selectStatusCategories = (state: RootState) =>
  state.categories.status
export const categoriesStatusSelector = createSelector<
  RootState,
  string,
  string
>(selectStatusCategories, (status) => status)
export default categoriesSlice.reducer

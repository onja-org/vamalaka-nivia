import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit'
import { sendQuery, getAdsQuery } from '../../graphqlHelper'
import { RootState } from '../store'

type FetchAdsError = {
  message: string
}

interface Offer{
  id: string
  title: string
  body: string
  photos: Photo[]
  currency: string
  price: number
  unit: string
  amountOfProduct: number
  username: string
  categoryid: string
}

export interface Photo {
  url: string
  info: string
  isPrimary: boolean
}

// possible errors.
export const fetchAds = createAsyncThunk<
  Offer[],
  string[],
  { rejectValue: FetchAdsError }
>(
  'ads/fetch',
  // The second argument, `thunkApi`, is an object
  // that contains all those fields
  // and the `rejectWithValue` function:
  async (_, thunkApi) => {
    // console.log(limit, limit)
    const response = await sendQuery(getAdsQuery())

    const ads = response?.data?.data?.ads
    // const data: any[] = await response.json();
    // console.log(ads, 'ads')

    // Check if status is not okay:
    if (response.status !== 200) {
      // Return the error message:
      return thunkApi.rejectWithValue({
        message: 'Failed to fetch todos.',
      })
    }

    return ads
  }
)

export const adsSlice = createSlice({
  name: 'ads',
  initialState: {
    ads: [] as Offer[],
    status: '',
    error: null as FetchAdsError | null,
  },  
  reducers: {
    
  },
  extraReducers: (builder) => {
    // When we send a request,
    // `fetchAds.pending` is being fired:
    builder.addCase(fetchAds.pending, (state) => {
      // At that moment,
      // we change status to `loading`
      // and clear all the previous errors:
      state.status = 'loading'
      state.error = null
    })

    // When a server responses with the data,
    // `fetchAds.fulfilled` is fired:
    builder.addCase(fetchAds.fulfilled, (state, { payload }) => {
      // We add all the new todos into the state
      // console.log('full', payload)

      // and change `status` back to `idle`:
      state.ads = payload
      state.status = 'idle'
    })

    // When a server responses with an error:
    builder.addCase(fetchAds.rejected, (state, { payload }) => {
      // We show the error message
      // and change `status` back to `idle` again.
      // console.log(payload, 'REjected error')
      if (payload) state.error = payload
      state.status = 'idle'
    })
  },
})

// Action creators are generated for each case reducer function

export const selectAds = (state: RootState) => state.ads.ads
export const adsSelector = createSelector<RootState, any[], any[]>(
  selectAds,
  (ads) => ads
)

export default adsSlice.reducer

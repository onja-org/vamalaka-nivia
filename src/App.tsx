import OnboardingPage from './Pages/OnboardingPage'
import { Route, Switch } from 'react-router-dom'
// import { sendQuery, getAdsQuery } from './graphqlHelper';
// import { useSelector, useDispatch } from 'react-redux'

// import {
//   adsSelector,
//   decrement,
//   fetchAds,
//   incrementByAmount,
// } from './redux/slices/adsSlice'
// import { useAppSelector, useAppDispatch } from './redux/hooks'

import SignIn from './Pages/SignIn'
import SignUp from './Pages/SingUp'
import Transactions from './Pages/Transactions'
import NotFound from './Pages/NotFound'

function App() {
	// const count = useAppSelector((state) => state.ads.value)
	// const ads = useSelector(adsSelector)

	return (
		<Switch>
			<Route exact path='/' component={OnboardingPage} />
			<Route exact path='/signin' component={SignIn} />
			<Route exact path='/transactions' component={Transactions} />
			<Route exact path='/signup' component={SignUp} />
			<Route component={NotFound} />
		</Switch>
	)
}

export default App

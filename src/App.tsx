import React from 'react'
import './App.css'
import { HomePage } from './Pages/HomePage'
import { Route, Switch } from 'react-router'
import { Paths } from './components/helpers/routeHelper'
import { LoginPage } from './Pages/LoginPage'
import OnboardingPage from './Pages/OnboardingPage'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path={Paths.HOME} component={HomePage} />
        <Route exact path={Paths.LOGIN} component={LoginPage} />
        <Route path={Paths.REGISTER} component={OnboardingPage} />
      </Switch>
    </div>
  )
}

export default App

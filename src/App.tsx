import React from 'react'
import './App.css'
import { HomePage } from './Pages/HomePage'
import { RoleSelectOnboard } from './components/RoleSelectionOnboard/RoleSelectionOnBoard'
import { Route, Switch } from 'react-router'
import { Paths } from './components/helpers/routeHelper'
import { LoginPage } from './Pages/LoginPage'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path={Paths.HOME} component={HomePage} />
        <Route exact path={Paths.LOGIN} component={LoginPage} />
        <Route path={Paths.REGISTER} component={RoleSelectOnboard} />
      </Switch>
    </div>
  )
}

export default App

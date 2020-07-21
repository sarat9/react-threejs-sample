import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import HomeLayout from './home/HomeLayout'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={HomeLayout} />
        </Switch>
      </Router>
    </>
  )
}

export default App

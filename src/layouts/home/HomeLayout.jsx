import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import NavBar from '../../components/navbar/NavBar'
import DashboardLayout from '../dashboard/DashboardLayout'
import './HomeLayout.scss'

function HomeLayout() {
  return (
    <div className='home-page-layout'>
      <NavBar>
        <div>
          <Container className='containerDiv' style={{ padding: '10px', maxWidth: '100%' }}>
            <Switch>
              {/* <Route exact path='/path' component={Component} /> */}
              <Route exact path='/' component={DashboardLayout} />
            </Switch>
          </Container>
        </div>
      </NavBar>
    </div>
  )
}

export default HomeLayout
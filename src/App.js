import React, { Component } from 'react'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Dashboard from './containers/Dashboard'
import Canine from './components/Canine'
import Login from './components/Login'
import AppBar from 'material-ui/AppBar'

class App extends Component {
  render() {
    return (
      <div>
        <AppBar style={{ marginBottom: 5 }} />
        <Login />
        <Canine />
        <Dashboard />
        {/* <Switch>
          <Route exact path="/" render={() => <Dashboard />} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch> */}
      </div>
    )
  }
}

export default connect()(withRouter(App))

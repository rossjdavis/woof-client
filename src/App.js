import React, { Component } from 'react'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getDogs } from './actions/canines'
import Dashboard from './containers/Dashboard'
import CanineView from './components/CanineView'

class App extends Component {
  componentWillMount() {
    // this.props.onRefresh()
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={props => <Dashboard {...props} />} />
          <Route exact path="/view-canine" render={() => <CanineView />} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  canines: state.canines,
  token: state.auths.token
})

const mapDispatchToProps = dispatch => ({
  onRefresh: () => dispatch(getDogs())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))

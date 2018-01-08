import React, { Component } from 'react'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions/canines'
import Dashboard from './containers/Dashboard'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { actions } = this.props
    actions.showDogsList()
  }

  render() {
    return (
      <Switch>
        <Route exact path="/canines" render={() => <Dashboard />} />
        <Route path="*" render={() => <Redirect to="/canines" />} />
      </Switch>
    )
  }
}

const mapStateToProps = state => ({
  canines: state.canines
})

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch,
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))

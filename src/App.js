import React, { Component } from 'react'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions/canines'
import Dashboard from './containers/Dashboard'
import CanineView from './components/CanineView'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { actions } = this.props
    actions.getDogs()
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={props => <Dashboard {...props} />} />
        <Route exact path="/view-canine" render={() => <CanineView />} />
        <Route path="*" render={() => <Redirect to="/" />} />
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

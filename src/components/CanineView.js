import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getActive } from '../actions/canines'

class Canine extends Component {
  componentWillMount() {
    this.props.onRefresh()
  }

  render() {
    let { view } = this.props
    let canine = !view ? (
      <p>Loading...</p>
    ) : (
      <div>
        <img src={view.image} alt={view.name} />
        <h1>{view.name}</h1>
        <p> {view.born}</p>
        <p> {view.intro} </p>
      </div>
    )
    return canine
  }
}

const matchStateToProps = state => ({
  view: state.canines.view
})

const matchDispatchToProps = dispatch => ({
  onRefresh: () => dispatch(getActive())
})

const CanineView = connect(matchStateToProps, matchDispatchToProps)(Canine)

export default CanineView

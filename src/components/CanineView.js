import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getActive } from '../actions/canines'

const styleView = {
  display: 'flex',
  flexDirection: 'column',
  width: 750,
  margin: '0 auto'
}

const styleHead = {
  display: 'flex',
  flexDirection: 'row'
}

const styleImage = {
  width: 300,
  height: 300,
  borderRadius: 20,
  marginRight: 20
}

const styleIntro = {
  display: 'flex',
  flexDirection: 'column'
}

class Canine extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.onGetActive()
  }

  render() {
    let { view } = this.props
    return !view ? (
      <p>Loading...</p>
    ) : (
      <div style={styleView}>
        <div style={styleHead}>
          <img style={styleImage} src={view.image} />
          <div style={styleIntro}>
            <h1>{view.name}</h1>
            <p> {view.born}</p>
            <p> {view.intro} </p>
            {/* <button> Woof! </button> */}
          </div>
        </div>
      </div>
    )
  }
}

const matchStateToProps = state => ({
  view: state.canines.view
})

const matchDispatchToProps = dispatch => ({
  onGetActive: () => dispatch(getActive())
})

const CanineView = connect(matchStateToProps, matchDispatchToProps)(Canine)

export default CanineView

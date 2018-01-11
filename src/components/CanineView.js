import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getActive } from '../actions/canines'

import {
  Card,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from 'material-ui/Card'

import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'

class Canine extends Component {
  componentWillMount() {
    this.props.onRefresh()
  }

  render() {
    let styles = {
      root: {
        display: 'flex',
        justifyContent: 'space-around'
      },
      card: {
        width: 350
      }
    }

    let { view } = this.props

    let canine = !view ? (
      <p>Loading...</p>
    ) : (
      <Card style={styles.card}>
        <CardMedia>
          <img src={view.image} />
        </CardMedia>
        <CardTitle title={view.name} subtitle={view.born} />
        <CardText>{view.intro}</CardText>
        <CardActions>
          <FlatButton label="send message" />
        </CardActions>
      </Card>
    )
    return (
      <div style={styles.root}>
        <Paper>{canine}</Paper>
      </div>
    )
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

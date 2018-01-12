import React from 'react'
import { connect } from 'react-redux'

import { exitView } from '../actions/canines'

import Dialog from 'material-ui/Dialog'
import {
  Card,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import { Tab, Tabs } from 'material-ui/Tabs'

const Canine = ({ view, onExit }) => {
  let dog = !view ? (
    <div />
  ) : (
    <Dialog
      open={true}
      onRequestClose={onExit}
      contentStyle={{ width: '30%' }}
      autoDetectWindowHeight={true}
    >
      <Card>
        <CardMedia>
          <img src={view.image} alt={view.name} />
        </CardMedia>
        <CardTitle title={view.name} subtitle={view.born} />
        <CardText>{view.intro}</CardText>
        <CardActions>
          <FlatButton label="woof" />
        </CardActions>
      </Card>
    </Dialog>
  )

  return dog
}

const mapStateToProps = state => ({
  view: state.canines.view
})

const mapDispatchToProps = dispatch => ({
  onExit: () => dispatch(exitView())
})

export default connect(mapStateToProps, mapDispatchToProps)(Canine)

import React from 'react'
import { connect } from 'react-redux'

const Canines = ({ canines, match, history }) => {
  let canine = canines.find(canine => canine.id === match.params.id)
}

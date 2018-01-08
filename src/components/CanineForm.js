import React from 'react'

import { connect } from 'react-redux'

import { createCanine } from './actions/canines'

const Canine = ({ history, onAddNew }) => {
  return (
    <form>
      <p>
        <input type="text" name="name" placeholder="Name" />
      </p>
    </form>
  )
}

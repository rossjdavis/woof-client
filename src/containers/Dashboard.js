import React from 'react'
import { connect } from 'react-redux'
import { removeCanine } from '../actions/canines'
import { showView } from '../actions/canines'

import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'

import StarBorder from 'material-ui/svg-icons/toggle/star-border'

const styles = {
  root: {
    overflowY: 'auto'
  }
}

const Canines = ({ canines, onRemove, onShow }) => {
  let dogs = !canines ? (
    <p>Loading...</p>
  ) : (
    <GridList style={styles.root} cols={4}>
      {canines.map((dog, i) => (
        <GridTile
          key={i}
          title={dog.name}
          // actionIcon={
          //   <IconButton>
          //     <StarBorder color="white" />
          //   </IconButton>
          // }
          onClick={e => {
            e.preventDefault()
            onShow(dog)
          }}
        >
          <img src={dog.image} alt={dog.name} />

          {/* <button
          onClick={e => {
            e.preventDefault()
            onRemove(d._id)
          }}
        >
          X
        </button> */}
        </GridTile>
      ))}
    </GridList>
  )
  return dogs
}

const mapStateToProps = state => ({
  canines: state.canines.index
})

const mapDispatchToProps = dispatch => ({
  // onRemove: id => dispatch(removeCanine(id)),
  onShow: canine => dispatch(showView(canine))
})

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(Canines)

export default Dashboard

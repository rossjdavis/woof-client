import React from 'react'
import { connect } from 'react-redux'
import { removeCanine } from '../actions/canines'
import { setActive } from '../actions/canines'
import CanineForm from '../components/CanineForm'
import Login from '../components/Login'

import { GridList, GridTile } from 'material-ui/GridList'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },

  grid: {
    overflowY: 'auto',
    marginTop: 40
  }
}

const Canines = ({ canines, onRemove, onActive, history, token }) => {
  let dogsList = !canines ? (
    <p>Loading...</p>
  ) : (
    <GridList style={styles.grid} cols={4}>
      {canines.map((dog, i) => (
        <GridTile
          key={i}
          title={dog.name}
          onClick={e => {
            e.preventDefault()
            onActive(dog)
            history.push('/view-canine')
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
  return (
    <div style={styles.root}>
      {sessionStorage.getItem('token') ? dogsList : <Login />}
    </div>
  )
}

// const setLoggedIn = token => {
//   console.log('set session')
//   let session = JSON.parse(sessionStorage.getItem('token'))
//   if (token && !session) {
//     this.props.onSignIn(token)
//   }
// }

const mapStateToProps = state => ({
  canines: state.canines.index,
  token: state.auths.token
})

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(removeCanine(id)),
  onActive: canine => dispatch(setActive(canine))
})

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(Canines)

export default Dashboard

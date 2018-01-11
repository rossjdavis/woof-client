import React from 'react'
import { connect } from 'react-redux'
import { removeCanine } from '../actions/canines'
import { setActive } from '../actions/canines'
import CanineForm from '../components/CanineForm'
import Login from '../components/Login'

import { Card } from 'reactstrap'

// const styleView = {
//   display: 'flex',
//   flexDirection: 'column',
//   width: 750,
//   margin: '0 auto'
// }
//
// const styleList = {
//   display: 'flex',
//   flexFlow: 'row wrap',
//   justifyContent: 'center'
// }
//
// const styleDogs = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   backgroundColor: 'lightgrey',
//   borderRadius: 20,
//   margin: 10
// }
//
// const styleName = {
//   padding: 5
// }
//
// const styleImage = {
//   width: 150,
//   height: 150,
//   borderTopLeftRadius: 20,
//   borderTopRightRadius: 20
// }

const Canines = ({ canines, onRemove, onActive, history, token }) => {
  let dogsList = !canines ? (
    <p>Loading...</p>
  ) : (
    canines.map((dog, i) => (
      <Card key={i}>
        <img
          className="img-responsive"
          // style={styleImage}
          src={dog.image}
          alt={dog.name}
          onClick={e => {
            e.preventDefault()
            onActive(dog)
            history.push('/view-canine')
          }}
        />
        <span>{dog.name}</span>
        {/* <button
          onClick={e => {
            e.preventDefault()
            onRemove(d._id)
          }}
        >
          X
        </button> */}
      </Card>
    ))
  )
  return (
    <div className="dogs-list">
      <div>{token ? dogsList : <Login />}</div>
      {/* <CanineForm /> */}
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

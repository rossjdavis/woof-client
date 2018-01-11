import React from 'react'
import { connect } from 'react-redux'
import { reqLogin } from '../actions/auths'

const Login = ({ onLogin }) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onLogin(e.target[0].value)
      }}
    >
      <div>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="submit" value="Login" />
      </div>
    </form>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  onLogin: name => dispatch(reqLogin(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

import React from 'react'
import { connect } from 'react-redux'
import { reqLogin } from '../actions/auths'
import { Tabs, Tab } from 'material-ui/Tabs'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'

const Login = ({ onLogin, token }) => {
  let login = (
    <Dialog
      open={true}
      contentStyle={{ width: '30%' }}
      onClick={e => {
        e.preventDefault()
        console.log(e.target)
      }}
    >
      <Tabs>
        <Tab label="Login">
          <TextField id="email" type="email" floatingLabelText="e-mail" />
          <br />
          <TextField id="pword" type="password" floatingLabelText="password" />
        </Tab>
        <Tab label="Signup">
          <TextField floatingLabelText="e-mail" />
          <br />
          <TextField floatingLabelText="password" />
          <br />
          <TextField floatingLabelText="password confirm" />
        </Tab>
      </Tabs>
      <FlatButton
        label="Submit"
        fullWidth={true}
        onClick={e => {
          e.preventDefault()
          onLogin(getValues())
        }}
      />
    </Dialog>
  )
  return token ? <div /> : <div>{login}</div>
}

const getValues = () => {
  let email = document.getElementById('email').value
  let pword = document.getElementById('pword').value

  return { email, pword }
}

const mapStateToProps = state => ({
  token: state.auths.token
})

const mapDispatchToProps = dispatch => ({
  onLogin: name => dispatch(reqLogin(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

import { useEffect, useState } from 'preact/hooks'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import useFortmatic from '../utils/useFortmatic'

const Login = ({ getIsAuthed, getLoginState }) => {
  const [loginState, setLoginState] = useState(null)
  const [isSignedIn, setIsIgnedIn] = useState(false)

  useEffect(() => {
    setLoginState(useFortmatic(process.env.FORTMATIC_KEY))
  }, [])

  useEffect(() => {
    if (loginState) {
      console.log('----------')
      console.log('loginState', loginState)
      console.log('^^^^^^^^^^')
      loginState.signIn()
      setIsIgnedIn(loginState.isSignedIn())
      getLoginState(loginState)
    }
  }, [loginState])

  useEffect(() => {
    if (isSignedIn) {
      getIsAuthed(isSignedIn)
    }
  }, [isSignedIn])
  
  return (
    <Paper>
      <Box p={2}>
        <Typography variant='h1' component='h1'>Login</Typography>
      </Box>
      { !isSignedIn && (
        <Box p={2}>
          <Button size='large' variant='contained' onClick={loginState?.signIn}>Log in</Button>
        </Box>
      )}
    </Paper>
  )
}

export default Login

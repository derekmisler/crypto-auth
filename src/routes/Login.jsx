import { route } from 'preact-router'
import { useEffect, useState } from 'preact/hooks'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import useFortmatic from '../utils/useFortmatic'
import { ROUTES } from '../constants/routes'

const Login = () => {
  const [loginState, setLoginState] = useState(null)
  const [isSignedIn, setIsIgnedIn] = useState(false)

  useEffect(async () => {
    if (loginState) {
      // await loginState.signIn()
      console.log('----------')
      console.log('loginState', loginState)
      console.log('^^^^^^^^^^')
      setIsIgnedIn(loginState.isSignedIn())
    }
  }, [loginState])

  useEffect(() => {
    console.log('----------')
    console.log('isSignedIn', isSignedIn)
    console.log('^^^^^^^^^^')
    
    if (isSignedIn) {
      route(ROUTES.dashboard)
    }
  }, [isSignedIn])

  const logIn = () => {
    setLoginState(useFortmatic(FORTMATIC_KEY))
  }
  
  return (
    <Paper>
      <Box p={2}>
        <Typography variant='h1' component='h1'>Login</Typography>
      </Box>
      { !isSignedIn && (
        <Box p={2}>
          <Button size='large' variant='contained' onClick={logIn}>Log in</Button>
        </Box>
      )}
    </Paper>
  )
}

export default Login

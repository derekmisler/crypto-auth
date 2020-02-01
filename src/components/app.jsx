import { useEffect, useState } from 'preact/hooks'
import { Router, route } from 'preact-router'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Header from './Header'
import Redirect from './Redirect'
import { ROUTES } from '../constants/routes'

// Code-splitting is automated for routes
import Login from '../routes/Login'
import Dashboard from '../routes/Dashboard'

export const App = () => {
  const [isAuthed, setIsAuthed] = useState(false)
  const [redirectRoute, setRedirectRoute] = useState(ROUTES.login)

  useEffect(() => {
    setRedirectRoute(isAuthed ? ROUTES.dashboard : ROUTES.login)
  }, [isAuthed])

  const handleRoute = async e => {
    const url = e?.url
    const isHidden = e?.current?.props?.auth
    if (isHidden) {
      return route(isAuthed ? url : ROUTES.login)
    }
    route(url)
  }

  return (
    <div id='app'>
      <Header />
      <Container component='main' maxWidth='md'>
        <Box component='section' p={4}>
          <Router onChange={handleRoute}>
            <Redirect path={ROUTES.root} to={redirectRoute} />
            <Login path={ROUTES.login} handleAuth={setIsAuthed} />
            <Dashboard path={ROUTES.dashboard} auth />
          </Router>
        </Box>
      </Container>
    </div>
  )
}

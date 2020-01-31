import { Router } from 'preact-router'
import Container from '@material-ui/core/Container'

// Code-splitting is automated for routes
import Home from '../routes/home'
import Profile from '../routes/profile'

export const App = () => (
  <div id="app">
    <Container maxWidth="lg">
      <Router>
        <Home path="/" />
        <Profile path="/profile/" user="Derek" />
        <Profile path="/profile/:user" />
      </Router>
    </Container>
  </div>
)

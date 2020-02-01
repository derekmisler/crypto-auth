import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex'
  },
  title: {
    flexGrow: 1
  }
}))

const Header = () => {
  const classes = useStyles()
  return (
    <AppBar position='relative' component='nav' >
      <Toolbar variant='dense'>
        <Typography variant='h6' noWrap className={classes.title}>
          Blockchain Authentication Example
        </Typography>
        <Button href='/dashboard'>Dashboard</Button>
        <Button href='/'>Log out</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
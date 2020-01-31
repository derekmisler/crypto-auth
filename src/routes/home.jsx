import { h } from 'preact'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const Home = () => (
  <Box p={2}>
    <Typography variant="h1">Home</Typography>
    <Typography variant="body1">This is the Home component.</Typography>
  </Box>
)

export default Home

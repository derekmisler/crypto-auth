import { Fragment } from 'preact'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const Dashboard = () => (
  <Fragment>
    <Box p={2}>
      <Typography variant='h1'>Dashboard</Typography>
      <Typography variant='body1'>This data is hidden behind authentication.</Typography>
    </Box>
  </Fragment>
)

export default Dashboard
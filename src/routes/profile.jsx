import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const Profile = ({ user }) => {
  const [time, setTime] = useState(Date.now())

  const updateTime = () => {
    setTime(Date.now())
  }
  useEffect(() => {
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Box p={2}>
      <Typography variant="h1">Profile: {user}</Typography>
      <Typography variant="body1">This is the user profile for a user named { user }.</Typography>

      <Typography variant="body1">Current time: {new Date(time).toLocaleString()}</Typography>

    </Box>
  )
}

export default Profile
import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import style from './style'

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
		<div class={style.profile}>
			<h1>Profile: {user}</h1>
			<p>This is the user profile for a user named { user }.</p>

			<div>Current time: {new Date(time).toLocaleString()}</div>

		</div>
	)
}

export default Profile

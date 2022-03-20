import { createSlice } from '@reduxjs/toolkit'

const users = [
	{
		id: Math.random().toString(),
		email: 'gulniza@lnkjs',
		password: '13245467',
	},
	{
		id: Math.random().toString(),
		email: 'asd@asd.asd',
		password: 'asd123',
	},
]

const initState = { isLogin: false, errorMessege: '', auth: {} }

const loginSlice = createSlice({
	name: 'login',
	initialState: initState,
	reducers: {
		authHandler(state, actions) {
			for (const el of users) {
				if (
					el.email === actions.payload.email &&
					el.password === actions.payload.password
				) {
					state.isLogin = true
					state.errorMessege = 'OK'
					state.auth = { ...el }
					break
				} else {
					state.isLogin = false
					state.errorMessege = 'Error'
					state.auth = {}
				}
			}
		},
	},
})
export const loginActions = loginSlice.actions
export default loginSlice

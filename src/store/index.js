import { configureStore } from '@reduxjs/toolkit'
import taskSlice from './addTaskSlice'
import loginSlice from './loginSlice'

const store = configureStore({
	reducer: {
		login: loginSlice.reducer,
		todos: taskSlice.reducer,
	},
})

export default store

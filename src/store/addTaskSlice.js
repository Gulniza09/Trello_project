import { createSlice } from '@reduxjs/toolkit'

const taskSlice = createSlice({
	name: 'todos',
	initialState: {
		cardTodo: [
		],
	},
	reducers: {
		addTask: (state, action) => {
			const newTodo = action.payload
			state.cardTodo = [...state.cardTodo, { ...newTodo, tasks: [] }]
		},
		cardTodoAdd: (state, action) => {
			const newTask = action.payload
			state.cardTodo.map((todo) => {
				if (todo.id === newTask.id) {
					todo.tasks.push(newTask)
				}
				return todo
			})
		},
	},
})

export const todoActions = taskSlice.actions
export default taskSlice

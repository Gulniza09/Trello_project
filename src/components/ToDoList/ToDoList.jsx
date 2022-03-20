import React from 'react'
import { useSelector } from 'react-redux'
import ToDoItem from './ToDoItem'

const ToDoList = () => {
	const todos = useSelector((state) => state.todos.cardTodo)
	return (
		<>
			{todos.map((todo) => (
				<ToDoItem
					key={todo.id}
					id={todo.id}
					title={todo.title}
					tasks={todo.tasks}
					/>
			))}
			
		</>
	)
}

export default ToDoList

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import ToDoForm from './components/ToDoList/ToDoForm'



function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/ToDoForm' element={<ToDoForm />} />
			</Routes>
	
		</BrowserRouter>
	)
}

export default App

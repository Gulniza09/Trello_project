import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Header from './Header'
import ToDoList from './ToDoList'

import { addTask, todoActions } from '../../store/addTaskSlice'

const ToDoForm = () => {
	const [value, setValue] = useState('')
	const [showToDoCart, setShowToDoCart] = useState(false)
	const dispatch = useDispatch()

	const ShowTodoToggle = () => {
		setShowToDoCart((prevState) => !prevState)
		setShowToDoCart(true)
	}

	const deleteInputHandler = () => {
		setShowToDoCart(false)
	}

	const inputChangeHandler = (e) => {
		setValue(e.target.value)
	}

	const addTodoList = (e) => {
		e.preventDefault()
		dispatch(
			todoActions.addTask({
				title: value,
				id: Math.random().toString(),
			}),
		)
		setValue('')
	}

	return (
		<div>
			<Header />
			<div>
				<InputForm>
					<ToDoList />
					{showToDoCart ? (
						<Form>
							<Input
								value={value}
								type='text'
								onChange={inputChangeHandler}
							/>
							<br />
							<FormButton onClick={addTodoList}>
								Добавить карточку
							</FormButton>
							<XButton onClick={deleteInputHandler}>X</XButton>
						</Form>
					) : (
						<Card>
							<Button onClick={ShowTodoToggle}>
								<Img
									src='https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-plus-user-interface-tanah-basah-glyph-tanah-basah-2.png'
									alt=''
								/>
								Добавить карточку
							</Button>
						</Card>
					)}
				</InputForm>

			</div>
		
		</div>
	)
}

const InputForm = styled.div`
	display: flex;
	align-items: center;
	margin: 0;
`
const Button = styled.button`
	display: flex;
	align-items: center;
	background-color: #ffffff3d;
	width: 262px;
	margin-top: 40px;
	margin-left: 30px;
	font-size: 14px;
`
const Img = styled.img`
	width: 35px;
	height: 35px;
`

const Form = styled.div`
	background-color: #ebecf0;
	width: 262px;
	margin-top: 40px;
	margin-left: 30px;
	height: 68px;
	box-sizing: border-box;
	display: inline-block;
	height: 100%;
`
const Input = styled.input`
	box-sizing: border-box;
	border-radius: 3px;
	box-shadow: inset 0 0 0 2px #0079bf;
	height: 36px;
	transition: margin 85ms ease-in, background 85ms ease-in;
	width: 100%;
`
const FormButton = styled.button`
	background-color: #0079bf;
	border: none;
	box-shadow: none;
	color: #fff;
	float: left;
	height: 32px;
	margin-top: 0;
	min-height: 32px;
	padding-bottom: 4px;
	padding-top: 4px;
`
const XButton = styled.button`
	height: 32px;
	line-height: 32px;
	width: 32px;
	font-size: 20px;
`
const Card = styled.div`
	display: flex;
	width: 100%;
`

export default ToDoForm

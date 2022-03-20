import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Modal from '../UI/Modal'
import { todoActions } from '../../store/addTaskSlice'

const ToDoItem = ({ title, tasks, id }) => {
	const [showTodoItem, setShowTodoItem] = useState(false)
	const [cardValue, setCardValue] = useState('')
	const [modalActive, setModalActive] = useState(false)
	const dispatch = useDispatch()

	const ShowItemToggle = () => {
		setShowTodoItem((prevState) => !prevState)
		setShowTodoItem(true)
	}
	const deleteItemHandler = () => {
		setShowTodoItem(false)
	}

	const addTodoItem = (e) => {
		e.preventDefault()
		dispatch(
			todoActions.cardTodoAdd({
				task: cardValue,
				id: e.target.id,
			}),
		)
	}

	const inputChangeHandler = (e) => {
		setCardValue(e.target.value)
	}
	return (
		<Item>
			<ItemCard>
				<ItemList>{title}</ItemList>
				{showTodoItem ? (
					<div>
						{tasks.map((task) => (
							<List
								onClick={() => setModalActive(true)}
								key={task.id}
							>
								{task.task}
							</List>
						))}
						<div>
							<Textarea
								placeholder='Ввести заголовок для этой карточки'
								onChange={inputChangeHandler}
							></Textarea>
						</div>
						<ButtonItem id={id} onClick={addTodoItem}>
							Добавить список
						</ButtonItem>
						<ButtonDelete onClick={deleteItemHandler}>
							X
						</ButtonDelete>
					</div>
				) : (
					<div>
						<Button onClick={ShowItemToggle}>
							<Img
								src='https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-plus-user-interface-tanah-basah-glyph-tanah-basah-2.png'
								alt=''
							/>
							Добавить карточку
						</Button>
					</div>
				)}
			</ItemCard>
			<Modal active={modalActive} setActive={setModalActive} />
		</Item>
	)
}

const Item = styled.div`
	background-color: #ebecf0;
	border-radius: 3px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	max-height: 100%;
	position: relative;
	white-space: normal;
	width: 262px;
	margin-top: 40px;
	margin-left: 30px;
`
const List = styled.li`
	background-color: white;
	border-radius: 3px;
	margin-bottom: 10px;
	box-shadow: 0 1px 0 #091e4240;
	width: 252px;
	height: 27px;
	display: flex;
	align-items: center;
	list-style: none;
	border-radius: 3px;
`
const ItemCard = styled.div`
	box-sizing: border-box;
	display: inline-block;
	height: 100%;
	margin: 0 4px;
	vertical-align: top;
	white-space: nowrap;
	width: 272px;
`
const ButtonItem = styled.button`
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
const ButtonDelete = styled.button`
	height: 32px;
	line-height: 32px;
	width: 32px;
	font-size: 20px;
`
const Button = styled.button`
	display: flex;
	align-items: center;
	background-color: #ffffff3d;
	border: none;
	width: 252px;
`
const Img = styled.img`
	width: 35px;
	height: 35px;
`
const ItemList = styled.div`
	font-size: 14px;
	resize: none;
	width: 240px;
	height: 25px;
	background-color: #ebecf0;
	border: none;
`
const Textarea = styled.textarea`
	width: 240px;
	height: 50px;
`
export default ToDoItem

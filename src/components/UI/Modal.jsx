import React from 'react'
import styled from 'styled-components'
import './Modal.css'
const Modal = ({ active, setActive }) => {
	return (
		<div
			className={active ? 'modal active' : 'modal'}
			onClick={() => setActive(false)}
		>
			<div className='modal_content' onClick={(e) => e.stopPropagation()}>
				<Content>
					<Icon src='https://img.icons8.com/ios-filled/50/000000/stripped-patterns.png' />
					<h1>Описание</h1>
				</Content>
				<Comment placeholder='Добавить более подробное описание…'></Comment> <br />
                <Delete>Сохранить</Delete>
                <X>X</X>
			</div>
		</div>
	)
}

const Content = styled.div`
	display: flex;
	align-items: center;
`
const Icon = styled.img`
	width: 60px;
	height: 60px;
`
const Comment = styled.textarea`
	font-size: 19px;
	margin-top: 50px;
	width: 450px;
	height: 100px;
`

const Delete = styled.button`
background-color: #0079bf;
margin-top: 30px;
padding: 10px;

`
const X =styled.button`
margin-top: 30px;
padding: 10px;
`
export default Modal

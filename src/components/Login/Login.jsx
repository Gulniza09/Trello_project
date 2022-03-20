import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { loginActions } from '../../store/loginSlice'

const Login = () => {
	const navigation = useNavigate()

	const login = useSelector((state) => state.login)

	const [error, setError] = useState(false)
	const errorMessage = error ? (
		<p style={{ color: 'red', fontSize: '12px' }}>
			Неправильно заполнен электронный адрес или пороль
		</p>
	) : (
		''
	)

	const [value, setValue] = useState({
		email: '',
		password: '',
	})

	const changHandler = (e) => {
		setValue({
			...value,
			[e.target.name]: e.target.value,
		})
	}

	const dispatch = useDispatch()
	const loginHangler = (e) => {
		e.preventDefault()
		if (login.isLogin === true) {
			setError(false)
		} else setError(true)

		dispatch(
			loginActions.authHandler({
				email: value.email,
				password: value.password,
			}),
		)
	}
	if (login.isLogin === true) {
		navigation('/ToDoForm')
	}
	console.log(login)

	return (
		<Main>
			<form>
				<Image>
					<Img
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/2560px-Trello-logo-blue.svg.png'
						alt=''
					/>
				</Image>
				<Conteiner>
					<H3>Вход в Trello</H3>
					<Input
						name='email'
						onChange={changHandler}
						type='email'
						value={value.email}
						placeholder='Укажите адрес электронной почты'
					/>
					<br />
					{errorMessage}
					<Input
						name='password'
						value={value.password}
						onChange={changHandler}
						type='password'
						placeholder='Введите пароль'
					/>
					<br />
					<Button onClick={loginHangler}>Войти</Button>
				</Conteiner>
			</form>
		</Main>
	)
}

const Main = styled.div`
	display: flex;
	justify-content: center;
`
const Image = styled.div`
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	align-items: center;
`
const Img = styled.img`
	width: 220px;
	height: 43px;
	margin-top: 40px;
	margin-bottom: 40px;
`
const Conteiner = styled.div`
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	align-items: center;
	background-color: #ffffff;
	box-shadow: 0 0 0 transparent;
	box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
	width: 370px;
	height: 300px;
`
const H3 = styled.h3`
	text-align: center;
	color: #5e6c84;
	font-size: 16px;
	line-height: 28px;
	margin-top: 10px;
	margin-bottom: 25px;
`
const Button = styled.button`
	background: #5aac44;
	color: #fff;
	display: inline-block;
	font-weight: bold;
	padding: 0.6em 1.3em;
	position: relative;
	text-decoration: none;
	border: 3px;
	width: 320px;
`
const Input = styled.input`
	padding: 7px;
	width: 320px;
	font-size: 14px;
	background-color: #fafbfc;
	border: 2px solid #dfe1e6;
	box-sizing: border-box;
	border-radius: 3px;
	height: 44px;
`

export default Login

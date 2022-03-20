import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const Header = () => {
	return (
		<>
			<Main>
				<Icon
					src='https://a.trellocdn.com/prgb/dist/images/header-logo-spirit-loading.87e1af770a49ce8e84e3.gif'
					alt=''
				/>
				<Ul>
					<Li>
						Рабочие пространства
						<img src='https://img.icons8.com/material-sharp/24/000000/expand-arrow--v1.png' />
					</Li>
					<Li>
						Недавные{' '}
						<img src='https://img.icons8.com/material-sharp/24/000000/expand-arrow--v1.png' />
					</Li>
					<Li>
						В избранном{' '}
						<img src='https://img.icons8.com/material-sharp/24/000000/expand-arrow--v1.png' />
					</Li>
					<Li>
						Шаблоны{' '}
						<img src='https://img.icons8.com/material-sharp/24/000000/expand-arrow--v1.png' />
					</Li>
					<Li>Создать</Li>
				</Ul>
				<Button>
					<img src='https://img.icons8.com/ios-glyphs/30/000000/search--v1.png' />
					Поиск
				</Button>
			</Main>
			<ImageForm />
		</>
	)
}

const ImageForm = createGlobalStyle`
body{
  background-image: url('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2048x1280/3bee0047b8a24f948f11e1b6833bbf9a/photo-1647163641067-c7ee34cfcb80.jpg');
    background-repeat:no-repeat;
    background-size: cover;
}
`
const Main = styled.header`
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 55px;
	background-color: #535c53;
`
const Icon = styled.img`
	width: 75px;
	height: 31px;
`
const Ul = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	list-style: none;
	width: 950px;
	height: 20px;
`
const Li = styled.li`
	font-size: 14px;
	color: #ffffff;

	display: flex;
	justify-content: space-around;
	align-items: center;
	img {
		margin-top: 2px;
	}
`
const Button = styled.button`
	background-color: #5e6c84;
	width: 250px;
	height: 42px;
`

export default Header

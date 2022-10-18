import React from 'react'
import {
	Navbar,
	Button,
	Link,
	Text,
	styled,
} from '@nextui-org/react'

const TopNavbar = () => {
	return (
		<LayoutNavbar>
			<Navbar
				css={{
					maxWidth: 'xl',
					opacity: '0.9',
					backgroundColor: '$blue500',
				}}
				isBordered
				variant='static'
			>
				<Navbar.Brand>THE FRENCH TOUCH</Navbar.Brand>
				<Navbar.Content hideIn='xs'>
					<Navbar.Link href='#'>Features</Navbar.Link>
				</Navbar.Content>
			</Navbar>
		</LayoutNavbar>
	)
}

const LayoutNavbar = styled('div', {
	position: 'fixed',
	height: '4em',
	width: '100vw',
	zIndex: '100',
})

export default TopNavbar

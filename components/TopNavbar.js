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
			<StyledNavbar isBordered variant='sticky'>
				<Navbar.Brand>
					<Text b color='inherit' hideIn='xs'>
						THE FRENCH TOUCH
					</Text>
				</Navbar.Brand>
				<Navbar.Content
					color='$blue600'
					hideIn='xs'
					variant='highlight-solid'
				>
					<Navbar.Link href='#'>Portfolio</Navbar.Link>
					<Navbar.Link isActive href='#'>
						Services
					</Navbar.Link>
					<Navbar.Link href='#'>Contact Us</Navbar.Link>
				</Navbar.Content>
				<Navbar.Content></Navbar.Content>
			</StyledNavbar>
		</LayoutNavbar>
	)
}

const StyledNavbar = styled(Navbar, {
	maxWidth: 'xl',
})

const LayoutNavbar = styled('div', {
	position: 'fixed',
	width: '100vw',
	zIndex: '100',
})

export default TopNavbar

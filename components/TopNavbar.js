import React from 'react'
import { useEffect, useState } from 'react'
import {
	Navbar,
	Button,
	Link,
	Text,
	styled,
} from '@nextui-org/react'

const section = [
	{ name: 'Home', href: '#Home' },
	{ name: 'Portfolio', href: '#Portfolio' },
	{ name: 'Services', href: '#Services' },
	{ name: 'Quote', href: '#Quote' },
]
const TopNavbar = ({ activeSection }) => {
	return (
		<LayoutNavbar>
			<StyledNavbar isBordered='true' variant='sticky'>
				<Navbar.Brand>
					<Text b color='inherit' hideIn='xs'>
						THE FRENCH TOUCH
					</Text>
				</Navbar.Brand>
				<Navbar.Content
					enableCursorHighlight
					css={{
						gap: '20px',
					}}
					hideIn='xs'
					variant='highlight-solid'
					activeColor='neutral'
				>
					{section.map((page) => {
						let isActive = activeSection == page.name
						return (
							<Navbar.Link
								isActive={isActive}
								key={page.name}
								href={page.href}
							>
								{page.name}
							</Navbar.Link>
						)
					})}
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

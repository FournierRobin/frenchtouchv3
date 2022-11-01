import React, { useState } from 'react'
import {
	Navbar,
	Text,
	styled,
	Link,
} from '@nextui-org/react'

const section = [
	{ name: 'Home', href: '#Home' },
	/* { name: 'Portfolio', href: '#Portfolio' }, */
	{ name: 'Services', href: '#Services' },
	{ name: 'Quote', href: '#Quote' },
]
const TopNavbar = ({ activeSection }) => {
	const [menuToggle, setMenuToggle] = useState('false')
	const toggleTrue = () => {
		console.log(menuToggle)
		setMenuToggle('true')
	}
	return (
		<LayoutNavbar>
			<StyledNavbar
				isCompact
				isBordered='true'
				variant='sticky'
			>
				<Navbar.Toggle
					showIn='xs'
					aria-label='toggle navigation'
				/>
				<Link href='#Home'>
					<Navbar.Brand>
						<Text b color='default'>
							The French Touch Houston
						</Text>
					</Navbar.Brand>
				</Link>
				<Navbar.Content
					enableCursorHighlight
					css={{
						gap: '3rem',
					}}
					hideIn='xs'
					variant='underline-rounded'
					activeColor='neutral'
				>
					{section.map((page) => {
						let isActive = activeSection == page.name
						return (
							<Navbar.Link
								color='text'
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
				<Navbar.Collapse>
					{section.map((page) => {
						return (
							<Navbar.CollapseItem key={page.name}>
								<Link
									color='inherit'
									css={{
										minWidth: '100%',
									}}
									href={page.href}
								>
									{page.name}
								</Link>
							</Navbar.CollapseItem>
						)
					})}
				</Navbar.Collapse>
			</StyledNavbar>
		</LayoutNavbar>
	)
}

const StyledNavbar = styled(Navbar, {
	/* maxWidth: 'xl', */
})

const LayoutNavbar = styled('div', {
	position: 'fixed',
	width: '100vw',
	zIndex: '100',
})

export default TopNavbar

import React from 'react'
import { Text, styled } from '@nextui-org/react'

const Hero = ({ homeRef }) => {
	return (
		<StyledApp ref={homeRef} id='Home'>
			<Overlay>
				<HeroText css={{}} color='#ffffff' h1>
					Bienvenue
				</HeroText>
			</Overlay>
		</StyledApp>
	)
}

const StyledApp = styled('div', {
	dflex: 'center',
	position: 'relative',
	flexDirection: 'column',
	width: '100%',
	height: '100vh',
	alignItems: 'center',
	background: 'url("images/buffet.png")',
	backgroundSize: 'cover',
	backgroundPosition: 'top center',
})

const Overlay = styled('div', {
	dflex: 'center',
	position: 'relative',
	flexDirection: 'column',
	width: '100%',
	height: '100%',
	background: 'rgb(0, 0, 0, 0.2)',
})

const HeroText = styled(Text, {
	fontSize: '5em',
	'@xs': { fontSize: '10em' },
	'@sm': { fontSize: '12em' },
	'@md': { fontSize: '14em' },
	'@lg': { fontSize: '14em' },
})

export default Hero

import React from 'react'
import { useEffect } from 'react'
import { Text, styled } from '@nextui-org/react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = ({ homeRef }) => {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<StyledApp ref={homeRef} id='Home'>
			<Overlay>
				<HeroText
					data-aos='fade-zoom-in'
					data-aos-duration='1500'
					data-aos-easing='ease-in-sine'
					color='#FFF6F0'
					h1
				>
					BIENVENUE
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
	fontSize: '4em',
	'@xs': { fontSize: '8em' },
	'@sm': { fontSize: '11em' },
	'@md': { fontSize: '13em' },
	'@lg': { fontSize: '13em' },
})

export default Hero

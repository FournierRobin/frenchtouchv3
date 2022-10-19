import React from 'react'
import { Text, styled } from '@nextui-org/react'

const Hero = ({ homeRef }) => {
	return (
		<StyledApp ref={homeRef} id='Home'>
			<Overlay>
				<TextBox>
					<HeroText
						css={{
							paddingRight: '0.rem',
						}}
						size={80}
						color='#ffffff'
						h1
					>
						Bienvenue
					</HeroText>
					<Text color='#ffffff' h2>
						Want to sell your property faster at top dollar?{' '}
						<br />
						The French Touch is here for you! <br />
						From photography to staging, let us transform
						your House into a Home.
					</Text>

					<Text color='#ffffff' h4>
						We, Nausicaa and Morgane, two French natives
						living in Texas,
						<br /> will bring to your home the casual
						elegance but never ostentatious of the French
						touch.
					</Text>
				</TextBox>
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
	background: 'url("images/livingroomkitchen.png")',
	backgroundSize: 'cover',
	backgroundPosition: 'center center',
})

const Overlay = styled('div', {
	dflex: 'center',
	position: 'relative',
	flexDirection: 'column',
	width: '100%',
	height: '100%',
	background: 'rgb(0, 0, 0, 0.5)',
})

const HeroText = styled(Text, {
	textGradient: '45deg, $blue500 -20%, $blue900 60%',
	paddingRight: '0.2rem',
})

const TextBox = styled('div', {
	dflex: 'center',
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
	position: 'relative',
	flexDirection: 'column',
	width: '100%',
	height: '100%',
	paddingLeft: '10rem',
	paddingRight: '10rem',
	paddingTop: '8rem',
	fontSize: '20px',
})

export default Hero

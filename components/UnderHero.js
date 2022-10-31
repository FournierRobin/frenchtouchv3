import React from 'react'
import { Text, styled } from '@nextui-org/react'

const UnderHero = () => {
	return (
		<StyledApp id='UnderHome'>
			<Text color='#000000' h2>
				Want to sell your property faster at top dollar?{' '}
				<br />
				The French Touch is here for you! <br />
				From photography to staging, let us transform your
				House into a Home.
			</Text>

			<Text color='#000000' h4>
				We, Nausicaa and Morgane, two French natives living
				in Texas,
				<br /> will bring to your home the casual elegance
				but never ostentatious of the French touch.
			</Text>
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
	background: '$yellow900',
})

export default UnderHero

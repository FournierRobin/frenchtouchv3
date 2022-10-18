import React from 'react'
import { Text, styled, Image } from '@nextui-org/react'

const Portfolio = () => {
	return (
		<StyledDiv>
			<Text
				size={60}
				css={{
					textGradient:
						'45deg, $green600 -20%, $red800 100%',
					paddingRight: '0.2rem',
				}}
				h1
			>
				Portfolio
			</Text>
		</StyledDiv>
	)
}

const StyledDiv = styled('div', {
	dflex: 'center',
	width: '100%',
	height: '100vh',
	alignItems: 'center',
	background: '$yellow500',
})

export default Portfolio

import React from 'react'
import { Text, styled, Image } from '@nextui-org/react'

const Portfolio = ({ portfolioRef }) => {
	return (
		<StyledDiv ref={portfolioRef} id='Portfolio'>
			<Text
				size={60}
				css={{
					textGradient:
						'45deg, $green700 -20%, $red600 100%',
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

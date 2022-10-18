import React from 'react'
import { Text, styled, Image } from '@nextui-org/react'

const Quote = () => {
	return (
		<StyledDiv>
			<Text
				size={60}
				css={{
					textGradient:
						'45deg, $cyan600 -20%, $red800 100%',
					paddingRight: '0.2rem',
				}}
				h1
			>
				Quote
			</Text>
		</StyledDiv>
	)
}

const StyledDiv = styled('div', {
	dflex: 'center',
	width: '100%',
	height: '100vh',
	alignItems: 'center',
	background: '$green500',
})

export default Quote

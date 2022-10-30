import React from 'react'
import { Text, styled } from '@nextui-org/react'

const Footer = () => {
	return (
		<StyledDiv>
			<Text
				size={60}
				css={{
					textGradient:
						'45deg, $yellow600 -20%, $cyan800 100%',
					paddingRight: '0.2rem',
				}}
				h1
			>
				Footer
			</Text>
		</StyledDiv>
	)
}

const StyledDiv = styled('div', {
	dflex: 'center',
	width: '100%',
	height: '40vh',
	alignItems: 'center',
	background: '$purple500',
})

export default Footer

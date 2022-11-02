import React from 'react'
import { Text, styled, Image } from '@nextui-org/react'

const Footer = () => {
	return (
		<StyledDiv>
			<Text
				size={60}
				css={{
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
	background: '#6785B4',
})

export default Footer

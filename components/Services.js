import React from 'react'
import { Text, styled, Image } from '@nextui-org/react'

const Services = () => {
	return (
		<StyledDiv>
			<Text
				size={60}
				css={{
					textGradient:
						'45deg, $purple600 -20%, $pink600 100%',
				}}
				h1
			>
				Services
			</Text>
		</StyledDiv>
	)
}

const StyledDiv = styled('div', {
	dflex: 'center',
	width: '100%',
	height: '100vh',
	alignItems: 'center',
	background: '$blue500',
})

export default Services

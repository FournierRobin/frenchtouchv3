import React from 'react'
import { useRef } from 'react'
import { Text, styled } from '@nextui-org/react'

const Services = ({ servicesRef }) => {
	return (
		<StyledDiv ref={servicesRef} id='Services'>
			<Text
				size={60}
				css={{
					textGradient:
						'45deg, $purple600 -20%, $pink600 100%',
					paddingRight: '0.2rem',
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

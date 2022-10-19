import React from 'react'
import { Text, styled, Image } from '@nextui-org/react'

const ServiceCard = () => {
	return (
		<StyledDiv>
			<Text h1>Service Card</Text>
		</StyledDiv>
	)
}

const StyledDiv = styled('div', {
	width: '100%',
	height: '100vh',
	color: '$blue400',
})

export default ServiceCard

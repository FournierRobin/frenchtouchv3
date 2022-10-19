import React from 'react'
import { Text, styled, Image } from '@nextui-org/react'
import ServiceCard from './portfolio/ServiceCard'

const Portfolio = ({ portfolioRef }) => {
	return (
		<StyledDiv ref={portfolioRef} id='Portfolio'>
			<ServiceCard />
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

import React from 'react'
import { useEffect } from 'react'
import {
	Text,
	styled,
	Grid,
	Button,
} from '@nextui-org/react'
import ServiceCard from './services/ServiceCard'

import AOS from 'aos'
import 'aos/dist/aos.css'

const servicesList = [
	{
		name: 'Home Staging',
		description:
			'With professional home staging you can transform your house into a home from the moment the potential buyer steps in. This service is for vacant and model home.',
		price: '$1850+',
		photoSrc: '/images/dinnertable.png',
	},
	{
		name: 'Interior redesign stylist',
		description:
			'The house is still occupied but you want it to look good for futur buyers? We will come in and help you rearrange and declutter your home. Our goal is to increase the potential of your home on the market.',
		price: '$800+',
		photoSrc: '/images/windowlamp.png',
	},
	{
		name: 'Photos and/or Videos',
		description:
			'See the difference professional photography can make to your listing and to the image it portray to futur buyers. You can also enhance your buyers experience by adding a full tour of your house with our video service.',
		price: '$250+',
		photoSrc: '/images/photograph.png',
	},
]

const Services = ({ servicesRef, setServiceClicked }) => {
	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<StyledDiv ref={servicesRef} id='Services'>
			<Text
				css={{ marginTop: '2rem', color: '$cyan700' }}
				h1
			>
				Our Services
			</Text>
			<StyledGridContainer
				data-aos='zoom-out-left'
				data-aos-duration='1500'
				gap={10}
				justify='center'
			>
				{servicesList.map((service) => {
					return (
						<Grid key={service.name} xs={6}>
							<ServiceCard
								name={service.name}
								description={service.description}
								price={service.price}
								photoSrc={service.photoSrc}
								setServiceClicked={setServiceClicked}
							/>
						</Grid>
					)
				})}
			</StyledGridContainer>
		</StyledDiv>
	)
}

const StyledDiv = styled('div', {
	dflex: 'center',
	justifyContent: 'flex-start',
	width: '100%',
	height: '150vh',
	padding: '4rem',
	alignItems: 'center',
	background: '$yellow900',
	flexDirection: 'column',
})

const StyledGridContainer = styled(Grid.Container, {
	height: '150vh',
})

export default Services

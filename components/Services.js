import React from 'react'
import { useEffect } from 'react'
import {
	Text,
	styled,
	Grid,
	Button,
} from '@nextui-org/react'
import ServiceCard from './services/ServiceCard'
import ServiceRComponent from './services/ServiceRComponent'
import ServiceLComponent from './services/ServiceLComponent'

import AOS from 'aos'
import 'aos/dist/aos.css'

const servicesList = [
	{
		name: 'Home Staging',
		description:
			'With professional home staging you can transform your house into a home from the moment the potential buyer steps in. This service is for vacant and model home.',
		price: '$1850 + 2 months staging',
		photo1: '/images/entryway.png',
		photo2: '/images/dinnertable.png',
	},
	{
		name: 'Interior Redesign Stylist',
		description:
			'The house is still occupied but you want it to look good for futur buyers? We will come in and help you rearrange and declutter your home. Our goal is to increase the potential of your home on the market.',
		price: '$800+',
		photo1: '/images/dinnertable2.png',
		photo2: '/images/livingroomkitchen.png',
	},
	{
		name: 'Photos And/Or Videos',
		description:
			'See the difference professional photography can make to your listing and to the image it portray to futur buyers. You can also enhance your buyers experience by adding a full tour of your house with our video service.',
		price: '$250+',
		photo1: '/images/bedroomplant.png',
		photo2: '/images/photograph2.png',
	},
]

const Services = ({ servicesRef, setServiceClicked }) => {
	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<StyledDiv
			ref={servicesRef}
			id='Services'
			className='serviceDiv'
		>
			<Text
				css={{
					marginTop: '2rem',
					fontSize: '4em',
					color: '$blackColor',
					textAlign: 'center',
				}}
				h1
			>
				Our Services
			</Text>
			<ServiceRComponent
				services={servicesList[0]}
				setServiceClicked={setServiceClicked}
			/>
			<ServiceLComponent
				services={servicesList[1]}
				setServiceClicked={setServiceClicked}
			/>
			<ServiceRComponent
				services={servicesList[2]}
				setServiceClicked={setServiceClicked}
			/>
		</StyledDiv>
	)
}

const StyledDiv = styled('div', {
	dflex: 'center',
	justifyContent: 'flex-start',
	width: '100%',
	padding: '4rem',
	alignItems: 'center',
	background: '$background',
	flexDirection: 'column',
})

const StyledGridContainer = styled(Grid.Container, {
	height: '150vh',
})

export default Services

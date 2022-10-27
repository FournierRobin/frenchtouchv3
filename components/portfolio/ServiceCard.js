import React from 'react'
import {
	Text,
	styled,
	Card,
	Col,
	Row,
	Button,
} from '@nextui-org/react'
import { useHover } from 'react-aria'
import { useState } from 'react'

function wait(ms) {
	var start = new Date().getTime()
	var end = start
	while (end < start + ms) {
		end = new Date().getTime()
	}
}

const ServiceCard = (props) => {
	let [events, setEvents] = useState([])
	let { hoverProps, isHovered } = useHover({
		onHoverStart: (e) => setEvents((events) => [...events]),
		onHoverEnd: (e) => setEvents((events) => [...events]),
	})

	return (
		<div className='flip-card'>
			<div className='flip-card-inner'>
				<Card
					className='flip-card-front'
					variant='flat'
					isHoverable
					{...hoverProps}
				>
					{/* Card Front */}
					<Card.Header
						css={{
							position: 'absolute',
							zIndex: 1,
							top: 5,
						}}
					>
						<Col>
							<Text h2 color='white'>
								{props.name}
							</Text>
						</Col>
					</Card.Header>

					<Card.Body
						css={{
							p: 0,
						}}
					>
						<Card.Image
							src={props.photoSrc}
							width='100%'
							height='100%'
							objectFit='cover'
							alt='Card example background'
							css={{
								filter: 'brightness(70%)',
								bgBlur: '#78a3e469',
							}}
						/>
					</Card.Body>

					<Card.Footer
						isBlurred
						css={{
							position: 'absolute',
							bgBlur: '#78a3e469',
							borderTop:
								'$borderWeights$light solid $gray800',
							bottom: 0,
							zIndex: 1,
						}}
					>
						<Row css={{ offset: '200px' }} justify='center'>
							<Button flat auto rounded color='primary'>
								<Text
									css={{ color: 'white' }}
									size={20}
									weight='bold'
									transform='uppercase'
								>
									{props.price}
								</Text>
							</Button>
						</Row>
					</Card.Footer>
				</Card>

				{/* Card Back */}
				<Card
					className='flip-card-back'
					variant='flat'
					isHoverable
					{...hoverProps}
				>
					<Card.Header
						css={{
							position: 'absolute',
							zIndex: 1,
							top: 5,
						}}
					>
						<Col>
							<Text h4 color='white'>
								{props.description}
							</Text>
						</Col>
					</Card.Header>

					<Card.Body
						css={{
							p: 0,
						}}
					>
						<Card.Image
							src='/images/bedroomplant.png'
							width='100%'
							height='100%'
							objectFit='cover'
							alt='Card example background'
							css={{
								filter: 'brightness(70%)',
								bgBlur: '#78a3e469',
							}}
						/>
					</Card.Body>

					<Card.Footer
						isBlurred
						css={{
							position: 'absolute',
							bgBlur: '#78a3e469',
							borderTop:
								'$borderWeights$light solid $gray800',
							bottom: 0,
							zIndex: 1,
						}}
					>
						<Row css={{ offset: '200px' }} justify='center'>
							<Button flat auto rounded color='primary'>
								<Text
									css={{ color: 'white' }}
									size={20}
									weight='bold'
									transform='uppercase'
								>
									{props.price}
								</Text>
							</Button>
						</Row>
					</Card.Footer>
				</Card>
			</div>
		</div>
	)
}

const StyledDiv = styled('div', {})

export default ServiceCard

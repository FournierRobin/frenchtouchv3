import React from 'react'
import {
	Text,
	styled,
	Card,
	Col,
	Row,
	Button,
} from '@nextui-org/react'

const ServiceCard = (props) => {
	return (
		<Card css={{ w: '100%' }} variant='flat' isHoverable>
			<Card.Header
				css={{ position: 'absolute', zIndex: 1, top: 5 }}
			>
				<Col>
					<Text h2 color='white'>
						{props.name}
					</Text>
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
					borderTop: '$borderWeights$light solid $gray800',
					bottom: 0,
					zIndex: 1,
				}}
			>
				<Row>
					<Col>
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
					</Col>
				</Row>
			</Card.Footer>
		</Card>
	)
}

const StyledDiv = styled('div', {})

export default ServiceCard

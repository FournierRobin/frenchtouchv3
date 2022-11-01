import React from 'react'
import {
	Text,
	styled,
	Card,
	Col,
	Row,
	Button,
	Link,
} from '@nextui-org/react'

const ServiceCard = (props) => {
	return (
		<Card
			className='flip-card-front'
			variant='flat'
			isHoverable
			css={{ mw: '300px', mh: '300px' }}
		>
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
					borderTop: '$borderWeights$light solid $gray800',
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
					<Link href='#Quote'>
						<Button
							flat
							auto
							rounded
							onPress={() =>
								props.setServiceClicked(props.name)
							}
							color='primary'
						>
							<Text
								css={{ color: 'white' }}
								size={20}
								weight='bold'
								transform='uppercase'
							>
								Get a quote
							</Text>
						</Button>
					</Link>
				</Row>
			</Card.Footer>
		</Card>
	)
}

export default ServiceCard

import React from 'react'
import {
	Text,
	Image,
	styled,
	Container,
	Row,
	Col,
	Spacer,
	Link,
} from '@nextui-org/react'
import { CaretRight } from 'react-iconly'

const info = {
	title: 'INTERIOR REDESIGN STYLIST',
	text: 'The house is still occupied but you want it to look good for futur buyers? We will come in and help you rearrange and declutter your home. Our goal is to increase the potential of your home on the market.',
	price: '$800+',
}

const ServiceLComponent = (props) => {
	return (
		<StyledContainer>
			<Row>
				<Col>
					<Image
						width={400}
						height={450}
						src={props.services.photo1}
						alt='img2'
						objectFit='cover'
					/>
					<Spacer y={4} />
					<StyledLink
						href='#Quote'
						onPress={() =>
							props.setServiceClicked(props.services.name)
						}
					>
						<Text h3>Get a quote</Text>
						<Spacer x={1} />
						<CaretRight
							filled
							set='bold'
							primaryColor='black'
						/>
					</StyledLink>
				</Col>
				<Spacer x={1.5} />
				<Col>
					<Image
						width={400}
						height={600}
						src={props.services.photo2}
						alt='img1'
						objectFit='cover'
					/>
				</Col>
				<Spacer x={1.5} />
				<Col
					css={{
						borderLeft: '1px solid black',
					}}
				>
					<PaddedDiv>
						<Text h1 css={{ tt: 'uppercase' }}>
							{props.services.name}.
						</Text>
						<Spacer y={2} />
						<Text h3>{props.services.description}</Text>
						<Spacer y={2} />
						<Text h2>{props.services.price}</Text>
					</PaddedDiv>
				</Col>
			</Row>
		</StyledContainer>
	)
}

const StyledContainer = styled(Container, {
	width: '100%',
	paddingTop: '10em',
})

const PaddedDiv = styled('div', {
	marginLeft: '2em',
})

const StyledLink = styled(Link, {
	borderBottom: '1px solid black',
})

export default ServiceLComponent

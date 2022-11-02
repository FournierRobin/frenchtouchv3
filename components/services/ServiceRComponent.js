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
	title: 'Home Staging',
	text: 'With professional home staging you can transform your house into a home from the moment the potential buyer steps in. This package includes consultation, staging, photos and videos by our profesional photographer. This servie is for vacant and model home.',
	price: '$1850+ 2 months staging',
}

const ServiceRComponent = (props) => {
	return (
		<StyledContainer>
			<Row>
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
				<Spacer x={1.5} />
				<Col>
					<Image
						className='photo2'
						width={400}
						height={600}
						src={props.services.photo1}
						alt='img1'
						objectFit='cover'
					/>
				</Col>
				<Spacer x={1.5} />
				<Col
					className='imageGetQuote'
					css={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
					}}
				>
					<Image
						width={400}
						height={450}
						src={props.services.photo2}
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
						<Text h2>Get a quote</Text>
						<Spacer x={1} />
						<CaretRight
							filled
							set='bold'
							primaryColor='black'
						/>
					</StyledLink>
				</Col>
			</Row>
		</StyledContainer>
	)
}

const StyledContainer = styled(Container, {
	width: '100%',
	paddingTop: '7em',
	paddingBottom: '3em',
})

const PaddedDiv = styled('div', {
	marginLeft: '2em',
})

const StyledLink = styled(Link, {
	borderBottom: '1px solid black',
})

export default ServiceRComponent

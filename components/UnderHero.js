import React from 'react'
import {
	Text,
	styled,
	Image,
	Container,
	Row,
	Spacer,
	Grid,
	Col,
} from '@nextui-org/react'

const UnderHero = () => {
	return (
		<StyledApp id='UnderHome'>
			<Grid.Container>
				<Grid md={5}>
					<Image
						src='/images/windowlamp.png'
						objectFit='cover'
						alt='Window Lamp'
						width={1000}
						height={500}
					/>
				</Grid>
				<Spacer x={2} />
				<Grid md={5}>
					<Col>
						<Row>
							<Text color='#000000' h2>
								Want to sell your property faster at top
								dollar? <br />
								The French Touch is here for you ! <br />
								From photography to staging, let us
								transform your House into a Home.
							</Text>
						</Row>
						<Row>
							<Text color='#000000' h4>
								We, Nausicaa and Morgane, two French natives
								living in Texas,
								<br /> will bring to your home the casual
								elegance but never ostentatious of the
								French touch.
							</Text>
						</Row>
					</Col>
				</Grid>
			</Grid.Container>
		</StyledApp>
	)
}

const StyledApp = styled('div', {
	dflex: 'center',
	position: 'relative',
	flexDirection: 'column',
	width: '100%',
	paddingTop: '10em',
	paddingBottom: '10em',
	paddingLeft: '10em',

	alignItems: 'center',
	background: '$yellow900',
})

export default UnderHero

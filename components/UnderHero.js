import React from 'react'
import {
	Text,
	styled,
	Image,
	Row,
	Spacer,
	Grid,
	Col,
} from '@nextui-org/react'

const UnderHero = () => {
	return (
		<StyledApp id='UnderHome'>
			<Grid.Container>
				<Grid sm={5}>
					<Image
						src='/images/windowlamp.webp'
						objectFit='cover'
						alt='Window Lamp'
						css={{
							paddingLeft: '2em',
						}}
						className='imgunderhome'
					/>
				</Grid>
				<Spacer x={2} />
				<Grid sm={5}>
					<Col
					css={{
						borderLeft: '1px solid black',
						paddingLeft: '2em',
						paddingRight: '2em',
					}} >
						<Row>
							<Text color='#000000' h1>
								Want to sell your property faster at top
								dollar? <br />
							</Text>
							</Row>
							<Row>
							<Text color='#000000' h2>
								The French Touch is here for you ! <br />
								From photography to staging, let us
								transform your House into a Home.
							</Text>
						</Row>
						<Row>
							<Text color='#000000' h3>
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
	paddingBottom: '4em',
	paddingLeft: '10em',
	alignItems: 'center',
	background: '$background',
	textAlign: 'justify',
})

export default UnderHero

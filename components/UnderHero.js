import React from 'react'
import {
	Text,
	styled,
	Row,
	Spacer,
	Grid,
	Col,
} from '@nextui-org/react'
import Image from 'next/image'

const UnderHero = () => {
	return (
		<StyledApp id='UnderHome'>
			<Grid.Container>
				<Grid xs={12} sm={5}>
					<div className='divimgunderhome' >
						<Image
							className='imgunderhome'
							src='/images/windowlamp.webp'
							objectFit='cover'
							alt='Window Lamp'
							width={500}
							height={700}
							layout='responsive'
							sizes="(max-width: 768px) 100vw,
							(max-width: 1200px) 50vw,
							33vw"
						/>
					</div>
				</Grid>
				<Spacer x={2} className='spacerunderhome' />
				<Grid xs={12} sm={5}>
					<Col
					css={{
						borderLeft: '1px solid black',
						paddingLeft: '2em',
						paddingRight: '2em',
						justifyContent: 'center',
						flexDirection: 'column',
						display: 'flex'
					}} >
						<Row>
							<Text color='#000000' h1 className='UHtext1'>
								Want to sell your property faster at top
								dollar? <br />
							</Text>
							</Row>
							<Row>
							<Text color='#000000' h2 className='UHtext2'>
								The French Touch is here for you ! <br />
								From photography to staging, let us
								transform your House into a Home.
							</Text>
						</Row>
						<Row>
							<Text color='#000000' h3 className='UHtext3'>
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

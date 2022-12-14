import React from 'react'
import { useState, useEffect } from 'react'
import {
	Checkbox,
	Button,
	styled,
	Input,
	Spacer,
	Dropdown,
	Text,
	Container,
	Col,
	Row,
	Image,
} from '@nextui-org/react'

const typeOfServicesList = [
	{ key: 'Home Staging' },
	{ key: 'Interior Redesign Stylist ' },
	{ key: 'Photos And/Or Videos' },
]

const jobList = [
	{ key: 'Realtor' },
	{ key: 'Home Owner' },
	{ key: 'Investor' },
	{ key: 'Home Builder' },
	{ key: 'Other' },
]

const quoteListP1 = [
	{ key: 'familyName', placeholder: 'Full Name' },
	{ key: 'email', placeholder: 'E-Mail' },
	{ key: 'phoneNumber', placeholder: 'Phone Number' },
]

const quoteListP2 = [
	{ key: 'propertyAdress', placeholder: 'Property Adress' },
	{
		key: 'estimatedListPrice',
		placeholder: 'Estimated List Price',
	},
	{
		key: 'approximateSqftHome',
		placeholder: 'Approximate Square Footage of the Home',
	},
	{
		key: 'timelineDeadline',
		placeholder:
			'Timeline To Have Project/Staging Completed By',
	},
	{
		key: 'moreAboutProject',
		placeholder: 'Tell Us More About Your Project',
	},
]

const Quote = ({
	quoteRef,
	serviceClicked,
	setServiceClicked,
}) => {
	const [quoteForm, setQuoteForm] = useState({
		familyName: '',
		email: '',
		phoneNumber: '',
		typeOfServices: 'Home Staging',
		jobList: 'Who are you...',
		addPhotos: '',
		propertyAdress: '',
		estimatedListPrice: '',
		approximateSqftHome: '',
		timelineDeadline: '',
		moreAboutProject: '',
	})

	const handleChange = (event) => {
		setQuoteForm({
			...quoteForm,
			[event.target.name]: event.target.value,
		})
	}

	const sendForm = (event) => {
		event.preventDefault()
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(quoteForm),
		}
		fetch('/mail', requestOptions).then((data) => {
			/* console.log(data) */
		})
	}

	useEffect(() => {
		quoteForm.typeOfServices = serviceClicked
	})

	return (
		<StyledDiv
			ref={quoteRef}
			id='Quote'
			className='quoteDiv'
		>
			<Text
				css={{
					marginTop: '2rem',
					fontSize: '4em',
					color: '$blackColor',
					paddingBottom: '1em',
				}}
				h1
			>
				Quote
			</Text>
			<Container >
				<Row css={{height: '70vh'}}>
					<Spacer
						x={5}
						css={{
							display: 'none',
							'@xs': { display: 'none' },
							'@sm': {
								display: 'flex',
							},
							'@md': {
								display: 'flex',
							},
							'@lg': {
								display: 'flex',
							},
						}}
					/>
					<Col>
						<form onSubmit={sendForm}>
							{quoteListP1.map((element) => {
								return (
									<div key={element.key}>
										<Input
											underlined
											labelPlaceholder={element.placeholder}
											name={element.key}
											value={quoteForm[element.key]}
											onChange={handleChange}
										/>
										<Spacer y={1.5} />
									</div>
								)
							})}
							<Dropdown>
								<Dropdown.Button
									color='blackColor'
									light
									flat
								>
									{quoteForm.typeOfServices}
								</Dropdown.Button>
								<Dropdown.Menu
									aria-label='Single selection actions'
									color='blackColor'
									disallowEmptySelection
									selectionMode='single'
									name='typeOfServices'
									selectedKeys={quoteForm.typeOfServices}
									onSelectionChange={(event) => {
										setServiceClicked(event.anchorKey)
										setQuoteForm({
											...quoteForm,
											['typeOfServices']: event.anchorKey,
										})
									}}
								>
									{typeOfServicesList.map((service) => {
										return (
											<Dropdown.Item
												key={service.key}
												withDivider
											>
												{service.key}
											</Dropdown.Item>
										)
									})}
								</Dropdown.Menu>
							</Dropdown>
							<Spacer y={1.5} />

							<Checkbox
								isDisabled={
									quoteForm.typeOfServices ==
									'Photos And/Or Videos'
								}
								color='primary'
								name='addPhotos'
								defaultSelected={quoteForm.addPhotos}
								size='xs'
								onChange={(event) =>
									setQuoteForm({
										...quoteForm,
										['addPhotos']: event,
									})
								}
							>
								Add Photos and Videos (+$150)
							</Checkbox>
							<Spacer y={1.5} />

							<Dropdown>
								<Dropdown.Button
									color='blackColor'
									light
									flat
								>
									{quoteForm.jobList}
								</Dropdown.Button>
								<Dropdown.Menu
									aria-label='Single selection actions'
									color='blackColor'
									disallowEmptySelection
									selectionMode='single'
									name='jobList'
									selectedKeys={quoteForm.jobList}
									onSelectionChange={(event) =>
										setQuoteForm({
											...quoteForm,
											['jobList']: event.anchorKey,
										})
									}
								>
									{jobList.map((service) => {
										return (
											<Dropdown.Item
												key={service.key}
												withDivider
											>
												{service.key}
											</Dropdown.Item>
										)
									})}
								</Dropdown.Menu>
							</Dropdown>
							<Spacer y={1.5} />

							{quoteListP2.map((element) => {
								return (
									<div key={element.key}>
										<Input
											underlined
											labelPlaceholder={element.placeholder}
											name={element.key}
											value={quoteForm[element.key]}
											onChange={handleChange}
										/>
										<Spacer y={1.5} />
									</div>
								)
							})}
							<Button auto color='secondary' type='submit'>
								Submit Quote
							</Button>
						</form>
					</Col>
					<Spacer
						x={6}
						css={{
							display: 'none',
							'@xs': { display: 'none' },
							'@sm': {
								display: 'flex',
							},
							'@md': {
								display: 'flex',
							},
							'@lg': {
								display: 'flex',
							},
						}}
					/>
					<StyledColImg css= {{
						background: 'url("images/tapispiano2.webp")', 
						height: '100%',
						backgroundPosition: 'center center',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover'
					}}>
					</StyledColImg>
				</Row>
			</Container>
		</StyledDiv>
	)
}

const StyledDiv = styled('div', {
	dflex: 'center',
	flexDirection: 'column',
	width: '100%',
	height: '100vh',
	alignItems: 'center',
	background: '$background',
	padding: '2em',
	marginBottom: '4em',
	'@xs': { display: 'flex', flexDirection: 'column' },
	'@sm': { display: 'flex' },
	'@md': { display: 'flex' },
	'@lg': { display: 'flex' },
})

const StyledImage = styled(Image, {
	display: 'none',
	'@xs': { display: 'none' },
	'@sm': { aspectRatio: '4/8', display: 'flex' },
	'@md': { aspectRatio: '5/8', display: 'flex' },
	'@lg': { aspectRatio: '5/8', display: 'flex' },
})

const StyledColImg = styled(Col, {
	display: 'none',
	'@xs': { display: 'none' },
	'@sm': { display: 'flex' },
	'@md': { display: 'flex' },
	'@lg': { display: 'flex' },
})

export default Quote

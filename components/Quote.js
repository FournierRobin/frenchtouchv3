import React from 'react'
import { useState } from 'react'
import {
	Textarea,
	Button,
	styled,
	Input,
	Spacer,
} from '@nextui-org/react'

const Quote = ({ quoteRef }) => {
	const [quoteForm, setQuoteForm] = useState({
		part1: '',
		part2: '',
	})

	const handleChange = (event) => {
		setQuoteForm({
			...quoteForm,
			[event.target.name]: event.target.value,
		})
	}

	const sendForm = (event) => {
		event.preventDefault()
		console.log(quoteForm)

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(quoteForm),
		}
		fetch('/mail', requestOptions).then((data) => {
			/* console.log(data) */
		})
	}

	return (
		<StyledDiv ref={quoteRef} id='Quote'>
			<form onSubmit={sendForm}>
				<Input
					underlined
					labelPlaceholder='First part'
					name='part1'
					value={quoteForm.part1}
					onChange={handleChange}
				/>
				<Spacer y={1.5} />
				<Input
					underlined
					labelPlaceholder='Second part'
					name='part2'
					value={quoteForm.part2}
					onChange={handleChange}
				/>
				<Spacer y={1.5} />
				<Button auto type='submit'>
					Send Message
				</Button>
			</form>
		</StyledDiv>
	)
}

const StyledDiv = styled('div', {
	dflex: 'center',
	width: '100%',
	height: '100vh',
	alignItems: 'center',
	background: '$green500',
})

export default Quote

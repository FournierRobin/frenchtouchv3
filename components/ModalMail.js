import React from 'react'
import {
	Text,
	styled,
	Button,
	Modal,
	Input,
} from '@nextui-org/react'
import { useState } from 'react'
import { Message, Send } from 'react-iconly'

const ModalMail = () => {
	const [mailModalVisible, setMailModalVisible] =
		useState(false)
	const openModalHandler = () => setMailModalVisible(true)
	const closeModalHandler = () => setMailModalVisible(false)

	const [quickMessageForm, setQuickMessageForm] = useState({
		email: '',
		message: '',
	})

	const handleChange = (event) => {
		console.log(event)
		setQuickMessageForm({
			...quickMessageForm,
			[event.target.name]: event.target.value,
		})
	}

	const sendForm = (event) => {
		event.preventDefault()
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(quickMessageForm),
		}
		fetch('/quickmail', requestOptions).then((data) => {
			console.log(data)
		})
	}

	return (
		<div className='modal-mail'>
			<Button
				rounded
				shadow
				color='secondary'
				onPress={openModalHandler}
				icon={<Message filled />}
			>
				Quick mail
			</Button>

			<Modal
				closeButton
				aria-labelledby='mail-modal'
				open={mailModalVisible}
				onClose={closeModalHandler}
			>
				<form onSubmit={sendForm}>
					<Modal.Header>
						<Text id='mail-modal' size={18}>
							Send us a quick message !
						</Text>
					</Modal.Header>
					<Modal.Body>
						<Input
							clearable
							bordered
							fullWidth
							color='primary'
							size='lg'
							placeholder='Your email'
							name='email'
							value={quickMessageForm.email}
							onChange={handleChange}
						/>
						<Input
							clearable
							bordered
							fullWidth
							color='primary'
							size='lg'
							placeholder='Your message'
							name='message'
							value={quickMessageForm.message}
							onChange={handleChange}
						/>
					</Modal.Body>
					<Modal.Footer css={{ justifyContent: 'center' }}>
						<Button icon={<Send filled />} type='submit'>
							Send message
						</Button>
					</Modal.Footer>
				</form>
			</Modal>
		</div>
	)
}

export default ModalMail

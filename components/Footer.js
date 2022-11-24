import React from 'react'
import { Text, styled, Link, Image } from '@nextui-org/react'

const Footer = () => {
	return (
		<FooterDiv>
			<RightDiv className='footerrightdiv'>
				<Link color="text" href='#Home'>Home</Link>
				<Link color="text" href='#Services'>Services</Link>
				<Link color="text" href='#Quote'>Quote</Link>
			</RightDiv>
			<BorderDiv></BorderDiv>
			<LeftDiv className='footerleftdiv'>
				<Text className='footertextmail' h3>thefrenchtouchhouston@gmail.com</Text>
				<Text h3>+1(346)216-7677</Text>
				<Text h3>+1(832)945-0821</Text>
				<Link href='https://www.instagram.com/thefrenchtouchhouston/'>
					<Image
						width={35}
						height={35}
						src='/images/instalogo.png'
						alt='instalogo'
						objectFit='contain'
					/>
				</Link>
			</LeftDiv>
		</FooterDiv>
	)
}

const FooterDiv = styled('div', {
	display: 'flex',
	flexDirection: 'row',
	width: '100%',
	height: '40vh',
	alignItems: 'center',
	justifyContent: 'center',
	background: '#6785B4',
})

const RightDiv = styled('div', {
	width: '50%',
	justifyContent: 'center',
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'column',
	fontSize: '30px'
})

const LeftDiv = styled('div', {
	width: '50%',
	justifyContent: 'center',
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'column'
	
})

const BorderDiv = styled('div', {
	height: '30vh',
	borderLeft: '1px solid black',
})


export default Footer

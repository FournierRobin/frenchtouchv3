import Head from 'next/head'
import Hero from '../components/Hero'
import TopNavbar from '../components/TopNavbar'
import Services from '../components/Services'
import Quote from '../components/Quote'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'
import Flask from '../components/Flask'
import { useState, useEffect, useRef } from 'react'
import { styled } from '@nextui-org/react'

export default function Home() {
	const homeRef = useRef()
	/* const portfolioRef = useRef() */
	const servicesRef = useRef()
	const quoteRef = useRef()

	const [yHome, setYhome] = useState()
	/* const [yPort, setYport] = useState() */
	const [yServ, setYserv] = useState()
	const [yQuote, setYquote] = useState()

	const getPosition = () => {
		setYhome(homeRef.current.offsetTop)
		/* setYport(portfolioRef.current.offsetTop) */
		setYserv(servicesRef.current.offsetTop)
		setYquote(quoteRef.current.offsetTop)
	}

	const [scrollY, setScrollY] = useState(0)
	const [activeSection, setActiveSection] = useState('Home')

	const [serviceClicked, setServiceClicked] = useState('')

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY)
		}

		const handleSectionActive = () => {
			let position = window.scrollY + 1
			if (position >= yHome && position < yServ) {
				setActiveSection('Home')
				/* } else if (position >= yPort && position < yServ) {
				setActiveSection('Portfolio') */
			} else if (position >= yServ && position < yQuote) {
				setActiveSection('Services')
			} else if (position >= yQuote) {
				setActiveSection('Quote')
			}
		}

		getPosition()
		handleScroll()
		handleSectionActive()
		window.addEventListener('scroll', handleScroll)
		window.addEventListener('resize', getPosition)
		window.addEventListener('scroll', handleSectionActive)
		window.addEventListener('resize', handleSectionActive)
		return () => {
			window.removeEventListener('scroll', handleScroll)
			window.removeEventListener(
				'scroll',
				handleSectionActive
			)
		}
	}, [setActiveSection, yHome, yServ, yQuote])

	return (
		<Layout>
			<Head>
				<title>Next French Touch</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<TopNavbar activeSection={activeSection} />
			<Hero homeRef={homeRef} />
			{/* <Portfolio portfolioRef={portfolioRef} /> */}
			<Services servicesRef={servicesRef} />
			<Quote quoteRef={quoteRef} />
			<Footer />
		</Layout>
	)
}

const Layout = styled('div', {
	width: '100%',
	scrollBehavior: 'smooth',
})

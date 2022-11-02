// 1. import `NextUIProvider` component
import {
	NextUIProvider,
	createTheme,
} from '@nextui-org/react'
import styles from '../styles/globals.css'
import '../styles/card.css'

const theme = createTheme({
	type: 'light',
	theme: {
		colors: {
			background: '#FFF6F0',
			primary: '#000000',
			secondary: '#6785B4',
			blueNav: '#6785B4',
			whiteColor: '#FFFFFF',
			blackColor: '#000000',
		},
		fonts: {
			sans: 'Playfair Display',
			/* Bienvenue: 'Playfair Display',
			&: 'Encode Sans SC', */
		},
	},
})

function MyApp({ Component, pageProps }) {
	return (
		<NextUIProvider theme={theme} style={styles}>
			<Component {...pageProps} />
		</NextUIProvider>
	)
}

export default MyApp

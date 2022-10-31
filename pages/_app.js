// 1. import `NextUIProvider` component
import {
	NextUIProvider,
	createTheme,
} from '@nextui-org/react'
import styles from '../styles/globals.css'
import '../styles/card.css'

const theme = createTheme({
	type: 'dark',
	theme: {
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

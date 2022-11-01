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
		fonts: {
			sans: 'Playfair Display',
			/* Bienvenue: 'Playfair Display',
			&: 'Encode Sans SC', */
		},
		/* colors: {
			primaryLight: '$yellow200',
			secondaryLight: '$blue200',
		}, */
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

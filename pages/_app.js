// 1. import `NextUIProvider` component
import {
	NextUIProvider,
	createTheme,
} from '@nextui-org/react'
import styles from '../styles/globals.css'

const theme = createTheme({
	type: 'dark',
	theme: {
		breakpoints: {
			lg: '4000px',
			xl: '4000px',
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

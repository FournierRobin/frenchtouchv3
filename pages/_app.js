// 1. import `NextUIProvider` component
import {
	NextUIProvider,
	createTheme,
} from '@nextui-org/react'

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
		<NextUIProvider theme={theme}>
			<Component {...pageProps} />
		</NextUIProvider>
	)
}

export default MyApp

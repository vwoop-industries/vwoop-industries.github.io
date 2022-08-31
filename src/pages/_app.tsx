import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import { ThemeProvider } from 'next-themes';

function _app({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class" value={{ dark: 'dark', light: 'light' }}>
			<Header />
			<div className="mx-auto max-w-4xl px-4">
				<Component {...pageProps} />
			</div>
		</ThemeProvider>
	);
}

export default _app;

import Head from "next/head";
import "../styles/global.css";
export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta charset="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="Crep Chat - The Global Social Platform for Sneakerheads"
				/>
			</Head>
			<Component {...pageProps} />;
		</>
	);
}

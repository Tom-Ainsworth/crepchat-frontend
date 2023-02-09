import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charset="utf-8" />
				<link rel="icon" href="%PUBLIC_URL%/favicon-16x16.ico" />
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
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

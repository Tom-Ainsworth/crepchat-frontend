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

				{/* manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/ */}

				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
					integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
					crossorigin="anonymous"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="%PUBLIC_URL%/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="%PUBLIC_URL%/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="%PUBLIC_URL%/favicon-16x16.png"
				/>
				<link
					rel="manifest"
					href="%PUBLIC_URL%/site.webmanifest"
					crossorigin="use-credentials"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap"
					rel="stylesheet"
				/>
				<script
					src="https://kit.fontawesome.com/f81afa6388.js"
					crossorigin="anonymous"
					defer
				></script>

				{/* Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`. */}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

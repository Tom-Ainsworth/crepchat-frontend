import Head from "next/head";
import Layout from "../components/layout";
import NavBar from "../components/NavBar";
import { CurrentUserProvider } from "../src/contexts/CurrentUserContext";
import { ProfileDataProvider } from "../src/contexts/ProfileDataContext";
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
				<title>Crep Chat</title>
			</Head>
			<CurrentUserProvider>
				<ProfileDataProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ProfileDataProvider>
			</CurrentUserProvider>
		</>
	);
}

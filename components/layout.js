import NavBar from "./NavBar";
import styles from "../styles/App.module.css";
import {
	CurrentUserProvider,
	useCurrentUser,
} from "../src/contexts/CurrentUserContext";
import { Container } from "react-bootstrap";
import { ProfileDataProvider } from "../src/contexts/ProfileDataContext";

export default function Layout({ children }) {
	const currentUser = useCurrentUser();

	return (
		<CurrentUserProvider>
			<ProfileDataProvider>
				<NavBar />
				<Container>
					<main
						className={
							currentUser
								? styles.MainLoggedIn
								: styles.MainLoggedOut
						}
					>
						{children}
					</main>
				</Container>
			</ProfileDataProvider>
		</CurrentUserProvider>
	);
}

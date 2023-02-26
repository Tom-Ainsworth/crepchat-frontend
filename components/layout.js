import NavBar from "./NavBar";
import styles from "../styles/App.module.css";
import { useCurrentUser } from "../src/contexts/CurrentUserContext";
import { Container } from "react-bootstrap";

export default function Layout({ children }) {
	const currentUser = useCurrentUser();

	return (
		<>
			<NavBar />
			<Container>
				<main
					className={
						currentUser ? styles.MainLoggedIn : styles.MainLoggedOut
					}
				>
					{children}
				</main>
			</Container>
		</>
	);
}

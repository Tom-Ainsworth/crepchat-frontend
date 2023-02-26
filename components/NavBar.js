// Next
import Link from "next/link";
import Image from "next/image";

// External
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";

// Internal
import logo from "../public/logo.png";
import styles from "../styles/NavBar.module.css";
import {
	useCurrentUser,
	useSetCurrentUser,
} from "../src/contexts/CurrentUserContext";
import Avatar from "./Avatar";
import useClickOutside from "../src/hooks/useClickOutside";
import { removeTokenTimestamp } from "../src/utils/utils";

export default function NavBar() {
	const currentUser = useCurrentUser();
	const setCurrentUser = useSetCurrentUser();
	console.log("current user: ", currentUser);

	const { expanded, setExpanded, ref } = useClickOutside();

	const handleLogout = async () => {
		try {
			await axios.post("dj-rest-auth/logout/");
			setCurrentUser(null);
			removeTokenTimestamp();
		} catch (err) {
			// console.log(err);
		}
	};
	const addPostIcon = (
		<Link href="/posts/create" className={styles.NavLink}>
			<i className="fas fa-plus-square"></i> Create
		</Link>
	);

	const loggedInIcons = (
		<>
			{/* <Link href="/feed" className={styles.NavLink}>
				<i className="fas fa-stream"></i> Feed
			</Link> */}
			{/* <Link href="/liked" className={styles.NavLink}>
				<i className="fas fa-heart"></i> Liked
			</Link> */}
			<Link href="/" className={styles.NavLink} onClick={handleLogout}>
				<i className="fas fa-sign-out-alt"></i> Logout
			</Link>
			<Link
				href={`/profiles/${currentUser?.profile_id}`}
				className={styles.NavLink}
			>
				<Avatar
					src={currentUser?.profile_image}
					height={40}
					text="Profile"
				/>
			</Link>
		</>
	);
	const loggedOutIcons = (
		<>
			<Link href="/login" className={styles.NavLink}>
				<i className="fas fa-sign-in-alt"></i> Log In
			</Link>
			<Link href="/signup" className={styles.NavLink}>
				<i className="fas fa-user-plus"></i> Sign Up
			</Link>
		</>
	);

	return (
		<Navbar
			expanded={expanded}
			className={styles.NavBar}
			expand="md"
			fixed="top"
		>
			<Container className={styles.Container}>
				<Link href="/">
					<Navbar.Brand>
						<Image src={logo} alt="logo" height="25" />
					</Navbar.Brand>
				</Link>
				{currentUser && addPostIcon}
				<Navbar.Toggle
					ref={ref}
					onClick={() => setExpanded(!expanded)}
					aria-controls="basic-navbar-nav"
				/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="text-left">
						<Link href="/" className={styles.NavLink}>
							<i className="fas fa-home"></i> Home
						</Link>
						{currentUser ? loggedInIcons : loggedOutIcons}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

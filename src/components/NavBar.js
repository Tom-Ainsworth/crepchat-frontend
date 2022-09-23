// External
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import axios from "axios";

// Internal
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import {
    useCurrentUser,
    useSetCurrentUser,
} from "../context/CurrentUserContext";
import Avatar from "./Avatar";

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const handleLogout = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
        } catch (err) {
            // console.log(err);
        }
    };
    const addPostIcon = (
        <NavLink
            to="/posts/create"
            className={styles.NavLink}
            activeClassName={styles.Active}
        >
            <i className="fas fa-plus-square"></i> Create
        </NavLink>
    );

    const loggedInIcons = (
        <>
            <NavLink
                to="/feed"
                className={styles.NavLink}
                activeClassName={styles.Active}
            >
                <i className="fas fa-stream"></i> Feed
            </NavLink>
            <NavLink
                to="/liked"
                className={styles.NavLink}
                activeClassName={styles.Active}
            >
                <i className="fas fa-heart"></i> Liked
            </NavLink>
            <NavLink to="/" className={styles.NavLink} onClick={handleLogout}>
                <i className="fas fa-sign-out-alt"></i> Logout
            </NavLink>
            <NavLink
                to={`/profiles/${currentUser?.profile_id}`}
                className={styles.NavLink}
            >
                <Avatar
                    src={currentUser?.profile_image}
                    height={40}
                    text="Profile"
                />
            </NavLink>
        </>
    );
    const loggedOutIcons = (
        <>
            <NavLink
                to="login"
                className={styles.NavLink}
                activeClassName={styles.Active}
            >
                <i className="fas fa-sign-in-alt"></i> Log In
            </NavLink>
            <NavLink
                to="signup"
                className={styles.NavLink}
                activeClassName={styles.Active}
            >
                <i className="fas fa-user-plus"></i> Sign Up
            </NavLink>
        </>
    );

    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container className={styles.Container}>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="logo" height="25" />
                    </Navbar.Brand>
                </NavLink>
                {currentUser && addPostIcon}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=" text-left">
                        <NavLink
                            exact
                            to="/"
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                        >
                            <i className="fas fa-home"></i> Home
                        </NavLink>
                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;

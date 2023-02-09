// External
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";

// Internal
import styles from "../styles/global.css";
import NavBar from "../components/NavBar";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import LogInForm from "./pages/auth/LoginInForm";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import NotFound from "../components/NotFound";

function App() {
	const currentUser = useCurrentUser();

	return (
		<div className={styles.App}>
			<NavBar />
			<Container
				className={
					currentUser ? styles.MainLoggedIn : styles.MainLoggedOut
				}
			>
				<Switch>
					<Route
						exact
						path="/"
						render={() => (
							<PostsPage message="No results found. Adjust your search and try again." />
						)}
					/>

					{/* <Route
						exact
						path="/posts/create"
						render={() => <PostCreateForm />}
					/>
					<Route
						exact
						path="/posts/:id/edit"
						render={() => <PostEditForm />}
					/>
					<Route
						exact
						path="/posts/:id"
						render={() => <PostPage />}
					/>
					<Route
						exact
						path="/profiles/:id"
						render={() => <ProfilePage />}
					/>
					<Route
						exact
						path="/profiles/:id/edit/username"
						render={() => <UsernameForm />}
					/>
					<Route
						exact
						path="/profiles/:id/edit/password"
						render={() => <UserPasswordForm />}
					/>
					<Route
						exact
						path="/profiles/:id/edit"
						render={() => <ProfileEditForm />}
					/>
					<Route render={() => <NotFound />} /> */}
				</Switch>
			</Container>
		</div>
	);
}

export default App;

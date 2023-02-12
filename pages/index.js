// External
import Container from "react-bootstrap/Container";

// Internal
import styles from "../styles/App.module.css";
import NavBar from "../components/NavBar";
import "../src/api/axiosDefaults";
import { useCurrentUser } from "../src/contexts/CurrentUserContext";
// import PostCreateForm from "./pages/posts/PostCreateForm";
// import PostPage from "./pages/posts/PostPage";
import PostsPage from "../src/pages/posts/PostsPage";
// import PostEditForm from "./pages/posts/PostEditForm";
// import ProfilePage from "./pages/profiles/ProfilePage";
// import UsernameForm from "./pages/profiles/UsernameForm";
// import UserPasswordForm from "./pages/profiles/UserPasswordForm";
// import ProfileEditForm from "./pages/profiles/ProfileEditForm";
// import NotFound from "../components/NotFound";

export default function Home() {
	const currentUser = useCurrentUser();

	return (
		<div className={styles.App}>
			<NavBar />
			<Container
				className={
					currentUser ? styles.MainLoggedIn : styles.MainLoggedOut
				}
			>
				<PostsPage message="No results found. Adjust your search and try again." />

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
			</Container>
		</div>
	);
}

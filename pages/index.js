// Internal

import "../src/api/axiosDefaults";

import PostsPage from "../components/posts/PostsPage";

export default function Home() {
	return (
		<PostsPage message="No results found. Adjust your search and try again." />
	);
	{
		/* 
					<Route
						exact
						path="/posts/:id/edit"
						render={() => <PostEditForm />}
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
					<Route render={() => <NotFound />} /> */
	}
}

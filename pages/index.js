// Internal

import "../src/api/axiosDefaults";

import PostsPage from "../components/posts/PostsPage";

export default function Home() {
	return (
		<PostsPage message="No results found. Adjust your search and try again." />
	);
}

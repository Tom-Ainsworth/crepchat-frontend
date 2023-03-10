import PostsPage from "../src/pages/posts/PostsPage";
import { useCurrentUser } from "../src/contexts/CurrentUserContext";

export default function Feed() {
	const currentUser = useCurrentUser();
	const profile_id = currentUser?.profile_id || "";
	return (
		<PostsPage
			message="No results found. Adjust your search or follow a user."
			filter={`owner__followed__owner__profile=${profile_id}&`}
		/>
	);
}

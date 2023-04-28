import { useCurrentUser } from "../src/contexts/CurrentUserContext";
import PostsPage from '../components/posts/PostsPage'


export default function Liked() {
	const currentUser = useCurrentUser();
	const profile_id = currentUser?.profile_id || "";
	return (
		<PostsPage
			message="No results found. Adjust your search or like a post"
			filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
		/>
	);
}

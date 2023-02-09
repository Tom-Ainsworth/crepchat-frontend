import { useCurrentUser } from "./contexts/CurrentUserContext";

const currentUser = useCurrentUser();
const profile_id = currentUser?.profile_id || "";

<Route
	exact
	path="/liked"
	render={() => (
		<PostsPage
			message="No results found. Adjust your search or like a post"
			filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
		/>
	)}
/>;

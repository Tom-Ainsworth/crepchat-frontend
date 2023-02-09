import { useCurrentUser } from "./contexts/CurrentUserContext";

const currentUser = useCurrentUser();
const profile_id = currentUser?.profile_id || "";

<Route
	exact
	path="/feed"
	render={() => (
		<PostsPage
			message="No results found. Adjust your search or follow a user."
			filter={`owner__followed__owner__profile=${profile_id}&`}
		/>
	)}
/>;

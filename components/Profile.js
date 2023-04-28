// External

import Button from "react-bootstrap/Button";

// Internal
import styles from "../styles/Profile.module.css";
import btnStyles from "../styles/Button.module.css";
import { useCurrentUser } from "../src/contexts/CurrentUserContext";
import Avatar from "./Avatar";
import { useSetProfileData } from "../src/contexts/ProfileDataContext";
import Link from "next/link";

const Profile = (props) => {
	const { profile, mobile, imageSize = 55 } = props;
	const { id, following_id, image, owner } = profile;

	const currentUser = useCurrentUser();
	const is_owner = currentUser?.username === owner;

	const { handleFollow, handleUnfollow } = useSetProfileData();

	return (
		<div
			className={`my-3 d-flex align-items-center ${
				mobile && "flex-column"
			}`}
		>
			<div>
				<Link href={`/profiles/${id}`} className="align-self-center">
					<Avatar src={image} height={imageSize} />
				</Link>
			</div>
			<div className={`mx-2 ${styles.WordBreak}`}>
				<strong>{owner}</strong>
			</div>
			<div className={`text-right ${!mobile && "ml-auto"}`}>
				{!mobile &&
					currentUser &&
					!is_owner &&
					(following_id ? (
						<Button
							className={`${btnStyles.Button} ${btnStyles.PurpleOutline}`}
							onClick={() => handleUnfollow(profile)}
						>
							unfollow
						</Button>
					) : (
						<Button
							className={`${btnStyles.Button} ${btnStyles.Purple}`}
							onClick={() => handleFollow(profile)}
						>
							follow
						</Button>
					))}
			</div>
		</div>
	);
};

export default Profile;

// External
import Media from "react-bootstrap/Media";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

// Internal
import styles from "../../styles/Comment.module.css";

const Comment = (props) => {
    console.log(props);
    const { profile_id, profile_image, owner, updated_at, content } = props;

    return (
        <div>
            <hr />
            <Media>
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} />
                </Link>
                <Media.Body className="align-self-center ml-2">
                    <span className={styles.Owner}>{owner}</span>
                    <span className={styles.Date}>{updated_at}</span>
                    <p>{content}</p>
                </Media.Body>
            </Media>
        </div>
    );
};

export default Comment;

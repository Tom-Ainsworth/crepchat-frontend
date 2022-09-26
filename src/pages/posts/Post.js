// External
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";

// Internal
import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../context/CurrentUserContext";
import styles from "../../styles/Post.module.css";
import { axiosRes } from "../../api/axiosDefaults";

const Post = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        comments_count,
        likes_count,
        dislikes_count,
        like_id,
        dislike_id,
        caption,
        category,
        image,
        updated_at,
        postPage,
        setPosts,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const handleAddLike = async () => {
        try {
            const { data } = await axiosRes.post("/likes/", { post: id });
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? {
                              ...post,
                              likes_count: post.likes_count + 1,
                              like_id: data.id,
                          }
                        : post;
                }),
            }));
        } catch (err) {
            // console.log(err);
        }
    };

    const handleRemoveLike = async () => {
        try {
            await axiosRes.delete(`/likes/${like_id}/`);
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? {
                              ...post,
                              likes_count: post.likes_count - 1,
                              like_id: null,
                          }
                        : post;
                }),
            }));
        } catch (err) {
            // console.log(err);
        }
    };

    return (
        <Card className={styles.Post}>
            <Card.Body>
                <Media className="align-items-center justify-content-between">
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={55} />
                        {owner}
                    </Link>
                    <div className="d-flex align-items-center">
                        <span>
                            {updated_at}
                            {is_owner && postPage && "(dropdown Menu here)"}
                        </span>
                    </div>
                </Media>
            </Card.Body>
            <Link to={`/posts/${id}`}>
                <Card.Img src={image} alt={caption} />
            </Link>
            <Card.Body>
                {caption && (
                    <Card.Text className="text-center">{caption}</Card.Text>
                )}
                <div className={styles.PostBar}>
                    {/* Likes logic and count */}
                    {is_owner ? (
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip>You can't like your own post!</Tooltip>
                            }
                        >
                            <i className="fas fa-fire" />
                        </OverlayTrigger>
                    ) : like_id ? (
                        <span onClick={handleRemoveLike}>
                            <i className={`fas fa-fire ${styles.Fire}`} />
                        </span>
                    ) : currentUser ? (
                        <span onClick={handleAddLike}>
                            <i
                                className={`fas fa-fire ${styles.FireOutline}`}
                            />
                        </span>
                    ) : (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Log in to like posts!</Tooltip>}
                        >
                            <i className="fas fa-fire" />
                        </OverlayTrigger>
                    )}
                    {likes_count}

                    {/* Comments icon and count */}

                    <Link to={`/posts/${id}`}>
                        <i className="far fa-comments" />
                    </Link>
                    {comments_count}

                    {/* Dislikes logic and count */}

                    {is_owner ? (
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip>
                                    You can't dislike your own post!
                                </Tooltip>
                            }
                        >
                            <i className="fas fa-trash" />
                        </OverlayTrigger>
                    ) : dislike_id ? (
                        <span onClick={() => {}}>
                            <i className={`fas fa-fire ${styles.Fire}`} />
                        </span>
                    ) : currentUser ? (
                        <span onClick={() => {}}>
                            <i
                                className={`fas fa-trash ${styles.FireOutline}`}
                            />
                        </span>
                    ) : (
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip>Log in to dislike posts!</Tooltip>
                            }
                        >
                            <i className="fas fa-trash" />
                        </OverlayTrigger>
                    )}
                    {dislikes_count}
                </div>
            </Card.Body>
            {category && (
                <Card.Title>
                    <i className="fas fa-tag"></i>
                    {category}
                </Card.Title>
            )}
        </Card>
    );
};

export default Post;

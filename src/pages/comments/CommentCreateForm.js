// External
import { useState } from "react";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// Internal
import Avatar from "../../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

import btnStyles from "../../../styles/Button.module.css";
import styles from "../../../styles/CommentCreateEditForm.module.css";

function CommentCreateForm(props) {
    const { post, setPost, setComments, profile_image, profile_id } = props;
    const [content, setContent] = useState("");

    const handleChange = (event) => {
        setContent(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axiosRes.post("/comments/", {
                content,
                post,
            });
            setComments((prevComments) => ({
                ...prevComments,
                results: [data, ...prevComments.results],
            }));
            setPost((prevPost) => ({
                results: [
                    {
                        ...prevPost.results[0],
                        comments_count: prevPost.results[0].comments_count + 1,
                    },
                ],
            }));
            setContent("");
        } catch (err) {
            // console.log(err);
        }
    };

    return (
        <Form className="mt-2" onSubmit={handleSubmit}>
            <Form.Group>
                <InputGroup>
                    <Link href={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} />
                    </Link>
                    <Form.Control
                        className={styles.Form}
                        placeholder="my comment..."
                        as="textarea"
                        value={content}
                        onChange={handleChange}
                        rows={2}
                    />
                </InputGroup>
            </Form.Group>
            <button
                className={`${btnStyles.Button} ${btnStyles.Bright} d-block ml-auto`}
                disabled={!content.trim()}
                type="submit"
            >
                post
            </button>
        </Form>
    );
}

export default CommentCreateForm;

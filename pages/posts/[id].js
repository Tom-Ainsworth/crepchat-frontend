// External
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import InfiniteScroll from "react-infinite-scroll-component";

// Internal
import { axiosReq } from "../../src/api/axiosDefaults";
import Post from "../../components/posts/Post";
import CommentCreateForm from "../../src/pages/comments/CommentCreateForm";
import { useCurrentUser } from "../../src/contexts/CurrentUserContext";
import Comment from "../../src/pages/comments/Comment";
import { fetchMoreData } from "../../src/utils/utils";
import Asset from "../../components/Asset";
import PopularProfiles from "../../components/PopularProfiles";

import appStyles from "../../styles/App.module.css";

export default function PostPage() {
	const currentUser = useCurrentUser();

    const router = useRouter()
	const { id } = router.query;

	const [post, setPost] = useState({ results: [] });

	const profile_image = currentUser?.profile_image;
	const [comments, setComments] = useState({ results: [] });

	useEffect(() => {
		const handleMount = async () => {
			try {
				const [{ data: post }, { data: comments }] = await Promise.all([
					axiosReq.get(`/posts/${id}`),
					axiosReq.get(`/comments/?post=${id}`),
				]);
				setPost({ results: [post] });
				setComments(comments);
			} catch (err) {
				// console.log(err);
			}
		};

		handleMount();
	}, [id]);

	return (
		<Row className="h-100">
			<Col className="py-2 p-0 p-lg-2" lg={8}>
				<PopularProfiles mobile />
				<Post {...post.results[0]} setPosts={setPost} postPage />
				<Container className={appStyles.Content}>
					{currentUser ? (
						<CommentCreateForm
							profile_id={currentUser.profile_id}
							profile_image={profile_image}
							post={id}
							setPost={setPost}
							setComments={setComments}
						/>
					) : comments.results.length ? (
						"Comments"
					) : null}
					{comments.results.length ? (
						<InfiniteScroll
							dataLength={comments.results.length}
							loader={<Asset spinner />}
							hasMore={!!comments.next}
							next={() => fetchMoreData(comments, setComments)}
						>
							{comments.results.map((comment) => (
								<Comment
									key={comment.id}
									{...comment}
									setPost={setPost}
									setComments={setComments}
								/>
							))}
						</InfiniteScroll>
					) : currentUser ? (
						<span>
							No comment yet, be a hypebeast and add the first!
						</span>
					) : (
						<span>No comments... yet</span>
					)}
				</Container>
			</Col>
			<Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
				<PopularProfiles />
			</Col>
		</Row>
	);
}

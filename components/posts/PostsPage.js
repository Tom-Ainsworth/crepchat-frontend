// External
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import InfiniteScroll from "react-infinite-scroll-component";

// Internal
import appStyles from "../../styles/App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { axiosReq } from "../../src/api/axiosDefaults";
import Post from "./Post";
import NoResults from "../../public/no-results.jpeg";
import Asset from "../Asset";
import { fetchMoreData } from "../../src/utils/utils";
import PopularProfiles from "../PopularProfiles";
import { useCurrentUser } from "../../src/contexts/CurrentUserContext";
import { useProfileData } from "../../src/contexts/ProfileDataContext";

function PostsPage({ message, filter = "" }) {
	const [posts, setPosts] = useState({ results: [] });
	const [hasLoaded, setHasLoaded] = useState(false);

	const currentUser = useCurrentUser();
	const ProfileDataContext = useProfileData();

	const [query, setQuery] = useState("");

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const { data } = await axiosReq.get(
					`/posts/?${filter}search=${query}`
				);
				setPosts(data);
				setHasLoaded(true);
			} catch (err) {
				// console.log(err)
			}
		};

		setHasLoaded(false);
		const timer = setTimeout(() => {
			fetchPosts();
		}, 1000);

		return () => {
			clearTimeout(timer);
		};
	}, [filter, query, currentUser, ProfileDataContext]);

	return (
		<Row className="h-100">
			<Container className="mb-3">
				<h1 className="text-center">
					Crepchat - the best community for Sneakerheads
				</h1>
				<h2 className="text-center">
					Post photos, follow others and talk about the creps you love
					the most with like-minded people!
				</h2>
			</Container>
			<Col md={4} className="d-none d-lg-block p-0 p-lg-2">
				<PopularProfiles />
			</Col>
			<Col className="py-2 p-0 p-lg-2" lg={8}>
				<PopularProfiles mobile />
				<i className={`fas fa-search ${styles.SearchIcon} `} />
				<Form
					className={styles.SearchBar}
					onSubmit={(event) => event.preventDefault()}
				>
					<Form.Control
						type="text"
						className="mr-sm-2"
						placeholder="Search posts"
						value={query}
						onChange={(event) => setQuery(event.target.value)}
					/>
				</Form>

				{hasLoaded ? (
					<>
						{posts.results.length ? (
							<InfiniteScroll
								dataLength={posts.results.length}
								loader={<Asset spinner />}
								hasMore={!!posts.next}
								next={() => fetchMoreData(posts, setPosts)}
							>
								{posts.results.map((post) => (
									<Post
										key={post.id}
										{...post}
										setPosts={setPosts}
									/>
								))}
							</InfiniteScroll>
						) : (
							<Container className={appStyles.Content}>
								<Asset src={NoResults} message={message} />
							</Container>
						)}
					</>
				) : (
					<Container className={appStyles.Content}>
						<Asset spinner />
					</Container>
				)}
			</Col>
		</Row>
	);
}

export default PostsPage;

// External
import { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";

import { useRouter } from "next/router";

// Internal
import Upload from "../../public/upload.png";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../styles/App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import { axiosReq } from "../../src//api/axiosDefaults";
import { useRedirect } from "../../src/hooks/useRedirect";

function PostCreateForm() {
	useRedirect("loggedOut");
	const [postData, setPostData] = useState({
		caption: "",
		category: "",
		image: "",
	});

	const { caption, category, image } = postData;

	const imageInput = useRef(null);
	const router = useRouter();

	const [errors, setErrors] = useState({});

	const handleChange = (event) => {
		setPostData({
			...postData,
			[event.target.name]: event.target.value,
		});
	};

	const handleChangeImage = (event) => {
		if (event.target.files.length) {
			URL.revokeObjectURL(image);
			setPostData({
				...postData,
				image: URL.createObjectURL(event.target.files[0]),
			});
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData();

		formData.append("caption", caption);
		formData.append("category", category);
		formData.append("image", imageInput.current.files[0]);

		try {
			const { data } = await axiosReq.post("/posts/", formData);
			router.push(`/posts/${data.id}`);
		} catch (err) {
			// console.log(err);
			if (err.response?.status !== 401) {
				setErrors(err.response?.data);
			}
		}
	};

	const textFields = (
		<div className="text-center">
			<Form.Group controlId="caption">
				<Form.Label>Caption</Form.Label>
				<Form.Control
					as="textarea"
					rows={3}
					name="caption"
					className={appStyles.Input}
					value={caption}
					onChange={handleChange}
					aria-label="caption"
				/>
			</Form.Group>

			<Form.Group controlId="exampleForm.ControlSelect2">
				<Form.Label>Category</Form.Label>

				<Form.Control
					as="select"
					name="category"
					className={appStyles.Input}
					value={category}
					onChange={handleChange}
					aria-label="category"
				>
					<option>Select a Category</option>
					<option>Adidas</option>
					<option>New Balance</option>
					<option>Nike</option>
				</Form.Control>
			</Form.Group>

			{errors.category?.map((message, idx) => (
				<Alert variant="warning" key={idx}>
					{message}
				</Alert>
			))}

			<Button
				className={`${btnStyles.Button} ${btnStyles.Purple} btn`}
				onClick={() => router.back()}
			>
				Cancel
			</Button>
			<Button
				className={`${btnStyles.Button} ${btnStyles.Purple}`}
				type="submit"
			>
				Create
			</Button>
		</div>
	);

	return (
		<Form onSubmit={handleSubmit} className={`${styles.Container} mx-5`}>
			<Row>
				<Col className="py-2 p-0 p-md-2" md={7} lg={8} xl={12}>
					<Container
						className={`${appStyles.Content} d-flex flex-column justify-content-center`}
					>
						<Form.Group className={`text-center`}>
							{image ? (
								<>
									<figure>
										<Card.Img
											className="appStyles.Image"
											src={image}
											rounded
										/>
									</figure>
									<div>
										<Form.Label
											className={`${btnStyles.Button} ${btnStyles.Purple} btn`}
											htmlFor="image-upload"
										>
											Change the image
										</Form.Label>
									</div>
								</>
							) : (
								<Form.Label
									className="d-flex justify-content-center"
									htmlFor="image-upload"
								>
									<Asset
										src={Upload}
										message="Click or tap to upload an image"
									/>
								</Form.Label>
							)}

							<Form.File
								id="image-upload"
								accept="image/*"
								onChange={handleChangeImage}
								ref={imageInput}
							/>

							{errors.image?.map((message, idx) => (
								<Alert variant="warning" key={idx}>
									{message}
								</Alert>
							))}
						</Form.Group>

						<div className="d-md-none">{textFields}</div>
					</Container>
				</Col>
				<Col
					md={5}
					lg={4}
					xl={12}
					className={` d-none d-md-block p-0 p-md-2`}
				>
					<Container className={appStyles.Content}>
						{textFields}
					</Container>
				</Col>
			</Row>
		</Form>
	);
}

export default PostCreateForm;

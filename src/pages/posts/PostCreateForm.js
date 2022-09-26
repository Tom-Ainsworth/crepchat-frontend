// External
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

// Internal
import Upload from "../../assets/upload.png";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";

function PostCreateForm() {
    const [postData, setPostData] = useState({
        caption: "",
        category: "",
        image: "",
    });

    const { caption, category, image } = postData;
    // const [errors, setErrors] = useState({});

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
                    <option>Adidas</option>
                    <option>New Balance</option>
                    <option>Nike</option>
                </Form.Control>
            </Form.Group>

            <Button
                className={`${btnStyles.Button} ${btnStyles.Purple} btn`}
                onClick={() => {}}
            >
                cancel
            </Button>
            <Button
                className={`${btnStyles.Button} ${btnStyles.Purple}`}
                type="submit"
            >
                create
            </Button>
        </div>
    );

    return (
        <Form>
            <Row>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container
                        className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
                    >
                        <Form.Group className="text-center">
                            {image ? (
                                <>
                                    <figure>
                                        <Image
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
                            />
                        </Form.Group>
                        <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
                <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                    <Container className={appStyles.Content}>
                        {textFields}
                    </Container>
                </Col>
            </Row>
        </Form>
    );
}

export default PostCreateForm;

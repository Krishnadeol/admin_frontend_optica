import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

function UserUpdateModal(props) {
    // console.log("propssss", props);
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        name: props.details ? props.details.name : "",
        email: props.details ? props.details.email : "",
        phone: props.details ? props.details.phone : "",
        batch: props.details ? props.details.batch : "",
        department: props.details ? props.details.department : "",
        // name: "",
        // email: "",
        // phone: "",
        // batch: "",
        // department: "",
    });

    useEffect(() => {
        setFormData({
            name: props.details ? props.details.name : "",
            email: props.details ? props.details.email : "",
            phone: props.details ? props.details.phone : "",
            batch: props.details ? props.details.batch : "",
            department: props.details ? props.details.department : "",
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        // event.preventDefault(); // Prevent default form submission
        // // Create updated details object
        // const updatedDetails = {
        //   ...props.details,
        //   ...formData,
        // };
        // // Call onUpdate prop to update user details
        // props.onUpdate(updatedDetails);
        // props.onHide(); // Hide modal after update

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter-edit"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter-edit">
                    Edit Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>You can edit the below info </h4>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a name.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="tel"
                            placeholder="Enter phone number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid phone number.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBatch">
                        <Form.Label>Batch</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter batch"
                            name="batch"
                            value={formData.batch}
                            onChange={handleChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a batch number.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formDepartment">
                        <Form.Label>Department</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a department.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default UserUpdateModal;

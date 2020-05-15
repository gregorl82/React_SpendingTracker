import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const TagEdit = ({ tag }) => {

    const [show, setShow] = useState(false);
    const [tag_name, setTagName] = useState(tag.tag_name);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updateTag = async(e) => {
        e.preventDefault();
        try {
            const body = { tag_name }
            const response = fetch(`http://localhost:5000/tags/${tag.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            console.log(response)
            handleClose();
            window.location.reload();
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>

            <Button variant="warning" onClick={handleShow}>Edit</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit tag</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formTagName">
                        <Form.Control
                            type="text"
                            placeholder="Tag name"
                            value={tag_name}
                            onChange={e => {
                                setTagName(e.target.value);
                            }
                            } />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={(e) => {
                        updateTag(e)
                    }
                    }>
                        Save Changes
                     </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default TagEdit;
import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const MerchantEdit = ({ merchant }) => {

    const [show, setShow] = useState(false);
    const [merchant_name, setMerchantName] = useState(merchant.merchant_name);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updateMerchant = async(e) => {
        e.preventDefault();
        try {
            const body = {merchant_name}
            const response = await fetch(`http://localhost:5000/api/merchants/${merchant.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            console.log(response)
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
                    <Modal.Title>Edit merchant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formMerchantName">
                        <Form.Control
                            type="text"
                            placeholder="Merchant name"
                            value={merchant_name}
                            onChange={e => {
                                setMerchantName(e.target.value);
                            }
                            } />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                </Button>
                    <Button variant="primary" onClick={(e) => {
                        updateMerchant(e)
                    }
                    }>
                        Save Changes
                 </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default MerchantEdit;
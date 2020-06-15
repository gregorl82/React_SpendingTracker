import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const MerchantEdit: React.FC<Merchant> = ({ merchant }) => {

    const [show, setShow] = React.useState<boolean>(false);
    const [merchant_name, setMerchantName] = React.useState<string>(merchant.merchant_name);

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
        <React.Fragment>

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
                    <Button variant="primary" onClick={(e: MouseEvent<HTMLButtonElement>) => {
                        updateMerchant(e)
                    }
                    }>
                        Save Changes
                 </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default MerchantEdit;
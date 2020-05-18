import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const BudgetEdit = ({ budget }) => {

    const [show, setShow] = useState(false);
    const [budget_name, updateBudgetName] = useState(budget.budget_name);
    const [budget_amount, updateBudgetAmount] = useState(budget.budget_amount);
    const [warning_limit, updateWarningLimit] = useState(budget.warning_limit);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updateBudget = async(e) => {
        e.preventDefault();
        try {
            const body = {budget_name, budget_amount, warning_limit};
            const response = await fetch(`http://localhost:5000/api/budgets/${budget.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
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
                    <Modal.Title>Edit budget</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBudgetName">
                            <Form.Label>Budget Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter a budget name"
                                required
                                value={budget_name}
                                onChange={e => {
                                    updateBudgetName(e.target.value)
                                }} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Budget Amount (in £)</Form.Label>
                            <Form.Control
                                type="number"
                                step="0.01"
                                min="0.00"
                                placeholder="0.00"
                                required
                                value={budget_amount}
                                onChange={e => {
                                    updateBudgetAmount(e.target.valueAsNumber)
                                }} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Warning Limit (in £)</Form.Label>
                            <Form.Control
                                type="number"
                                step="0.01"
                                min="0.00"
                                placeholder="0.00"
                                required
                                value={warning_limit}
                                onChange={e => {
                                    updateWarningLimit(e.target.valueAsNumber)
                                }} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={handleClose}>
                        Cancel
                     </Button>
                    <Button
                        variant="primary"
                        onClick={e => {
                            updateBudget(e)
                        }}>
                        Save changes
                      </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default BudgetEdit;
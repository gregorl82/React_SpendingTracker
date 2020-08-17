import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const BudgetInput = () => {
  const [show, setShow] = useState(false);
  const [budget_name, setBudgetName] = useState("");
  const [warning_limit, setWarningLimit] = useState(0);
  const [budget_amount, setBudgetAmount] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const saveBudget = async (e) => {
    e.preventDefault();
    try {
      const body = { budget_name, budget_amount, warning_limit };
      const response = await fetch("http://localhost:5000/api/v1/budgets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <Button className="mb-5" variant="success" onClick={handleShow}>
        Create new budget
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new budget</Modal.Title>
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
                onChange={(e) => {
                  setBudgetName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Budget Amount</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>£</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="number"
                  step="0.01"
                  min="0.00"
                  placeholder="0.00"
                  required
                  value={budget_amount}
                  onChange={(e) => {
                    setBudgetAmount(e.target.valueAsNumber);
                  }}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.Label>Warning Limit</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>£</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="number"
                  step="0.01"
                  min="0.00"
                  placeholder="0.00"
                  required
                  value={warning_limit}
                  onChange={(e) => {
                    setWarningLimit(e.target.valueAsNumber);
                  }}
                />
              </InputGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="success"
            onClick={(e) => {
              saveBudget(e);
            }}
          >
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default BudgetInput;

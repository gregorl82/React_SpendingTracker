import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const CategoryEdit = ({ category }) => {
  const [show, setShow] = useState(false);
  const [category_name, setCategoryName] = useState(category.category_name);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateCategory = async (e) => {
    e.preventDefault();
    try {
      const body = { category_name };
      const response = fetch(
        `http://localhost:5000/api/v1/categories/${category.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
      handleClose();
      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <Button variant="warning" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formTagName">
            <Form.Control
              type="text"
              placeholder="Category name"
              value={category_name}
              onChange={(e) => {
                setCategoryName(e.target.value);
              }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              updateCategory(e);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default CategoryEdit;

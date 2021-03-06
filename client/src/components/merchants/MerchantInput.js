import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const MerchantInput = () => {
  const [merchant_name, setMerchantName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { merchant_name };
      const response = await fetch("http://localhost:5000/api/v1/merchants", {
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
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formMerchantName">
          <Form.Label>Enter a new merchant</Form.Label>
          <Form.Control
            type="text"
            placeholder="Merchant name"
            value={merchant_name}
            onChange={(e) => {
              setMerchantName(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default MerchantInput;

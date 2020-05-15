import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const TagInput = () => {

    const [tag_name, setTagName] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const body = { tag_name };
            const response = await fetch("http://localhost:5000/tags", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            console.log(response);
            window.location.reload();
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTagName">
                    <Form.Label>Enter a new tag</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Tag name"
                        value={tag_name}
                        onChange={e => {
                            setTagName(e.target.value);
                        }
                        } />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default TagInput;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const TagInput = () => {
    return (
        <Container>
            <Form>
                <Form.Group controlId="formTagName">
                    <Form.Label>Enter a new tag</Form.Label>
                    <Form.Control type="text" placeholder="Tag name" />
                </Form.Group>
                <Button>Submit</Button>
            </Form>
        </Container>
    )
}

export default TagInput;
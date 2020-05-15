import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CategoryInput = () => {

    const [category_name, setCategoryName] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const body = { category_name };
            const response = await fetch("http://localhost:5000/api/categories", {
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
                <Form.Group controlId="formCategoryName">
                    <Form.Label>Enter a new category</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Category name"
                        value={category_name}
                        onChange={e => {
                            setCategoryName(e.target.value);
                        }
                        } />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default CategoryInput;
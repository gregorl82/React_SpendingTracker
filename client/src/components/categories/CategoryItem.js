import React, { Fragment } from 'react';
import CategoryEdit from './CategoryEdit';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const CategoryItem = ({ category }) => {

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/categories/${id}`, {
                method: "DELETE"
            })
            console.log(response)
            window.location.reload();
        } catch (err) {
            console.error(err.message)
        }
    }


    return (
        <Fragment>
            <Col lg={8}>{category.category_name}</Col>
            <Col><CategoryEdit category={category}/></Col>
            <Col><Button
                variant="danger"
                onClick={() => handleDelete(category.id)}>Delete</Button></Col>
        </Fragment>
    )
}

export default CategoryItem;
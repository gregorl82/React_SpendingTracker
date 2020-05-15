import React, { Fragment } from 'react';
import CategoryEdit from './CategoryEdit';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const CategoryItem = ({ tag }) => {

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
            <Col lg={8}>{tag.tag_name}</Col>
            <Col><CategoryEdit tag={tag}/></Col>
            <Col><Button
                variant="danger"
                onClick={() => handleDelete(tag.id)}>Delete</Button></Col>
        </Fragment>
    )
}

export default CategoryItem;
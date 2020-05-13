import React, { Fragment } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const TagItem = ({ tag }) => {
    return (
        <Fragment mt={5}>
            <Col md={8}><span>{tag}</span></Col>
            <Col md={2}><Button variant="outline-warning">Edit</Button></Col>
            <Col md={1}><Button variant="outline-danger">Delete</Button></Col>
        </Fragment>
    )
}

export default TagItem;
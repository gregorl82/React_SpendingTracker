import React, { Fragment } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const TagItem = ({ tag }) => {
    return (
        <Fragment>
            <Col lg={8}>{tag.tag_name}</Col>
            <Col><Button variant="warning">Edit</Button></Col>
            <Col><Button variant="danger">Delete</Button></Col>
        </Fragment>
    )
}

export default TagItem;
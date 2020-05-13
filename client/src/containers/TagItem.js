import React, {Fragment} from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const TagItem = ({ tag }) => {
    return (
        <Fragment>
            <Col sm={8}><span>This is a tag item</span></Col>
            <Col><Button variant="outline-warning">Edit</Button></Col>
            <Col><Button variant="outline-danger">Delete</Button></Col>
        </Fragment>
    )
}

export default TagItem;
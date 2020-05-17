import React, { Fragment } from 'react';
import MerchantEdit from './MerchantEdit';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const MerchantItem = ({ merchant }) => {
    return (
        <Fragment>
            <Col lg={8}>{merchant.merchant_name}</Col>
            <Col><MerchantEdit merchant={merchant} /></Col>
            <Col><Button variant="danger">Delete</Button></Col>
        </Fragment>
    )
}

export default MerchantItem;
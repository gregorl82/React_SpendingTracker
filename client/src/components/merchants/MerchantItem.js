import React, { Fragment } from 'react';
import MerchantEdit from './MerchantEdit';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const MerchantItem = ({ merchant }) => {

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/merchants/${id}`, {
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
            <Col lg={8}>{merchant.merchant_name}</Col>
            <Col><MerchantEdit merchant={merchant} /></Col>
            <Col><Button
                variant="danger"
                onClick={() => {
                    handleDelete(merchant.id)
                }}>Delete</Button></Col>
        </Fragment>
    )
}

export default MerchantItem;
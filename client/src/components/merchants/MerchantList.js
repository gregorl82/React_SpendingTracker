import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import MerchantItem from './MerchantItem';

const MerchantList = ({ merchants }) => {
    return (
        <Fragment>
            {merchants.map((merchant) => {
                return <Row className="mt-5" key={merchant.id}><MerchantItem merchant={merchant} /></Row>
            })}
        </Fragment>
    )
}

export default MerchantList;
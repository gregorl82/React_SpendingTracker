import * as React from 'react';
import Row from 'react-bootstrap/Row';
import MerchantItem from './MerchantItem';

interface MerchantListProps {
    merchants: Array<Merchant>
}

const MerchantList: React.FC<MerchantListProps> = ({ merchants }) => {
    return (
        <React.Fragment>
            {merchants.map((merchant) => {
                return <Row className="mt-5" key={merchant.id}><MerchantItem merchant={merchant} /></Row>
            })}
        </React.Fragment>
    )
}

export default MerchantList;
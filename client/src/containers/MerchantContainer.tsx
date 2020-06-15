import * as React from 'react';
import Container from 'react-bootstrap/Container'
import MerchantInput from '../components/merchants/MerchantInput';
import MerchantList from '../components/merchants/MerchantList';

interface MerchantContainerProps {}

const MerchantContainer: React.FC<MerchantContainerProps> = () => {

    const [merchants, setMerchants] = React.useState<Merchant[]>([]);

    const getMerchants = async() => {
        try {
            const response = await fetch("http://localhost:5000/api/merchants");
            const json = await response.json();
            console.log(json);
            setMerchants(json);
        } catch (err) {
            console.error(err.message);
        }
    }

    React.useEffect(() => {
        getMerchants();
    }, [])

    return (
        <Container>
            <h2 className="m-5">Merchants</h2>
            <MerchantInput />
            <MerchantList merchants={merchants}/>
        </Container>
    )
}

export default MerchantContainer;
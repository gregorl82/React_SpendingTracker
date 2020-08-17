import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import MerchantInput from "../components/merchants/MerchantInput";
import MerchantList from "../components/merchants/MerchantList";

const MerchantContainer = () => {
  const [merchants, setMerchants] = useState([]);

  const getMerchants = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/merchants");
      const json = await response.json();
      console.log(json);
      setMerchants(json);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getMerchants();
  }, []);

  return (
    <Container>
      <h2 className="m-5">Merchants</h2>
      <MerchantInput />
      <MerchantList merchants={merchants} />
    </Container>
  );
};

export default MerchantContainer;

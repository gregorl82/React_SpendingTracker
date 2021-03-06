import React from "react";
import Container from "react-bootstrap/Container";
import TransactionList from "../components/transactions/TransactionList";
import TransactionInput from "../components/transactions/TransactionInput";

const TransactionContainer = () => {
  return (
    <Container>
      <h2 className="m-5">Transactions</h2>
      <TransactionInput />
      <TransactionList />
    </Container>
  );
};

export default TransactionContainer;

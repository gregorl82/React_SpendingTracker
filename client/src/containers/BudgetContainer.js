import React, { useState, useEffect } from 'react';
import BudgetList from '../components/budgets/BudgetList';
import BudgetInput from '../components/budgets/BudgetInput';
import Container from 'react-bootstrap/Container';

const BudgetContainer = () => {

    const [budgets, setBudgets] = useState([]);

    const getBudgets = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/budgets");
            const json = await response.json();
            setBudgets(json);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getBudgets();
    }, [])

    return (
        <Container>
            <h2 className="m-5">Budgets</h2>
            <BudgetInput />
            <BudgetList budgets={budgets} />
        </Container>
    )
}

export default BudgetContainer;
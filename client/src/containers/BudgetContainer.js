import React, { useState, useEffect } from 'react';

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

    return <h1>BudgetContainer</h1>
}

export default BudgetContainer;
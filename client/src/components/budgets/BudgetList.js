import React, { Fragment } from 'react';
import Table from 'react-bootstrap/Table';
import BudgetItem from './BudgetItem';

const BudgetList = ({ budgets }) => {
    return (
        <Fragment>
            <Table borderless>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Warning Limit</th>
                        <th>Current Spending</th>
                        <th>Amount remaining</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {budgets.map((budget) => {
                        return <BudgetItem key={budget.id} budget={budget}/>
                    }
                    )}
                </tbody>
            </Table>
        </Fragment>
    )
}

export default BudgetList;
import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import BudgetEdit from './BudgetEdit';

const BudgetItem = ({ budget }) => {
    return (
        <Fragment>
            <tr>
                <td>{budget.budget_name}</td>
                <td>£{budget.budget_amount}</td>
                <td>£{budget.warning_limit}</td>
                <td>£0.00</td>
                <td>£0.00</td>
                <td><BudgetEdit budget={budget} /></td>
                <td><Button variant="danger">Delete</Button></td>
            </tr>
        </Fragment>
    )
}

export default BudgetItem;
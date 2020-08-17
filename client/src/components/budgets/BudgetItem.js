import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import BudgetEdit from "./BudgetEdit";

const BudgetItem = ({ budget }) => {
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/budgets/${id}`,
        {
          method: "DELETE",
        }
      );
      console.log(response);
      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <tr>
        <td>{budget.budget_name}</td>
        <td>£{budget.budget_amount}</td>
        <td>£{budget.warning_limit}</td>
        <td>£0.00</td>
        <td>£0.00</td>
        <td>
          <BudgetEdit budget={budget} />
        </td>
        <td>
          <Button variant="danger" onClick={() => handleDelete(budget.id)}>
            Delete
          </Button>
        </td>
      </tr>
    </Fragment>
  );
};

export default BudgetItem;

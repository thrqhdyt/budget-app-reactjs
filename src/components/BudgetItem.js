import React from "react";

const BudgetItem = ({ budgetItems: { id, type, amount, description } }) => {
  {
    return type === "income" ? (
      <article>
        <p>{amount}</p>
        <p>{description}</p>
      </article>
    ) : (
      <article key={id}>
        <p>{amount}</p>
        <p>{description}</p>
      </article>
    );
  }
};

export default BudgetItem;

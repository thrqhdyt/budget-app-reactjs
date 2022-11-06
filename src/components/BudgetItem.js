import React from "react";
import { BiTrash } from "react-icons/bi";

const BudgetItem = ({
  budgetItems: { id, type, amount, created, description },
  removeItem,
}) => {
  {
    return type === "income" ? (
      <article key={id}>
        <p className="income-amount">Rp. {amount}</p>
        <p className="date">{created}</p>
        <p className="desc">{description}</p>
        <button className="btn" onClick={() => removeItem(id, type)}>
          <BiTrash />
        </button>
      </article>
    ) : (
      <article key={id}>
        <p className="expense-amount">Rp. {amount}</p>
        <p className="date">{created}</p>
        <p className="desc">{description}</p>
        <button className="btn" onClick={() => removeItem(id, type)}>
          <BiTrash />
        </button>
      </article>
    );
  }
};

export default BudgetItem;

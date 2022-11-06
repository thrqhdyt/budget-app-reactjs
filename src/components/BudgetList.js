import React from "react";
import BudgetItem from "./BudgetItem";

const BudgetList = ({ budgetItems }) => {
  return (
    <div>
      {budgetItems.map((budgetItem) => {
        return <BudgetItem key={budgetItem.id} budgetItems={budgetItem} />;
      })}
    </div>
  );
};

export default BudgetList;

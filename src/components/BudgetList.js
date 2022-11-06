import React from "react";
import BudgetItem from "./BudgetItem";

const BudgetList = ({ budgetItems, removeItem }) => {
  return (
    <div>
      {budgetItems.map((budgetItem) => {
        return (
          <BudgetItem
            key={budgetItem.id}
            budgetItems={budgetItem}
            removeItem={removeItem}
          />
        );
      })}
    </div>
  );
};

export default BudgetList;

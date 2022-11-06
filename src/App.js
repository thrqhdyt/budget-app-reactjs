import React, { useEffect } from "react";
import { useState } from "react";
import BudgetForm from "./components/BudgetForm";
import BudgetList from "./components/BudgetList";
import TotalBudget from "./components/TotalBudget";

function App() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [listSpent, setListSpent] = useState([]);
  const [listIncome, setListIncome] = useState([]);

  const totalExpense = listSpent.reduce((total, currentTotal) => {
    return parseFloat((total += currentTotal.amount));
  }, 0);

  const totalIncome = listIncome.reduce((total, currentTotal) => {
    return parseFloat((total += currentTotal.amount));
  }, 0);

  const totalAvailable = totalIncome - totalExpense;

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type !== "type" && description !== "" && amount !== "") {
      if (type === "expense") {
        const newExpense = {
          id: new Date().getTime().toString(),
          amount: parseFloat(amount),
          created: new Date().toLocaleDateString(),
          description: description,
          type: type,
        };
        setListSpent([...listSpent, newExpense]);
        setAmount("");
        setDescription("");
      } else if (type === "income") {
        const newIncome = {
          id: new Date().getTime().toString(),
          amount: parseFloat(amount),
          created: new Date().toLocaleDateString(),
          description: description,
          type: type,
        };
        setListIncome([...listIncome, newIncome]);
        setAmount("");
        setDescription("");
      }
    } else {
      alert("Please input");
    }
  };

  const removeItem = (id, type) => {
    if (type === "income") {
      let filteredIncome = listIncome.filter((item) => item.id !== id);
      setListIncome(filteredIncome);
    } else {
      let filteredExpense = listSpent.filter((item) => item.id !== id);
      setListSpent(filteredExpense);
    }
  };

  return (
    <section className="section-center">
      <h2>Budget App</h2>
      <div className="budget-total">
        <div className="budget-number income-number">
          <h4>Uang Masuk</h4>
          <TotalBudget totalBudget={totalIncome} />
        </div>
        <div className="budget-number expense-number">
          <h4>Uang Keluar</h4>
          <TotalBudget totalBudget={totalExpense} />
        </div>
        <div className="budget-number">
          <h4>Sisa Uang</h4>
          <TotalBudget totalBudget={totalAvailable} />
        </div>
      </div>

      <BudgetForm
        type={type}
        amount={amount}
        description={description}
        handleAmount={handleAmount}
        handleDescription={handleDescription}
        handleType={handleType}
        handleSubmit={handleSubmit}
      />

      <section className="section-list">
        <div className="list-income">
          <h3>Uang Masuk</h3>
          <BudgetList budgetItems={listIncome} removeItem={removeItem} />
        </div>
        <div className="list-spent">
          <h3>Uang Keluar</h3>
          <BudgetList budgetItems={listSpent} removeItem={removeItem} />
        </div>
      </section>
    </section>
  );
}

export default App;

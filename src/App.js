import React from "react";
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

  return (
    <section>
      <h2>Budget App</h2>
      <div>
        <div>
          <h3>Uang Masuk</h3>
          <TotalBudget totalBudget={totalIncome} />
        </div>
        <div>
          <h3>Uang Keluar</h3>
          <TotalBudget totalBudget={totalExpense} />
        </div>
      </div>
      <div>
        <h3>Sisa Uang</h3>
        <TotalBudget totalBudget={totalAvailable} />
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
      <div className="list-spent">
        <BudgetList budgetItems={listSpent} />
      </div>
      <div className="list-income">
        <BudgetList budgetItems={listIncome} />
      </div>
    </section>
  );
}

export default App;

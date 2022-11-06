import React from "react";

const BudgetForm = ({
  type,
  amount,
  description,
  handleType,
  handleAmount,
  handleDescription,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>add item</h4>
        <div className="form-control">
          <select onChange={handleType} value={type} className="">
            <option defaultValue value="type">
              type
            </option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <input
            type="number"
            placeholder="jumlah"
            value={amount}
            onChange={handleAmount}
          />
          <input
            type="text"
            placeholder="keterangan"
            value={description}
            onChange={handleDescription}
          />
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default BudgetForm;

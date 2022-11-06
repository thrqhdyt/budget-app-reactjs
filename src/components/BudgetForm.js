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
        <div className="form-control">
          <select onChange={handleType} value={type} className="select-option">
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
          <button type="submit">Tambahkan</button>
        </div>
      </form>
    </>
  );
};

export default BudgetForm;

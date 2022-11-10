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
            <option value="income">Pemasukan</option>
            <option value="expense">Pengeluaran</option>
          </select>
          <input
            type="number"
            placeholder="jumlah"
            min={0}
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

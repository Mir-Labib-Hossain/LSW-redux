import { useEffect, useRef } from "react";
import { useAddTransactionMutation } from "../service/transactionAPI";

const Form = () => {
  const nameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const amountRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const typeIncomeRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const typeExpenseRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [addTransaction, { isSuccess }] = useAddTransactionMutation();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const selectedType = typeIncomeRef.current.checked ? typeIncomeRef.current.value : typeExpenseRef.current.value;
    addTransaction({ name: nameRef.current.value, amount: amountRef.current.value, type: selectedType });
  }


  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Add new transaction</h3>

      <div className="form-group">
        <label htmlFor="transaction_name">Name</label>
        <input ref={nameRef} type="text" name="transaction_name" placeholder="My Salary" />
      </div>

      <div className="form-group radio">
        <label htmlFor="transaction_type">Type</label>
        <div className="radio_group">
          <input
            ref={typeIncomeRef}
            type="radio"
            onChange={() => {
              console.log("onChange");
            }}
            value="income"
            name="transaction_type"
            checked
          />
          <label htmlFor="transaction_type">Income</label>
        </div>
        <div className="radio_group">
          <input
            ref={typeExpenseRef}
            type="radio"
            onChange={() => {
              console.log("onChange");
            }}
            value="expense"
            name="transaction_type"
            placeholder="Expense"
          />
          <label htmlFor="transaction_type">Expense</label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="transaction_amount">Amount</label>
        <input ref={amountRef} type="number" placeholder="300" name="transaction_amount" />
      </div>

      <button className="btn">Add Transaction</button>
      <button className="btn cancel_edit">Cancel Edit</button>
    </form>
  );
};

export default Form;

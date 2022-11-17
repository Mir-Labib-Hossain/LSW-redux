import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { removeEditing } from "../features/transactionSlice";
import { useAddTransactionMutation, useUpdateTransactionMutation } from "../service/transactionAPI";

const Form = () => {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<string>("income");

  const editing = useAppSelector((state) => state.transaction.editing);
  const dispatch = useAppDispatch();

  const [addTransaction] = useAddTransactionMutation();
  const [updateTransaction] = useUpdateTransactionMutation();

  const handleReset = () => {
    setName(""); // default value
    setAmount(0); // default value
    setType("income"); // default value
    dispatch(removeEditing());
  };
  const handleSubmit = () => {
    if (editing) updateTransaction({ id: editing.id, name, amount, type });
    else addTransaction({ name, amount, type });
    handleReset();
  };

  useEffect(() => {
    if (editing) {
      setName(editing.name);
      setAmount(editing.amount);
      setType(editing.type);
    }
  }, [editing]);

  return (
    <div className="form">
      <h3>Add new transaction</h3>

      <div className="form-group">
        <label htmlFor="transaction_name">Name</label>
        <input required value={name} type="text" name="transaction_name" placeholder="Ex: PizzaBurg " onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="form-group radio">
        <label htmlFor="transaction_type">Type</label>
        <div className="radio_group">
          <input
            type="radio"
            onChange={() => {
              setType("income");
            }}
            value="income"
            name="transaction_type"
            checked={type === "income"}
          />
          <label htmlFor="transaction_type">Income</label>
        </div>
        <div className="radio_group">
          <input
            type="radio"
            onChange={() => {
              setType("expense");
            }}
            value="expense"
            name="transaction_type"
            checked={type === "expense"}
          />
          <label htmlFor="transaction_type">Expense</label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="transaction_amount">Amount</label>
        <input required value={amount} type="number" placeholder="300" name="transaction_amount" onChange={(e) => setAmount(parseInt(e.target.value))} />
      </div>

      <button className="btn" onClick={handleSubmit}>
        {editing ? "Update" : "Add"} Transaction
      </button>
      {editing && (
        <button className="btn cancel_edit" onClick={handleReset}>
          Cancel Editing
        </button>
      )}
    </div>
  );
};

export default Form;

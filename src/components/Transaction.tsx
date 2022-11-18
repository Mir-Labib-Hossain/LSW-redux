import { useMatch, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import deleteIcon from "../assets/images/delete.svg";
import editIcon from "../assets/images/edit.svg";
import { addEditing } from "../features/transactionSlice";
import { useDeleteTransactionMutation } from "../service/transactionAPI";
type Props = {
  transaction: ITransaction;
};

const Transaction = ({ transaction }: Props) => {
  const { id, amount, name, type } = transaction;

  const [deleteTransaction] = useDeleteTransactionMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const match = useMatch("/");

  const handleDelete = () => deleteTransaction(id);
  const handleEdit = () => {
    if (!match) navigate("/");
    dispatch(addEditing(transaction));
  };

  return (
    <li className={`transaction ${type === "income" ? "income" : "expense"}`}>
      <p>{name}</p>
      <div className="right">
        <p>৳ {amount}</p>
        <button className="link" onClick={handleEdit}>
          <img className="icon" src={editIcon} />
        </button>
        <button className="link" onClick={handleDelete}>
          <img className="icon" src={deleteIcon} />
        </button>
      </div>
    </li>
  );
};

export default Transaction;

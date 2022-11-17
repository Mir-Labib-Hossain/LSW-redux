import { useAppDispatch } from "../app/hooks";
import deleteIcon from "../assets/images/delete.svg";
import editIcon from "../assets/images/edit.svg";
import { addEditing } from "../features/transactionSlice";
import { useDeleteTransactionMutation } from "../service/transactionAPI";

type Props = {
  data: ITransaction;
};

const Transaction = ({ data }: Props) => {
  const { id, amount, name, type } = data;
  const [deleteTransaction] = useDeleteTransactionMutation();
  const dispatch = useAppDispatch();
  const handleDelete = () => deleteTransaction(id);
  const handleEdit = () => dispatch(addEditing(data));

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

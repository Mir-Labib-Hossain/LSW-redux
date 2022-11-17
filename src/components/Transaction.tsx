import deleteIcon from "../assets/images/delete.svg";
import editIcon from "../assets/images/edit.svg";
import { useDeleteTransactionMutation } from "../service/transactionAPI";

type Props = {
  data: ITransaction;
};

const Transaction = ({ data }: Props) => {
  const { id, amount, name, type } = data;
  const [deleteTransaction] = useDeleteTransactionMutation();
  const handleDelete = () => deleteTransaction(id);
  return (
    <li className="transaction income">
      <p>{name}</p>
      <div className="right">
        <p>৳ {amount}</p>
        <button className="link">
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

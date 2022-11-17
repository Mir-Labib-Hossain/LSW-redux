type Props = {
  transactions: ITransactions;
};

const TopCard = ({ transactions }: Props) => {
  let balance = 0;
  
  transactions.map(({ type, amount }: ITransaction) => {
    if (type === "income") balance = balance + amount;
    else balance = balance - amount;
  });

  return (
    <div className="top_card">
      <p>Your Current Balance</p>
      <h3>
        <span>৳</span>
        <span>{balance}</span>
      </h3>
    </div>
  );
};

export default TopCard;

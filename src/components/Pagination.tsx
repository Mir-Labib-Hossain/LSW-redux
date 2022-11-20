type Props = {
  currentPage: number;
  totalPage: Number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Paginations = ({ currentPage, totalPage, setCurrentPage }: Props) => {
  let buttons: JSX.Element[] = [];
  for (let i = 1; i <= totalPage; i++) {
    buttons.push(
      <button key={i} className={`pagination ${currentPage === i && "pagination_active"} `} onClick={() => setCurrentPage(i)} disabled={currentPage === i}>
        {i}
      </button>
    );
  }
  return <div>{buttons}</div>;
};

export default Paginations;

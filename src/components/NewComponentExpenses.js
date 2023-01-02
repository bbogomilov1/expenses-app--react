import ExpenseItem from "./ExpenseItem";

function NewComponentExpenses(props) {
  return (
    <div>
      {props.data.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      ))}
    </div>
  );
}

export default NewComponentExpenses;

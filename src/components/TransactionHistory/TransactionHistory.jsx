import TransactionItem from "../TransactionItem/TransactionItem";
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ transactions }){
return (
    <table className={css.transactionTable}>
    <thead className={css.tableHead}>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
    </thead>
    <tbody>
        {transactions.map(transaction => (
            <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
    </tbody>
</table>
)
}



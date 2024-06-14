import css from "./TransactionItem.module.css";

export default function TransactionItem({ transaction:{ type, amount, currency } }) {
return (
    <tr className={css.text}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
</tr>
)
}
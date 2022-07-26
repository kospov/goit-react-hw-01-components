import s from './Transaction.module.css'

const Transaction = ({ type, amount, currency }) => {
    return (
        <tr>
          <td className={s.tableCellType}>{type}</td>
          <td className={s.tablecellAmount}>{amount}</td>
          <td className={s.tablecellCurrency}>{currency}</td>
        </tr>
    )
}

export default Transaction;
import PropTypes from 'prop-types';
import Transaction from '../Transaction/Transaction';
import s from './TransactionHistory.module.css'

const TransactionHistory = ({ items = [] }) => {
  return (
    <table className={s.history}>
      <thead className={s.tableHeader}>
        <tr>
          <th className={s.cellHeader}>Type</th>
          <th className={s.cellHeader}>Amount</th>
          <th className={s.cellHeader}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(el => {
            return <Transaction
                key={el.id}
                type={el.type}
                amount={el.amount}
                currency={el.currency}
            />
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  )
}

export default TransactionHistory;

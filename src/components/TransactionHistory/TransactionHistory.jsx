import PropTypes from 'prop-types';
import Transaction from '../Transaction/Transaction';

const TransactionHistory = ({ items = [] }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
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
};

TransactionHistory.prototype = {
    key: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
}

export default TransactionHistory;

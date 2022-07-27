import PropTypes from 'prop-types';
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

Transaction.prototype = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
}

export default Transaction;
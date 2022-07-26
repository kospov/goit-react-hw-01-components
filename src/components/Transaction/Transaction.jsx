const Transaction = ({type, amount, currency, key}) => {
    return (
        <tr key={key}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
    )
}

export default Transaction;
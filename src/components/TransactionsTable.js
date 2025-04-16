import React from 'react';
import PropTypes from 'prop-types';

const TransactionsTable = ({ data }) => (
  <div>
    <h2>All Transactions</h2>
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Customer ID</th>
          <th>Date</th>
          <th>Amount ($)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((tx) => (
          <tr key={`${tx.customerId}-${tx.date}-${tx.amount}`}>
            <td>{tx.customerId}</td>
            <td>{new Date(tx.date).toLocaleDateString()}</td>
            <td style={{ textAlign: 'right' }}>{tx.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

TransactionsTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TransactionsTable;
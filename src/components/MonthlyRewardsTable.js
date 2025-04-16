import React from 'react';
import PropTypes from 'prop-types';

const MonthlyRewardsTable = ({ data }) => (
  <div>
    <h2>Monthly Rewards</h2>
    {Object.entries(data).map(([customerId, months]) => (
      <div key={customerId}>
        <h3>Customer: {customerId}</h3>
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount ($)</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(months).map(([month, txList]) => (
              <React.Fragment key={month}>
                <tr>
                  <td colSpan="3"><strong>{month}</strong></td>
                </tr>
                {txList.map((tx) => (
                  <tr key={tx.date + tx.amount}>
                    <td>{new Date(tx.date).toLocaleDateString()}</td>
                    <td style={{ textAlign: 'right' }}>{tx.amount}</td>
                    <td style={{ textAlign: 'right' }}>{tx.points}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    ))}
  </div>
);

MonthlyRewardsTable.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MonthlyRewardsTable;

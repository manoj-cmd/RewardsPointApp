import React from 'react';
import PropTypes from 'prop-types';

const TotalRewardsTable = ({ data }) => (
  <div>
    <h2>Total Rewards</h2>
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Customer ID</th>
          <th>Total Points</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(data).map(([customerId, total]) => (
          <tr key={customerId}>
            <td>{customerId}</td>
            <td style={{ textAlign: 'right' }}>{total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

TotalRewardsTable.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TotalRewardsTable;
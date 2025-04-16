import React, { useEffect, useState, useMemo } from 'react';
import MonthlyRewardsTable from './components/MonthlyRewardsTable';
import TotalRewardsTable from './components/TotalRewardsTable';
import TransactionsTable from './components/TransactionsTable';
import { fetchTransactions } from './services/transactionService';
import { calculateMonthlyRewards, calculateTotalRewards } from './utils/rewardUtils';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactions()
      .then((data) => setTransactions(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const monthlyData = useMemo(() => calculateMonthlyRewards(transactions), [transactions]);
  const totalData = useMemo(() => calculateTotalRewards(monthlyData), [monthlyData]);

  if (loading) return <p>Loading transactions...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Customer Rewards Program</h1>
      <MonthlyRewardsTable data={monthlyData} />
      <TotalRewardsTable data={totalData} />
      <TransactionsTable data={transactions} />
    </div>
  );
}


export default App;

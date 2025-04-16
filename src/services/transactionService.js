export const fetchTransactions = async () => {
  const response = await fetch('/data/transactions.json');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

export const calculateRewards = (amount) => {
  if (!amount || isNaN(amount)) return 0;
  const over100 = Math.max(0, amount - 100);
  const between50and100 = Math.max(0, Math.min(amount, 100) - 50);
  return over100 * 2 + between50and100 * 1;
};

export const calculateMonthlyRewards = (transactions) => {
  const monthlyMap = {};

  transactions.forEach(({ customerId, date, amount }) => {
    const month = new Date(date).toLocaleString('default', { month: 'short', year: 'numeric' });
    const points = calculateRewards(amount);

    if (!monthlyMap[customerId]) monthlyMap[customerId] = {};
    if (!monthlyMap[customerId][month]) monthlyMap[customerId][month] = [];

    monthlyMap[customerId][month].push({ amount, points, date });
  });

  return monthlyMap;
};

export const calculateTotalRewards = (monthlyData) => {
  const totalMap = {};
  Object.entries(monthlyData).forEach(([customerId, months]) => {
    let total = 0;
    Object.values(months).forEach((txList) => {
      total += txList.reduce((sum, tx) => sum + tx.points, 0);
    });
    totalMap[customerId] = total;
  });
  return totalMap;
};
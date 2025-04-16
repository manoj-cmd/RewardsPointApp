import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

// Mock data
const mockTransactions = [
  {
    id: 1,
    customerId: 'C001',
    name: 'Alice',
    amount: 120,
    date: '2025-01-15'
  },
  {
    id: 2,
    customerId: 'C002',
    name: 'Bob',
    amount: 75,
    date: '2025-01-20'
  }
];

// Mock global fetch
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockTransactions)
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders reward dashboard with headings', async () => {
  render(<App />);

  expect(screen.getByText(/loading transactions/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText(/Monthly Rewards/i)).toBeInTheDocument();
    expect(screen.getByText(/Total Rewards/i)).toBeInTheDocument();
    expect(screen.getByText(/All Transactions/i)).toBeInTheDocument();
  });
});

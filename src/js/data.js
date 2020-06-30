const cashback = {
  gold: {
    bound: 100000,
    percent: 5,
  },
  silver: {
    bound: 10000,
    percent: 2,
  },
  regular: {
    bound: 1000,
    percent: 1,
  },
};

export default function calculateCashback(amount) {
  const key = Object.keys(cashback).find(
    (status) => amount >= cashback[status].bound,
  );

  if (!key) return 0;

  return Math.ceil(amount * cashback[key].percent / 100);
}

export const validateReceipt = ({ orderId, amount }) => {
  if (!orderId || !amount) {
    return "All receipt fields are required";
  }

  if (amount <= 0) {
    return "Amount must be greater than zero";
  }

  return null;
};

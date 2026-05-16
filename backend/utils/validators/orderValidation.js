export const validateOrder = ({
  customerName,
  productName,
  quantity,
  totalPrice,
}) => {
  if (!customerName || !productName || !quantity || !totalPrice) {
    return "All order fields are required";
  }

  if (quantity <= 0) {
    return "Quantity must be greater than zero";
  }

  if (totalPrice <= 0) {
    return "Total price must be greater than zero";
  }

  return null;
};

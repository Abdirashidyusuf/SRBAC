export const validateProduct = ({ name, price, quantity }) => {
  if (!name || !price || !quantity) {
    return "All product fields are required";
  }

  if (price <= 0) {
    return "Price must be greater than zero";
  }

  return null;
};

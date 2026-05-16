export const validateCustomer = ({ name, phone, address }) => {
  if (!name || !phone || !address) {
    return "All customer fields are required";
  }

  return null;
};

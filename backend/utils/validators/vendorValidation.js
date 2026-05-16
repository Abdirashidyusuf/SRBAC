export const validateVendor = ({ name, company }) => {
  if (!name || !company) {
    return "All vendor fields are required";
  }

  return null;
};

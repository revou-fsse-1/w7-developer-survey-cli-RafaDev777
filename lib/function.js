const validationFactory = (checker, errMsg) => {
  return (input) => (checker(input) ? true : errMsg);
};

const checkEmptyString = (input) => {
  return input.trim().length > 0;
};
const checkEmail = (input) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
};
const checkExp = ({ isExp }) => {
  return isExp == "yes";
};

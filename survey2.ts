import inquirer, { QuestionCollection } from "inquirer";

const validationFactory = (checker: any, errMsg: String) => {
  return (input: string) => (checker(input) ? true : errMsg);
};

const checkEmptyString = (input: string) => {
  return input.trim().length > 0;
};
const checkEmail = (input: string) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
};
const checkExp = (isExp: boolean) => {
  return isExp == "yes";
};

const questions: QuestionCollection = [
  {
    type: "input",
    name: "firstName",
    message: "What's your first name?",
    validate: validationFactory(checkEmptyString, "Name cannot be empty"),
  },
  {
    type: "input",
    name: "email",
    message: (answer) =>
      `Hello ${answer.firstName}, what is your email address?`,
    validate: validationFactory(checkEmail, "Please enter valid email address"),
  },

  {
    type: "list",
    name: "isExp",
    message: "Are you an experienced developer?",
    choices: ["yes", "no"],
  },
  {
    type: "list",
    name: "yearExp",
    message: "How many years of experiencee you have with JavaScript?",
    choices: ["0-1", "1-3", "3-5", "5-10", "10+"],
    when: checkExp,
  },

  {
    type: "checkbox",
    name: "jsLibrary",
    message: "How many javascript library do you know?",
    choices: ["React.js", "Veu", "Angular", "Node.js", "jQuery", "D3.js"],
    when: checkExp,
    validate: (input) =>
      input.length > 0 ? true : "You have to choose at least one",
  },

  {
    type: "number",
    name: "salary",
    message: "What is your desired salary?",
    when: checkExp,
    validate: (input) => (input > 0 ? true : "Salary cannot be free"),
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(JSON.stringify(answers, null, 2));
  })
  .catch((error) => {
    console.log(
      error.isTtyError ? "your console environtment is not supported" : error
    );
  });

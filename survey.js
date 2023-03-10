import inquirer from "inquirer";
import {
  validationFactory,
  checkEmptyString,
  checkEmail,
  checkExp,
} from "/lib/function.js";

const questions = [
  // Type your question here
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
    name: "isExperienced",
    message: "Are you an experienced developer?",
    choices: ["yes", "no"],
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
    choice: ["0-1", "1-3", "3-5", "5-10", "10+"],
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

// run your command
inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(JSON.stringify(answers, null, 2));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Your console environment is not supported!");
    } else {
      console.log(error);
    }
  });

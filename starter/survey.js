import inquirer from "inquirer";

const questions = [
  // Type your question here
  questName = "What's your first name?",
  questEmail = `Hello ${questName}, What's your email address?`,
  questExpDev = "Are your experienced Developer?",
  questYears = "How many years of experience you have with JavaScript?",
  questJavaLib = "What JavaScript library do you know?",
  questSalary = "What is your desired salary?"

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

#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgGreen("\t\t\t--WORD COUNTER--\n"));

const answer= await inquirer.prompt(
    [
        {
            message:("Enter your sentence to count the word: "),
            name:"sentence",
            type:"input",
            transformer:(input) => {
                return chalk.yellowBright(input);
            }
        }
    ]
);

const words=answer.sentence.trim().split(" ");

console.log("\n",words);

console.log(`\nYour sentence word count is: ${chalk.yellowBright(words.length)}`);
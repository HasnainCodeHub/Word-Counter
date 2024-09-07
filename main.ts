#! /usr/bin/env node

//Importing Inquirer and Chalk
import inquirer from "inquirer";
import chalk from "chalk"


//Printing A colorfull and Readable Welcoming Message

console.log(chalk.bold.bgYellow ("\t\t Welcome To Hasnain's Coding World "));
console.log("=".repeat(60));

//Prompt the user to enter a sentence
let answer = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:chalk.bold.green("Enter Any Sentence which words you want to count")
    }
])

//trimming a sentence and splitting it into words based on "spaces"

let words = answer.sentence.trim().split(" ");

//analysis of user input Sentence
console.log("=".repeat(60));

console.log(chalk.bold.yellow("Sentence Words:"));
console.log(words);
console.log(`${chalk.bold.italic.blue(  '\t\tTotal Words Are : ')}${chalk.bold.red(words.length)}`);

console.log("=".repeat(60));


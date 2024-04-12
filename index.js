#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, // Base Currency
    EUR: 0.94,
    GBP: 0.80,
    SAR: 3.75,
    INR: 83.39,
    PKR: 278.07,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'SAR', 'INR', 'PKR']
    },
    {
        name: "to",
        message: "Enter From Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'SAR', 'INR', 'PKR']
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: 'number'
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // USD base currency // 4
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);

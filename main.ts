#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

//Initializing  user balance and pin code
let myBalance = 5000;
let myPin = 1234;

//print welcome message
console.log(chalk.blue("\n \t Welcome to Code With Maria - ATM Machine \n"));

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: (chalk.yellow ("Enter your pin code:")),
    }
])

if(pinAnswer.pin === myPin){
    console.log(chalk.green("\nPin is correct,Login Succesfully!\n"));
   // console.log(`Current Account Balance is ${myBalance}`)

    let OperationAns = await inquirer.prompt([
        {
            name: "Operation",
            type: "list",
            message:"Select an Operation",
            choices: ["WithDraw amount","Check Balance"]
        }
])

    if(OperationAns.Operation === "WithDraw amount"){
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "Select a withdrawal method",
                choices: ["Fast Cash" , "Enter Amount"]
            }
        ])
        if(withdrawAns.withdrawMethod === "Fast Cash"){
         let fastcashAns = await inquirer.prompt([
           {
           name: "fastCash",
           type: "list",
           message:"Select amount:",
           choices: ["1000" , "2000" , "5000" , "10000 ", "50000"]
           }
         ])

         if(fastcashAns.fastcash > myBalance){
            console.log(chalk.red("Insufficient Balance"));
         }
         else{
            myBalance -= parseFloat(fastcashAns.fastCash)
            console.log(`${ parseFloat(fastcashAns.fastCash)} withdraw successfully`);
            console.log(`Your Remaining Balance is: ${myBalance}`);
         }
        }
        
        let amountAns = await inquirer.prompt([
         {
          name:"amount",
          type:"number",
          message:"Enter the Amount to WithDraw:"
         }
  ]  )

      if(amountAns.amount > myBalance){
         console.log(chalk.red("Insufficient Balance"));
      }
      else{
        myBalance -= amountAns.amount
        console.log(`${amountAns.amount} WithDraw Successfully`);
        console.log(`Your Remaining Balance is: ${myBalance}`);
      }
     }
      else if(OperationAns.Operation === "Check Balance"){
        console.log(`Your Account Balance is ${myBalance}`);
      }
    }
    else{
        console.log(chalk.red("Pin is incorrect, Try again !"));
    }
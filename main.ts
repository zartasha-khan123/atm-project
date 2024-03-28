#! /usr/bin/env node
import inquirer from "inquirer";

import chalk from "chalk";

let userId: string="";

let myBalance = 10000; //Dollar

let pinCode = 5566;

//username asking

let userName = await inquirer.prompt([{
    name:"username",
    type:"input",
    message:chalk.yellow("\nwhats your good name!"),
    
}]);
if (userName.username !== undefined && userName.username !== null &&  userName.username !== "" ){

userId = userName.uername; 
}
// main function

async function myfunction(){
    console.log(chalk.yellow.bold("\n\t Welcome to ATM \n"));
}


let pinAnswer = await inquirer.prompt([{
    name:"pin",
    message:"enter your pin",
    type:"number"
}])
//
if ( pinAnswer.pin === pinCode){
    console.log("correct pin code!");

    let operationAns= await  inquirer.prompt(
        [
            {
                name:"operations",
                message:"please select options",
                type:"list",
                choices:["Withdraw","Check Balance","Fast Cash"],
            },
        ]
     );
     //console.log(operationAns.operations);

     if( operationAns.operations === "Withdraw"){

        let amountAns= await inquirer.prompt([{
            name:"Amount",
            message:"Enter your amount",
            type:"number"

        },

    ]);
    if(amountAns.Amount <= myBalance){
        myBalance -= amountAns.Amount;
        console.log(`your balance is ${myBalance}`);

    }
    else {
        console.log('insufficient balance');
    }

     }
    
     else if(operationAns.operations === "Check Balance"){
        console.log(`your balance is ${myBalance}`);
     }

     else if(operationAns.operations === "Fast Cash"){

        let amountAns1= await inquirer.prompt([{
            name:"fastoption",
            message:"how much amount do you withdraw",
            type:"list",
            choices:["1000","5000","2000"],

        }

    ]); 
     if(amountAns1.fastoption ==="1000"){
        myBalance -= amountAns1.fastoption;
        console.log(`your ramaining balance is ${myBalance}`);

    }
    if(amountAns1.fastoption ==="5000"){
        myBalance -= amountAns1.fastoption;
        console.log(`your ramaining balance is ${myBalance}`);

    }

    if(amountAns1.fastoption ==="2000"){
        myBalance -= amountAns1.fastoption;
        console.log(`your ramaining balance is ${myBalance}`);

    }
          
else 
{
            console.log("incorrect pin number");}
}}

const confirmation_ans= await inquirer.prompt([{

    type:"confirm",
    name:"user.confirm",
    message:chalk.greenBright("Do you want to do another transaction ?")
}]);
{
if( confirmation_ans.user.confirm === false){

    console.log(chalk.blue.bold("\n\tThank you for using ATM"));
}}





process.exit(); //// code for program end

myfunction();


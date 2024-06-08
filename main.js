import inquirer from "inquirer";
let myBalance = 10000;
let pinCode = 23456;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code",
    },
]);
//check the pincode
if (pinAnswer.pin === pinCode) {
    console.log("correct pin code");
}
else {
    console.log("incorrect pin code");
}
let operationAnswer = await inquirer.prompt({
    name: "operation",
    type: "list",
    message: "please select option",
    choices: ["withdraw", "fast-cash", "check balance"],
});
//for cash withdraw option
if (operationAnswer.operation === "withdraw") {
    let answerWithdraw = await inquirer.prompt([
        {
            name: "withdraw",
            type: "number",
            message: "enter withdraw amount",
        },
    ]);
    if (myBalance >= answerWithdraw.withdraw) {
        myBalance -= answerWithdraw.withdraw;
        console.log(`your remaining balance is=${myBalance}`);
    }
    else {
        console.log("you have insufficent balance");
    }
}
//if the operation answer is fastcash
else if (operationAnswer.operation === "fast-cash") {
    let answerFastcash = await inquirer.prompt([
        {
            name: "fastCash",
            type: "list",
            message: "select the amount you want to withdraw",
            choices: ["1000", "5000", "10000", "15000"],
        },
    ]);
    if (myBalance >= answerFastcash.fastCash) {
        myBalance -= answerFastcash.fastCash;
        console.log(`your remaining balance is ${myBalance}`);
    }
    else {
        console.log("you have insufficient balance");
    }
}
//if operation answer is check balance
if (operationAnswer.operation === "check balance") {
    console.log(`your balance is=${myBalance}`);
}

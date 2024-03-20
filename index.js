#! /usr/bin/env node
//import ka matlab kise bhe aik file ka data dosre file se combine karna jaise ke yahan par 
//index.js or module ka data combine karke simple calculator banaya hy 
import inquirer from 'inquirer';
const answer = await inquirer.prompt([
    { message: 'Enter your first number', type: 'number', name: 'firstNumber' },
    { message: 'Enter your second number', type: 'number', name: 'secondNumber' },
    {
        message: 'Select one of the operator to perform action',
        type: 'list',
        name: 'operator',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
    }, //sab se bare mistake jo aae the wo cmd ma aae the wahan pa compile 
]); //karte waqt tsc index.ts likha tha jis ke waja se error araha tha 
//simply tsc likhna kue ke config.json file banane ke bad sirf tsc likhne se compile hojata hy
if (answer.operator === 'Addition') {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === 'Subtraction') {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === 'Multiplication') {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === 'Division') {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log('Please select a valid operator');
}
console.log('THE END');

// Your code here
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office') {
     return `This Monday, I will ${activity}.`
}

function wrapAdjective(character="*") {

    return (adj = "special") => `You are ${character}${adj}${character}!` 

}

const Calculator = {

    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2

}

function actionApplyer(start, functions) {
     if (functions.length === 0) return start
     let startingValue = start
     for (let f of functions) {
         startingValue= f(startingValue)
     }
     return startingValue
}
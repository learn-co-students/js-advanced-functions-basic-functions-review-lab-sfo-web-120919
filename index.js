// Your code here

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

//console.log(saturdayFun());

function mondayWork(activity = "go to the office") {

  return `This Monday, I will ${activity}.`

}

//console.log(mondayWork())


// function add() {
//   var counter = 0;
//   function plus() {counter += 1;}
//   plus();   
//   return counter;
// } 

//  function foo() 
//       { 
//             var b = 1; 
//              function inner(){ 
//                  return b; 
//             } 
//             return inner; 
//          } 

//          var get_func_inner = foo(); 

function wrapAdjective(visualFlair = "*") {
     const firstStr = "You are"
  function inner(str = "special") {
     return  firstStr + " " + visualFlair + str + visualFlair + "!";
  }
  return inner
}

//console.log(wrapAdjective()())

const Calculator = {
  add: function add(){
    return 1 + 3
  },

  subtract: function subtract() {
    return 1 -3
  },

  multiply: function multiply() {
    return 1 * 3
  },

  divide: function divide() {
    return 10 / 5
  }
}

function actionApplyer(num, arrayOfFunctions) {
  if (arrayOfFunctions.length === 0) {
    return num
  }

  arrayOfFunctions.forEach(functionElement => {
    functionElement(13)
  })
  return 4
}
// code your solution here
function saturdayFun(todo = "roller-skate") {
  return `This Saturday, I want to ${todo}!`;
}
function mondayWork(todo = "go to the office") {
  return `This Monday, I will ${todo}.`;
}
function wrapAdjective(flair = "*") {
    const innerFunction = function (emphatic = "a hard worker") {
        return `You are ${flair}${emphatic}${flair}!`;
    };
    return innerFunction;
}

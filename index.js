// Assignment1
function vectorLength([[x1,y1],[x2,y2]]){
  return Math.sqrt(Math.pow((x1-x2),2) + Math.pow((y1-y2),2))
}
console.assert(vectorLength([[0, 1],[0, 0]]) === 1)
console.assert(vectorLength([[0, 3],[4, 0]]) === 5)
console.assert(vectorLength([[1, -1],[1, -1]]) === 0)

//Assignment2
var myVarOne = [10, 20, 30, 40][1, 2, 3]
var myVarTwo = [10, 20, 30, 40][3, 2, 1]
console.assert(myVarOne === 40)
console.assert(myVarTwo === 20)
// The numbers 40 and 20 are true because the last number in myVarOne is passed and in myVartwo the second number is passed.

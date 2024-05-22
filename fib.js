//each number is the sum of the two preceding numbers 
//first number
//for 10 push number to an array and print 

console.log("\nFibonacci: ")
oldNum = 0;
newNum = 1;
fibNum = 0;

let fibArray = [];

for (let i=1; i<=10; i++)
{ 
    console.log(oldNum)
    fibArray.push(oldNum)
    fibNum = oldNum + newNum;
    oldNum = newNum;
    newNum = fibNum;
}


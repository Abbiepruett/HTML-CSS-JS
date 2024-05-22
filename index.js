let name = "Abbie"
const lastName = "LN"

//let address = "5 Eiepen Park Johannesburg"
let age = 25;

let uniqueKey = Symbol("key");
let uniqueKey2 = Symbol("key");

let isCool = true;
let veryCool = false;

console.log(isCool);
console.log(veryCool);

let DOB = null;
console.log(DOB);

let address;
console.log(address);//undefined

console.log(uniqueKey == uniqueKey2);//boolean

console.log(address);
console.log( typeof age)//gives type number

console.log(name);
console.log(lastName)


//----------------------

//how primative types are immutable

let x = 5;
let y = x;//creating a deep copy (new memory refference)
y=10;

console.log(x); //=5 cont ca

//--------------------
//how non primative types are mutable
//pass by reference
let arr = [1,2,3];
let arr2 = arr; //using the same memory reference (pass by reference)
arr2.push(4);

console.log(arr);

//---------------------
firstName = "Byron";
console.log(`My name is ${firstName}`);// same thing 
console.log('My name is' +  firstName.toLocaleUpperCase());//
console.log('Y index' +  firstName.indexOf("y"));//
console.log("Sub string" + firstName.substring(1,2));
console.log(firstName[2]);

/**
 * non primative data types
 */


const address1 ={
    streetName: "Ripen Ave",
    suburb: "Ripein Park",
    streetNumber:5
};

const person = {
    firstName:"Byron",
    lastName: "DE",
    address1,
    age:31
   
};

const getFullName=()=>{
    return person.firstName + " " + person.lastName + "!";
}


console.log(person);

//console.log(person.getFullName());


//---Arrays
let arr1 = new Array(1,2,3,4);
console.log(arr1)

let arr3 = [1,2,3,4, "a", "b", "c", "d",person];
console.log(arr2);


let fruits =["apple", "orange", "pear", "Mango"];
const popped = fruits.pop();

fruits.push("straberry");
console.log(fruits);
console.log(fruits.length);
// console.log(fruits[2]);
console.log(popped);

fruits.unshift("straberry");
console.log(fruits);


/**
 * Operetors modulus (called remainder in java scripts)
 */
console.log("\nRemainder:\n")
let remainder = 13 %5
console.log(remainder);


/**loops */
console.log("\nFor:\n")

//For (looping through array)
for(let i = 0; i<fruits.length; i++){
    // console.log(i);
    let fruit = fruits[i];
    console.log(fruit);
}

//for of 
console.log("\nFor of:\n")
for(let fruit of fruits){
    console.log(fruit);
}

//for each
console.log("\nforEach:\n")
fruits.forEach((fruit) =>{
    console.log(fruit);
});


//higher order array methods(look at methods on slides)
//filter
const filterFunction = (fruit)=>{
    return  fruit != "apple";
}
const filteredFruits = fruits.filter(filterFunction)//funciton that takes in a function as a parameter
console.log("\nfilteredFruits");
console.log(filteredFruits);

//functions
const todos = [
    {
    id:1,
    title: "Take out trash",
    completed: true
    },
{
    id:2,
    title: "Feed dog",
    completed:false
}


];

const getCompletedTodos = (todos)=>{//(todos is an array or objects (i didnt write down))
    return todos.filter((todo)=>{
      return  todo.completed == true;
    });
};


console.log(getCompletedTodos(todos));

const newTodos = todos.map((todo)=>{
    return{
        id:todo.id,

    };
})

//--

// const newTodos = todos.map(x=>{

/**
 * CONDITIONAL STATEMENTS:
 */
//if else
task = {
    id : 3,
    title : " gp tp the bank",
    completed: true

}

if(task.completed !== true){
    console.log("Task done")
}else
{
    console.log("Take not done")

}

//switch 
console.log("\nSwitch:\n")
switch(task.completed){
    case true:
        console.log("Task done");
        break;
    case false:
        console.log("Task not done");
        break;
    case null:
        console.log("Task not done")
        break;
    default:
        console.log("Task not done default");
}

//
console.log(task.completed === true ? "Task done" : "Task not done")
//first is if true, second is if false

//one way to make a function
let factor = 2
function addFactor(val)
{
    return val * factor;
}

console.log(addFactor(5));

//another way 
const addFactorVar = (val) =>
{
    return val * factor;
};

console.log(addFactorVar(5))

//access the 
const onSubmit = (e) =>{
    e.preventDefault();
    // console.log("onSubmit")
    const firstName = document.getElementsByName("firstName")[0].value;
    //const lastName = 
    console.log(firstName);
}
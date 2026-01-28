//  console.log is a print statement
console.log("Hello");
console.log("I love JS");
console.log("yeah!!")


// name = variable!!
name = "Komal";
age = 2;
price=99.99;
a=null;
y=undefined;
isfollow = true;
console.log(isfollow);
console.log(name);
console.log(a);
console.log(price);


// Variable Rules :
// 1). names are case senstive i.e upper case and lower case act as two different thing!! 
fullname="komal";
fullName="komal";
console.log(fullname);
console.log(fullName);

// 2). only letters, underscore and $ this charcters are allowed in the acitivity..

// 3). 1st character must be only a ltter or underscore or $!!

//  4). reserved words (keywords) cannot be used as variable name!


//  let , const & var !!
//  var (global scope varibale) : variable can be re-declared and upgraded [generally not used]
// let (block scope variable) : variable cannot be re-declared but can be updated!
// cosnt (block scope variabel) : variable cannot be re-declared or updated!!!p]

let fullNme = "kirti";
console.log(fullNme)

const name2="saina";
console.log(name2)

//  DATATYPES : primitive datatypes - 7
//  number , string , boolean , undefined , null , biglnt(last m "n" add hojata h) , symbol

//  non-primitive datatypes : objects (collection of values) - key:value pair m store hota h
const student = {
    fulName : "vanshika",
    age : 20,
    cgpa : 10,
    year : 1,
    pass : true,
}
 console.log(student);

// in object we can update only key not the value!!

const product = { 
    product_Name : "Parker_ball_pen",
    rating : 4,
    offer : 5,
    price : 300,
}
console.log(product);
console.log(typeof product);  // we see the datatype of prodyct i.e object
console.log(typeof product["rating"]); // and here we check the datatype of the rating inside the product object!!

// K3B: to check the datatype of a variable we use -- "typeof"
// comments : not the part of code ...extra info for user!
// single line comment
/* multi line comment */

//  OPERATORS!! -- used to perform some operation
// arithmetic operators : + , - ,* , /
let x = 5;
let h = 4;
let n = x+h
console.log(n); //addition
console.log(x+h); //addition
console.log("x+h=",x+h); //addition
console.log(x*h); //mulitplication
console.log(x/h); //division
console.log(x-h); // subtraction
console.log(x%h);  //modulas
console.log(x**h); // exponent

// binary operators!
console.log(x++); //post increment (here x ki value phele wali hi rhyegi)
console.log(x) // jb dubara print krenge tb increment wali print hongi...same for others too
console.log(--x); // pre decreament
console.log(x)
console.log(x--); // post drecreament
console.log(x)
console.log(++x); // pre decreament
console.log(x)

// Assignment operators !
//  "=" : equal to operator
//  "+=" : eg : a += 1 means a = a+1
// "-="
// "*="
//  "%="
// "**="


// Comparison operators! (gives true or false by comparing two values)
//  == : equal to ( only checks the value)
//  === : equal to and type ( ensures that no two value have different datatypes)
//  != : not equal to
//  !== : not equal to and type

let val1 = 35;
let val2 = "35";
let val3 = 45;
let val4 = 89;
console.log(val1 == val2);
console.log(val1 === val2);
console.log(val1 != val3);
console.log(val1 !== val2);
console.log(val1 > val3);
console.log(val2 <= val3);
console.log(val4 < val3);
console.log(val1 >= val4);

// Logical operators! (gives true or false after comparing multiple values!!)
// logical AND : && (only if all the condition are true returns true otherwise false)
// logical OR :  || (return true if any of the condition is true and returns false if all the condition are false)
// logical NOT : ! (if the condition is true it will retrun false and vise-versa)

let cond1 = val2 < val3;
let cond2 = val4 > val3;
let cond3 = val1 > val4;
console.log(cond3 && cond2)
console.log(cond3|| cond2)
console.log(!cond1)
console.log(!cond3)


//  CONDITIONAL STATETMENT!!

// if statement:
let mode = "dark";
let color;
if (mode === 'dark') {
    color = "black";
}
if (mode == "light") {
    color ="white";
}
console.log(color)



// if-else statement:
let Age = 25;
if (Age >= 18) {
    console.log("You can vote!");
}
else {
    console.log("you can't vote!");
}

// odd or even
let num = 10
if (num%2===0) {
    console.log("even");
}
else {
    console.log("odd");
}


// else-if statement:
let AGE = 86;
if (AGE >= 18 && AGE <= 60) {
    console.log("adult");
}
else if (AGE > 60) {
    console.log("Senior-citizen");
}
else {
    console.log("young");
}


// Ternary operators!! (works on 3 operands!! - 1 condition and 2 output)
// SYNTAX: "condition ? true output : false output"
let v = 25;
let result = v>=18 ? "adult" : "not adult";
console.log(result);

// MDN Docs!! (documention for js) - for reading!
// switch statement : read it from documentation! (this is not nescessary)
//switch statement(not used frequently)
let fruits = "Oranges";
switch (fruits){
    case 'Oranges':
        console.log("Oranges are 50 ruppees per kg.")
        break;
        
    case 'Mangoes':
        console.log("Mangoes are 50 ruppees per kg.")
        break;

    case 'Apples':
        console.log("Apples are 50 ruppees per kg.")
        break;
}
//break is there because switch statement considers all the statements after one works and the last onw works finally, so to only make the right one work break is used


// alert("hello world!"); //one time popup on the site!!
// let say = prompt("hello");
// console.log(say);
//  ALERT and PROMPT -- take input

// PRACTICE QUESTION 
// check if a number is divisible by 5 or not!!
// let numm = prompt("enter a number");
// if (numm%5==0) {
//     console.log(numm,"is divisible by 5");
// }
// else {
//     console.log(numm,"is not divisible by 5");
// }



// // PRACTICE QUESTION
// // give grade on the basis of scores!
// let score = prompt("enter the score:");
// if (score>=90 && score <=100) {
//     console.log("Grade A");
// }
// else if (score >= 70 && score < 90) {
//     console.log("Grade B");
// }
// else if (score >=60 && score <70) {
//     console.log("Grade C");
// }
// else if (score >= 50 && score <60) {
//     console.log("Grade D");
// }
// else {
//     console.log("Grade F");
// }


// loops in js
// 1). for loop!!
// 2). while loop!!
// 3). do-while loop!!


// FOR LOOP : SYNTAX
// for(initilizing statement ; stopping statement ; updation)
for(let i =1; i <= 5; i++) {
    console.log("hello world!!");
}
console.log("loop has ended");

// calculate sum of 1 to 100
let sum = 0;
for (let i = 1; i <=100; i++){
    sum += i;
}
console.log("sum:",sum);


// Infinite loop : (never ending loop--mostly never do it!!)
// there will be many cosequences if we do it....so always avoid it!!


// WHILE LOOP : SYNTAX --
// initilization - always before the loop
// while(condition) {.   //updation - inside the loop
//     //do some work
// }

let i = 1;
while(i<=10) {
    console.log("hello world");
    i++;
}


// DO_WHILE LOOP : SYNTAX -- (in this condition is always checked at the last!... means the program will run atleast one time whenever we run it!!)
// do {
//     //do some work
// } while(condition);

let j = 20;
do {
    console.log("hello!!")
    j++;
} while (j<=10);  // even when the condition was false...the code will run once and print "hello!" once!


let r = 1;
do {
    console.log("r=",r);
    r++;
} while(r<=5);



// FOR_OF LOOP : ( helps in apply loop on string and arrays!)

let str = "newton school of technology!";
let size =0
for(let i of str) {
    console.log(i);
    size++;
}
console.log("string size:",size)

// FOR IN LOOP: ( we can access key value pair using for in loop!)

let Student = {
    name :"KOMAL",
    agee : 18,
    cgpaa : 10,
    ispass : true,
};

for (let key in Student) {
    console.log("key=", key, "value=", Student[key]);
}


// PRACTICE QUESTION!!
// print all even numbers from 0 to 100.

for (let i=1; i<=100; i++) {
    if (i%2===0){
        console.log(i)
    }
}


// PRACTICE QUESTION!!
// Create a game where you start with any random game number.Ask the user to keep guessing the game numer until the user enters correct value!
// let game_num = 20;
// let user_num = prompt("guess the game number : ");

// while (user_num != game_num) {   // prompt m element string m jaa rhye h!!..
//     user_num=prompt("you entered wrong number. guess again : ");
// }
// console.log("Congratulations!! correctly guessed!!")



// STRINGS!!
let str1 = "happy day"
console.log(str1);
console.log(typeof(str1));  // tell the type of datatype!
console.log(str1.length); // return length of the string --- (string-name.length)
console.log(str1[7]); // return the value at the give index! ----(string-name[index-num])

// Template literals --(speacial type pf string)
let sent = `this is a template literal`; // --- done using backticks!
console.log(sent);
console.log(typeof sent);

let obj ={
    item : "pen",
    Pricee :10,
};
console.log("the cost of", obj.item, "is", obj.Pricee, "rupees");  // if we normally do in string so we have to do like this!

let output = `the cost of ${obj.item} is ${obj.Pricee} rupees`;  // and in this we can directly write just use the dollor sign!---(this is main benefit of template literal!
console.log(output);

//  STRING INTERPOLATION -- (to create string by doing substitution of placeholders! i.e template literal);

console.log("newton \n school");  // \n -- next line (is an escape character!)
console.log("hello \t guyyss");  // \t - tab space 

//escape characters ki length only 1 count hoti h

// string function (method)!!
// 1). string-name.toUpperCase() --- return the string with all upper-case
let str3 = " Newton School Of Technology.   "
let str4 = "located in sonepat!"
new_str = str3.toUpperCase();
console.log(new_str); // create a new string does not change the value of string!!
console.log(str3.toUpperCase());  
//strings are not immutable - that is value cannot be updated!
console.log(str3.toLowerCase());  // toLowerCase converts the string into lower case
console.log(str3.trim())  // trim removes all the whitespaces from the end and start!!
console.log(str3.slice(2,8));   //return the part of the string --- string-name.slice(start,end)
console.log(str3.concat(str4)); // joins the str4 with str3 -- i.e join any two given string!
console.log(str3.replace("Of","of")); // replace the given character with the given character!
console.log(str3.charAt(9)); // return the value at the given index.

// PRACTICE QUESTION!!
// let user_name = prompt("enter your name");
// let username = "@";
// let len = user_name.length;
// let UserName = username.concat(user_name);
// let USername = UserName.concat(len);
// console.log("Username: ", USername); 
// console.log("username:" ,username + user_name + len);



// ARRAYS : collection of items! --- example:
let heroes =["ironman","hulk","thor","batman"];
let marks =[96,75,99,66];
let info =["komal",86,"haryana"];
console.log(info);
console.log(marks);
console.log(marks.length);  //property
console.log(marks[3]); //returning the value at the given index.
console.log(info[0]); 
// arrays are mutable!
console.log(marks[0]=100); // in marks at index 0 value change to 100 from 96!
console.log(marks);

// looping over an array!
//  for loop --
for(let idx =0; idx < heroes.length; idx++){
    console.log(heroes[idx])
}

// for of ---
for (let i of marks){
    console.log(i);
}

for (let i of heroes) {
    console.log(i.toUpperCase()); //--- using function with array in the loop!
}

// PRACTICE QUESTION
// for a given array with marks of studens >> [85,97,37,76,60].find the average marks od the entire class.

let Marks = [85,97,44,37,76,60];
let summ = 0;
for (let i of Marks) {
    summ += i;
}
let avg = summ/Marks.length;
console.log(avg);


// PRACTICE QUESTION: - items is an array of a prices you have to giveoffer of 10% on each price!
let items = [250,645,300,900,50];
for (let i = 0; i < items.length; i++){
    let offer = items[i]/10;
    items[i] -= offer;
}
console.log(items);

// Arrays methods!!
// 1). Push()-- add to end
// 2). Pop()-- delete from end and return
// 3). toString()---converts array to string!
// 4). concat()---joins multiple array and returns the result
// 5). unshift() --- add to start
// 6). shift()----delete from start & return
// 7). slice() --- returns a piece of the array(does not change the original value)
// 8). splice()--- change originial array (add,remove,replace)



let veggies = ["potato","lady-finger","bottle-guard","paneer","tinde","dal","rasam","sambhar"];
let fruit = ["mango","apple","litchi"];
let cartoon = ["doraemon","chhota-bheem"]
console.log(veggies);
let Push = veggies.push("carrot");
console.log(veggies);
let Pop = veggies.pop();
console.log(veggies);
console.log(Pop); // return the removed element
console.log(Push); // returns the index of the removed elememt i.e last
console.log(veggies.toString()); // to convert the array into string!
let fru_veg = veggies.concat(fruit); // join two arrays
console.log(fru_veg); 
let first = cartoon.unshift("mighty-raju"); //joins the value at the start of the array at index 0 
console.log(cartoon);
let deletee = cartoon.shift();
console.log(cartoon);
console.log(deletee);
console.log(veggies.splice(0,1));
console.log(veggies.splice(2,1,1));
console.log(veggies);



//  FUNCTIONS IN JS: -- block of a code that performs a specific task, can be invoked whenever needed
// funtion sytntax:------
// function function_name(parameter1,paramete2...){
//     //do some work
// }
// to call a function - function_name()

function myFirst() {            //  defining a function 
    console.log("Welcome to newton");
    console.log("learning JS");
}
myFirst() ;  //--- calling a function

// parameter - local variables of the function!! (belong to the block scope of the function!)

function myfunc (msg) {   //giving parameter
    console.log(msg);
}
myfunc("i love js");     //argument

// NaN - not a number --- its an error!

function sum_func(a,b) {
    summ = a+b;
    console.log(summ);
}
sum_func(4,5);

function multi_func(a,b){
    multi = a*b;
    console.log("multi befor return!");
    return multi;            // returning a value.
    console.log("multi after log");     // this won't be printed...bcoz in js print statement after return statement is not valid!!
}
console.log(multi_func(2,8));  



// Arrow funtions!!! ---- compact way of writing a function!
//  generally we don't need arrow function it is only used for small funciton!!.... #this the part of modern js
//  example!!

const arrowsum = (a,b) => {
    console.log(a+b);
};
console.log(arrowsum);  // return the definition of the functions!!
arrowsum(3,6);    // return the ouput of the function

const arrowmulti = (a,b) => {
    return a*b;
}
let result1 = arrowmulti(5,6);
console.log(result1);



//  PRACTICE QUESTION!!
//  create a funtion using the function keyword that take string as an argument and returns the number of vowels in the string.
function vowels_func(strng) {
    let count =0;
    for (const i of strng){
        if (i === "a" || i==="i"|| i==="e" || i==="o" || i==="u") {
            count++ ;
        }
    }
    return count;
    
}
let my = vowels_func("hello worlds, welcome to my mini room at hoste!");
console.log(my);




// forEach loop in arrayss!!
// arr.forEach(callBackFunction) --- here it is a funciton to execute for each element in the array
// A call back funciton passed as an argument to another function!

let arrr = ["delhi","mumbai","kolkata","pune"];
arrr.forEach((val) => {
    console.log(val.toUpperCase());     // for accessing each element of the arrays!!
});

//  higher order methods/ function ---- vo function jo dusre function ko as parameter le lete h... ya fir return another function as an output!!

//  SOME MORE ARRAY METHOD!
// 1). Map -- creates a new array with the result of some operation. the value its callback returns are used to form new array
// arr.map(callbackfxn(value))
let nums = [1,2,3,4,5];
let new_Arr = nums.map((val) => {
    return val * 2;
});
console.log(new_Arr);

// 2).Filter --- creates a new array of elements that give true for a condition/filter!!
//  ex -- all even numbers!!

let nw_arr = nums.filter((val) => {
    return val%2 ==0;
});
console.log(nw_arr);

// 3).Reduce --- performs some operation and reduces the array to a single value. it returns that single value!!
let red_arr = nums.reduce((res, curr) => {
    return res +curr;
});
console.log(red_arr);     //15
//  to return the max element in the array!
let ouputt = nums.reduce((prev,curr) => {
    return prev > curr ? prev : curr;
});
console.log(ouputt);    //5

// PRACTICE QUESTION!!
//  take a number n as input from user. create an array of numbers from 1 to n.

// let Num = prompt("enter a number : ");
// let arr = [];
// for (let i=1; i<=Num; i++) {
//     arr[i-1] = i;
// }
// console.log (arr);



// DOM - Document Object Model!!
// # window object - global browser object!

// ACCESSING THE ELEMENT
// document.getElementById("id ka name")
// document.getElementByClassName("class ka name")
// document.getElementBytagName("tag ka name");
// document.querySelector(class/id/tag); ------- returns only the first vlaue....
// document.queryselectorAll(class/id/tag);---------returns all the values

// PROPERTIES!!
// 1). tagName -- returns ther tags for the elements nodes (document.tagName)
// 2). innerText : retruns the text content of the element and all its children
// 3). innerHTML : returns the plain text of HTML contents in the element
// 4). textContent : returns the textual content even for hidden elements


// ATTRIBUTES!!
// .getAttribute(attr) --- to get the attribute value..
// .setAttribute(attr,value)----to set the attributed value

// STYLE!!
// node.style


// INSERT ELEMENTS!  --- let el = document.creatElement("div")
// 1). node.append(el)---- adds at the end of the node(inside)
// 2). node.prepend(el)--- adds at the start of node(inside)
// 3). node.before(el) ----- adds before the node (outside)
// 4). node.after(el)------- adds after the node (outside)

// DELETE ELEMENTS!
// node.remove()-----removes the node


// homework --- appendChild() && removeChild()
// classList.add OR  // classList.remove
//  appendChild()--- adds one element at one time not like append() which adds multiple elemnts
// and similary removeChild() ---- removes one element at one time!

// EVENTS IN JS!!
// -- the change in the of an object is known as an event!
//  events are fired to notify code of "interesting changes" that may affect code execution!



//  PROTOTYPES IN JS : -- refrence to an object!
//  ---- a javascript object is an entity having state and behaviour (properties nad method).
//  JS objects have a speacial property called -- prototype!
// ## if object and prototype have same method object's method will be used!

// writing object in js--
const stu = {
    n_a_m_e : "KOMAL",
    m_a_r_k_s : 97.8,
    printMarks: function (){
        console.log("marks = ",this.marks);       // here "this" is a new keyword which means the using object i.e student!
    }, 
};
console.log(stu);
console.log(stu.printMarks)
let vari = stu.toString        //from prototype!
console.log(vari);

//example of in-built prototype!
// let arr = ["apple","mango","banana"]
// undefined
// arr
// (3) ['apple', 'mango', 'banana']
// 0: "apple"1: "mango"2: "banana"
// length: 3
// [[Prototype]]: Array(0)
// at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
// typeof arr
// 'object'
// arr.push("litchi");
// 4
// arr
// (4) ['apple', 'mango', 'banana', 'litchi']


const emp ={
    calTax() {
        console.log("tax rate is 10%");
    },   
};
const KaranArjun = {
    salary : 800000,
};
const KaranArjun1 = {
    salary : 60000,
};
const KaranArjun2 = {
    salary : 20000,
};
const KaranArjun3 = {
    salary : 500000,
};

KaranArjun.__proto__ = emp;        // creating our own prototype!!
KaranArjun1.__proto__ = emp;
KaranArjun2.__proto__ = emp;
KaranArjun3.__proto__ = emp;



// CLASSES IN JS!
// class is a program-code template(blueprint) for creating objects!
// those objects will have some state(variables) and some behaviour (functions) inside it.
// 

 class ToyotaCar {
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    setBrand(brand) {
        this.brandName = brand;
    }
}
let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner")
let lexus = new ToyotaCar();
lexus.setBrand("lexus");


// Construtor() --- special method in Js inside classes!!
//if we don't create  constructor  it will be automatically get createdd!!
 


// ADVANCED JAVASCRIPT ---

// #sync in JS
// Synchronous -- code runs in the particular sequence of instruction given in the program....
// Asynchronous -- Due to synchronous programming, sometimes imp instruction get blocked due to some previous instructions, which causes a delay in the UI.
// Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow!

function hello() {
    console.log("hello");
}

setTimeout(hello,2000)                 // 2000 - 2 seconds -- it is the timeout ;


console.log("one");
console.log("two");

setTimeout(() => {                 // here this part of code will run after 4 seconds but bcoz of this the other part of the code won't get affected!! it will get executed... 
    console.log("hello");
},4000);

console.log("three");
console.log("four");


// CALLBACKS ---- a calback is a function passed as an argument to another function!

function SUM(a,b) {
    console.log(a+b);
}
function calculator(a, b, sumCallback) {
    sumCallback(a,b);
}
calculator(1,2, SUM); 



let main = document.querySelector("#main");
        let p = document.createElement('img');
        p.src="https://img10.hotstar.com/image/upload/f_auto,q_auto/sources/r1/cms/prod/7085/1715414277085-i";
        p.style.width="500px"
        main.appendChild(p);


//map is same as forEach it just creates a new array whereas forEach just performs a task
// let newNum = num.map((val) => {
//     return val;
// })

// console.log(newNum);

//filter filters some values and returns them in the new array
// let newNum1 = num.filter((num1) => {
//     return num1%2 === 0;
// })

// console.log(newNum1)

//for forEach and arrow functions you do not need to sonole functions after returning

//reduce is used to perform some operations on array and get 1 single value(like sum, avg, smallest, largest)
const array2 = [1, 2, 3, 4, 5]

//res is previous value, curr is current value
//res = 0, 1, 3, 6, 10, 15
const sum3 = array2.reduce((res, curr) => {
    return res + curr;
})
console.log(sum3);

const largest = array2.reduce((prev, cur) => {
    return prev > cur ? prev : cur;
});
console.log(largest);

let marksStu = [70, 80, 50, 80, 90, 100];
const highest = marksStu.filter((marksS) => {
    return marksS > 90;
})

console.log(highest);

let Num = prompt("Enter a number")
let arrNum = [];
for (let it = 1; it <= Num; it++){
    arrNum[it-1] = it;
}

console.log(arrNum);

let sumArr = arrNum.reduce((prev,curr) => {
    return prev + curr;
});
console.log(sumArr);


let productArr = arrNum.reduce((prev,curr) => {
    return prev*curr;
});
console.log(productArr);

















 




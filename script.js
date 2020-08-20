
var firstName = 'John'; // First, we assign the variable with the name (string)
console.log (firstName);

var lastName = 'Smith'; // then, the last name
var age = '28'; //numbers 

var fullAge = true;  //boolean. when we said true, the console shows the full age,but when is false, the console doesn't show anything, just returns false
console.log (fullAge);

var job;
console.log (job); //This is for undefined variable

job = 'teacher';
console.log(job); //here, we're adding teacher to the variable 

/*  we can't start variables with numbers. but, if we want to 
start with a underscore _ or a dollar sing $ its fine.*/ 


var firstName = 'john';
var age = '28';
console.log(firstName + ' ' + age);

//the empty string works for give us some space between the variables


var job,isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job +'. is he married? ' + isMarried);

//variable mutation

age= 'twenty eight';
job= 'driver';
alert(firstName + ' is a ' + age + ' year old ' + job +'. is he married? ' + isMarried);

var lastName= prompt ('¿What is his last name?');
console.log(firstName + ' '+ lastName);



//Basic operators
var now, yearJohn, yearMark;
now = 2020;
yearJohn= now - 28;
yearMark= now - 33;
console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//logical operators
var johnOlder = yearJohn > yearMark;
console.log(johnOlder);

//typeof operator

console.log(typeof johnOlder);//boolean
console.log(typeof yearJohn);//number
console.log( typeof 'Mark is older than john'); //string
var x;
console.log(typeof x); //undefined
*/


/*operator precedence*/ 

var now = 2018
var yearJohn =1989
var fullAge = 18

//multiple operators
var isFullAge = now - yearJohn >= fullAge //true
console.log(isFullAge);

//grouping
var yearJohn = now -yearJohn;
var yearMark = 35;
var average = (yearJohn + yearMark) / 2;
console.log(average);

//multiple assignments
 var x, y;
 x= (3 + 5) * 4 - 6;  // 8 * 4 - 6 // 32 - 6 // 26
console.log(x);

//more operators. (we can write them in these two ways: x = x * 2; )
x *= 2;  
console.log(x); // 52
x += 10;
console.log(x); // 62
 //if we want to add one unit more, we just put x++


//if / else statements

var firstName ='john';
var civilStatus= 'single';

if (civilStatus === 'married ')  {
    console.log (firstName + 'is married!');
} else {
    console.log( firstName + 'will hopefully marry soon :)');
}






















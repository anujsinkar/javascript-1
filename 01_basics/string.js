const name= "Anuj"
const repoCount = 50

console.log(`Hello my name is ${name} and my repCount is ${repoCount}`)

const gameName = new String("anuj-aj-oc")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-9, 4)
console.log(anotherString);

const newStringOne = "   anuj    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://Anuj.com/anuj%20sinkar"

console.log(url.replace('%20', '-'))

console.log(url.includes('Bhavesh'))

console.log(gameName.split('-'));
const name = "shashi";
const age = 34;

// console.log(name + age + " suu");

console.log(`my name is ${name} and my age is ${age} along with ${"suu"}`);

const gameName = new String("shashi-gh-df");

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

let newOne = gameName.substring(0 , 4);
console.log(newOne);

let newTwo = gameName.slice(-6 , 2);
console.log(newTwo);

let one = "   sdfdsfds   ";
console.log(one);
console.log(one.trim());

let url = "https://www.google.com/20%"

console.log(url.replace("20%" , '-'))

console.log(url.includes("google"))

console.log(gameName.split("-"))






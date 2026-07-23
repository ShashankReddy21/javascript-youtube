// array

const myArr = [0,1,2,39,45]
// console.log(myArr);
// console.log(myArr[3]);

// ARRAY METHODS

myArr.push(6);
myArr.push(7);
myArr.pop()

myArr.unshift(9);
myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(39));
// console.log(myArr);

// const nArr = myArr.join()
// console.log(myArr);
// console.log(nArr);

// console.log(typeof nArr);


const myn1 = myArr.slice(1,3);
console.log("slice" , myn1);


console.log("original" , myArr);


const myn2 = myArr.splice(1,3);
console.log("splice" , myn2);

console.log(myArr);

//  difference slice vs splice

// slice -- excludes the last number and does not change the original array

// splice -- includes the last number and changes the original array
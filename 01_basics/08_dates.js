const myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString())
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate)

// const createdDate = new Date(2020 , 0 , 3 , 5 , 3);
// console.log(createdDate);
// console.log(createdDate.toDateString());

const createdDate = new Date("2020-01-03")
// console.log(createdDate.toLocaleString());

const myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(createdDate.getTime())

// console.log(Math.floor(Date.now()/1000));

const newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDay());


newDate.toLocaleString('default' , {
    weekday: "long",
    
})


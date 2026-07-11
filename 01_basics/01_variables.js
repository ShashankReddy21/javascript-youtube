const accountId = 232423
let accountEmail = "shashi@gmail.com"
var accountPassword = "23435456"
accountCity = "bengaluru"
let accountState;

// accountId = 23424 // not allowed to change

accountEmail = "hc@hc.com"
accountPassword = "3453453456"
accountCity = "kalaburagi"

console.log("accountId");
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
 dont use var 
 because of issue in block scope and functional scope
*/
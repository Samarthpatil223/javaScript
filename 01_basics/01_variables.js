const accountId = 144553 //its value cannot be changed
let accountEmail = "samarthpatil223@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; //declared but not defined

// accountId = 2 // not allowed


accountEmail = "sampatil223@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

//console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
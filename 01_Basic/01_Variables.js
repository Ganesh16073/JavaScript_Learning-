const accountId=2004; // const is mutable
let accountEmail="ganeshkulkarni437@gmail.com";
var accountPassword="12345";
accountCity="vita"; // can also declare varialbe but not recommended
let accountState

// accountId=122;
/*
    prefer not to use var because of issuen in block scope and functional scope
*/

console.log(accountId);

console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);

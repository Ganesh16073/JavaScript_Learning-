function print()
{
    console.log("hii")
    console.log("hii")
    console.log("hii")
    console.log("hii")
}
print()
console.log(print);

function addTwoNum(n1,n2)
{
    console.log(n1+n2)
}
const v=addTwoNum(1,5)
console.log(v)// does not return value

function mulTwoNum(n1,n2)
{
    const result=n1*n2
    return result
}
const val=mulTwoNum(2,5)
console.log("return result is ",val)

function loginMessage(userName="sam") // set default value
{
    if(!userName)
    {
        console.log("Please enter the valid name");
        return
    }
    return `Welcome ${userName}`
}
const msg=loginMessage("Dhru")
console.log(msg);
console.log(loginMessage());

function cart(...num)
{
    return num
}
console.log(cart(10,20,30,40,50,1,11,21,45));

console.log(`Cart Item Price are =>> ${cart(10,20,30,40,50,1,11,21,45)}`)
console.log();
const user={
    name:"Munna",
    price:999
}

function hadleObject(anyObject) // passing object
{
    console.log(`The User name is ${anyObject.name} and cart price is ${anyObject.price}`)
}
hadleObject(user)
hadleObject({ // direct object passing
    name:"Ajay",
    price:9999
})

function returnSecondValue(getArray)
{
    return getArray[1]
}
const arr=[1,2,3,4,5,6,7,8]
console.log(returnSecondValue(arr))
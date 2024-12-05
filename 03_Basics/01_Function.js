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

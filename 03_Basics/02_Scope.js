let a=100
const b=2200
var c=300

if(true)
{
    let a=1
    const b=2
    var c=3 // var is global scope
}
console.log(a);
console.log(b);
console.log(c);
one() // we can call here also
function one()
{
    const user="Ganesh"
    function two()
    {
        const website="Spring"
        console.log(user);
    }
    // console.log(website)
    two()
}


// addFive(2) we cannot call here because it we stored function in variable  
const addFive=function(num)
{
    return num+5
}

console.log(addFive(2));



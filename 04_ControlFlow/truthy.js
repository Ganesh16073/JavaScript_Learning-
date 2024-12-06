const useremail="ganesh@ai"

if(useremail)
{
    console.log("Got the Email");
}
else{
    console.log("Not got Email")
}

// Nullish Coalescing Operator (??): null undefined

let vall
// vall=5 ?? 10
console.log(vall);
// vall=null?? 20 // if Null then next value is assingned
console.log(vall);
vall=undefined ?? 40 // if undefined then next Value
console.log(vall);

// Terniary Operator

// Condition ? value : value

const iceTeaPrice=100
iceTeaPrice<=90 ? console.log("Average price ") : console.log("Expensive tea");

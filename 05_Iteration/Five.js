const coding=["first","second","third","fourth","fifth"] //value
coding.forEach((val)=>
{
    console.log(`The value is ${val}`);
    
});
console.log();

coding.forEach((value)=>console.log(`The value is ${value}`));
console.log();

coding.forEach((value,index,array)=>console.log(`The value is =>>${value} and index is =>>${index} and the array is =>>${array}`));

console.log();
const myCoding=[
    { // item
        language:"Tamil",
        state: "Tamilnadu"
    },
    {
        language:"Marathi",
        state:"Maharashatra"
    },
    {
        language:"Hindi",
        state:"Delhi"
    }
]

myCoding.forEach((item)=>
{
    //console.log(item); // object
    console.log(item.language); //access inner key 
    console.log(item.state); // access inner value

})

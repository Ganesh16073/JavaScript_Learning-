for(let i=1;i<=10;i++)
{
    if(i==5)
    {
        console.log("I am  5 " );
    }
    console.log(i," ----");
    
}
const array=[1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i < 10; i++) {
    const element = array[i];
    console.log(element);
    
}
console.log();

for (let i = 0; i < 10; i++) {
    const element = array[i];
    console.log(element);
    if(i==2)
    {
        console.log("Loop break");
        break;
    }
}
console.log();
for (let i = 0; i < 10; i++) {
    const element = array[i];
    console.log(element);
    if(i==2)
    {
        console.log("Loop continue");
        continue;
    }
}
console.log();


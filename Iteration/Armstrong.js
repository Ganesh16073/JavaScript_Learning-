let num="153";
let len=num.length
let sum=0;
for(let i=0;i<len;i++ )
{
    let val=1;
    for(let j=0;j<len;j++)
    {
        val*=Number.parseInt(num.charAt(i))
    }
    sum+=val;
}
if(sum===Number.parseInt(num))
{
    console.log("It is a Armstrong Number");
    console.log(sum);
    
}
else
{
    console.log("It is Not a ArmStrong");
    console.log(sum);
    
}
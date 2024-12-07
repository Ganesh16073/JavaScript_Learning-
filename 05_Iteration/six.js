const mynum=[1,2,3,4,5,6,7,8,9,10]

const newnum=mynum.filter((num)=> num>4) 
console.log(newnum);
const pro=[]
const nums=mynum.filter((num)=> 
    {
        if(num%2)
        {
            pro.push(num)
        }
    }) 

console.log(pro);
const all=mynum.reduce()
for(let i=1;i<=9;i++)
{
    let str=""
    for(let j=1;j<=9;j++)
    {
        if(j>5-i && j<5+i && i<=5)
        {
            str+="*"
        }
        else if(i>5 && j>i-5 && j<15-i)
        {
            str+="*"
        }
        else{
            str+=" "
        }
    }
    console.log(str)
}
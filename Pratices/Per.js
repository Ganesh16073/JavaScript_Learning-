function per(p,up)
{
    if(up.length===0)
    {
        console.log(p)
        return;
    }
    let ch=up.charAt(0)
    for(let i=0;i<=p.length;i++)
    {
        let first=p.slice(0,i)
        let second=p.slice(i)
        per(first+ch+second,up.slice(1))
    }
    
}

per("","abc")
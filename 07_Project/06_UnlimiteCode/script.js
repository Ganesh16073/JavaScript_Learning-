// Generate Random Colour

const RandomColour=function()
{
    const hex='0123456789ABCDEF'
    let colour="#"
    for(let i=0;i<6;i++)
    {
        colour+=hex[Math.floor(Math.random()*16)];
    }
    return colour;

}

let interval;

let startChangingColour=function()
{
    let col=function()
    {
        document.body.style.backgroundColor=RandomColour()
        console.log("Start");
    }
    if(interval==null)
    {
        interval=setInterval(col,1000)
    }
   
}

let stopChangigTime=function()
{
    clearInterval(interval)
    interval=null;
    console.log("Stoped");
    
}

document.querySelector("#start").addEventListener('click',startChangingColour)
document.querySelector("#stop").addEventListener('click',stopChangigTime)


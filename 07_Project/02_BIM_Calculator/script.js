const form=document.querySelector('form')

form.addEventListener('submit',function(e)
{
    e.preventDefault()
    const hight=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')
    if(hight===''||hight<0|| isNaN(hight))
    {
        results.innerHTML="Please give valid Hight";
    }
    else if(weight===''||weight<0|| isNaN(weight))
    {
       results.innerHTML="Please give valid weight";
    }
    else
    {
      const bmi=  (weight/((hight*weight)/10000)).toFixed(2)
      results.innerHTML=`<spam>${bmi}</spam>`
    }
})
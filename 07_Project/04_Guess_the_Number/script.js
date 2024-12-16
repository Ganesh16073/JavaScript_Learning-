let randomNumber=parseInt(Math.random()*100+1)

const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult');
const lowOrHigh=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');
 
const p=document.createElement('p')
let prevGeus=[]
let numGuess=1

let playGame=true

if(playGame)
    {
        submit.addEventListener("click",function(e)
        {
            e.preventDefault();
            const guess=parseInt(userInput.value);
            console.log(guess)
            validGuess(guess)
        });
    }
function validGuess(guess)
{
    if(isNaN(guess))
    {
        alert('Enter the VAlid Number')
    }
    else if(guess<1)
    {
        alert('Enter the Grater than 1')
    }
    else if(guess>100)
    {
        alert('Enter the Less than 100')
    }
    else{
        prevGeus.push(guess)
        if(prevGeus.length===11)
        {
            displayGuess(guess)
            displayMessage(`GAme Over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
    

}

function checkGuess(guess)
{
    if(guess===randomNumber)
    {
        displayMessage('You guesed right Number')
        endGame()
    }
    else if(guess<randomNumber)
    {
        displayMessage(`Number is Too Low`)
    }
    else if(guess>randomNumber)
    {
        displayMessage(`Number is Too High`)
    }

}

function displayGuess(guess)
{
   userInput.value=""
   guessSlot.innerHTML+=`${guess}, `
   numGuess++;
   remaining.innerHTML=`${11-numGuess}`
   
}

function displayMessage(message)
{
    lowOrHigh.innerHTML=`<h2>${message}</h2>`
}

function newGame()
{
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e)
    {
        randomNumber=parseInt(Math.random() * 100+1);
        prevGeus=[]
        numGuess=1
        guessSlot.innerHTML=""
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame=true
    })

}
function endGame()
{

    userInput.value=""
    userInput.setAttribute('disabled',"")
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}
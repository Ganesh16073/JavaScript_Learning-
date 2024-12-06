// Immediately Invoked Function Expersion (IIFE)

(function chai() // immediately execution sysntax
{
    console.log("DATABASE CONNECTION")
})(); // execution // semicolun is must 

(function() // named IIFe
{
    console.log("Printing through the Function and IIFE")
})();


(()=> // unNamed IIFE
{
    console.log("Printing through IIFE and arrow Function")
})();

((name)=> // variable
{
    console.log(`${name}, Welcome to Arrow Function and IIEF`)
})("Ajay"); //passing variabale
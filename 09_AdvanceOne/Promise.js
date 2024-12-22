// const promistOne=new Promise(function(resolve,reject) // creating Promise
// {
//     // Do an Async Task
//     // Db call, Cryptography, network
    
//     setTimeout(function() // Callback Function
//     {
//         console.log("Async Task");
//         resolve()
//     },1000)
// });

// promistOne.then(function() // Resolve function calls then()
// {
//     console.log("Promise Consumed");
    
// })
// console.log("first end..........");


// new Promise(function(resolve,reject)
// {
//     // Do Async Operation
//     setTimeout(function(){
//         console.log("Any Second Async Operatin ............");
//         resolve()
//     },1000)
// }).then(function() // if our Async Completed then it enter intothen Method
// {
//     console.log("Async Completed...............");
    
// })

// console.log("Second end............"); 
// console.log();


// const Promisthree=new Promise(function(resolve,reject)
// {
//     setTimeout(function()
//     {
//         console.log("Performing Async Operation..............");
//         resolve({username:"Ganesh",email:"ganeshKulkarni4237@gmail.com"})
//     },1000)
// })

// Promisthree.then(function(user)
// {
//     console.log(user);
    
// })



const promisFour=new Promise(function(resolve,reject)
{
    setTimeout(()=>
        {
            console.log("Working On Then Chanining");
            let error=true // image if get error then it will false then else will execute and catch  
            if(error)
            {
                resolve({username:"Ganesh",email:"GaneshKulkarni4237@gmail.com"})
            }
            else{
                console.log("Some Error Is ................");
                
            }
           
        },1000)
})

promisFour.then((user)=>
{
    console.log(user);
    return user.username
}).then((name)=>
{
    console.log(`DAta From second The ${name}`);
    
}).catch((error)=>
{
    console.log(error);
    
}).finally(()=>
{ 
    console.log("Work Completed");
    
})
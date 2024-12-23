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
                reject("Some Thing Went Wrong") // if any error occure then it is executed 
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


const PromisFive=new Promise(function(resolve,reject){ // another way to handle using async and Await
    setTimeout(function(){
        const error=true
        if(error)
        {
            resolve({username:"JavaScript",location:"Pune"})
        }
        else
        {
            reject("SomeThing Went Wrong")
        }
       
    },1000)
})

async function consumePromiseFive() 
{
    try{
        const response=await PromisFive
        console.log(response);
        
    }catch(error)
    {
        console.log(error);
    }
}
consumePromiseFive()


async function getAllGithubData() // it return promise
{
   try {
        const response=await fetch('https://api.github.com/users/ganesh16073')
        console.log(typeof response);
        const data =await response.json()
        console.log(data);
        console.log();
   } catch (error) {
    console.log(error);
   }
   
}

getAllGithubData()

fetch('https://api.github.com/users/ganesh16073')
.then((response)=>{
    return response.json()
})
.then((data)=> {
    console.log("Ganesh Data Is ||");
    console.log(data);
}
)
.catch((error)=> console.log(error)
)

/* Internal Working of Fetch()

                  Return Promise
                        ^
                        |
                Const Response = fetch()
                                   |
        |`````````````````````````````````````````````````````````````|
    Data=" ";                                                     Web /node Api
    onFullFiled[]                                                     |                                                
    OnRejection[]                                        |`````````````````````````````|
                                                     Resolve()                      Reject()




    */
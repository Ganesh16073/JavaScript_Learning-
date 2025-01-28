const data={
    name:"Ganesh",
    age:21,
    Place:"Pune",
    result:[
        {
            name:"Ram",
            age:33,
            place:"Kholapur"
        },
        {
            name:"Don",
            age:34,
            place:"Nagar"
        }
    ]
}

const arr=data.result

arr.map((Value,index)=> (
    console.log(Value.name.toUpperCase()+" index: "+index)
    
))
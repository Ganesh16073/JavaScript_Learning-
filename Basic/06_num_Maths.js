const score=400

const balance=new Number(400) 
console.log(balance) // explictly number
console.log(score)

console.log(balance.toString())
console.log(balance.toFixed(2))// fix decimal to 2 like o/p => 400.00

console.log()
const othernumber=12.334
console.log(othernumber.toPrecision(3)) // gives 3 digit output =>> used to give outpun in fixed digit

console.log()
const hundred=10000000000
console.log(hundred.toLocaleString()) // output 10,00,00,00,000 =>> used to convert number in readable formate


//=============================== MAths ===========================================
console.log()
console.log("------------------Learning Maths -------------------------")
console.log()

console.log(Math)
console.log(Math.abs(-2)) // method is used to change negative to positive valuse but not change positive to Negitive
console.log(Math.round(5.8))  // give a round value O/P=> 6
console.log(Math.floor(4.6)) //down
console.log(Math.ceil(4.6)) // up value
console.log(Math.min(10,2,5,22))
console.log(Math.max(10,2,5,22))
console.log(Math.random()) // alway by default return 0 to 1 values (decimal)
console.log(Math.random()*10+1)  // by multiplyin we can get integer with decimal
console.log(Math.random()*10000000+1)

console.log()

console.log(Math.floor(Math.random()*10+1) ) // use flore or ceill to  get only integer


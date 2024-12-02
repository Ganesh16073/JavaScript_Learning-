let score="33"

console.log("Converting number")
console.log(typeof score)
console.log(typeof(score))

let valueInNumber=Number(score)
console.log(typeof(valueInNumber))

console.log("")
console.log("Converting string")
let score2="abc123"
console.log(typeof(score2))
let valueOfScore2=Number(score2) // changing type  of string to number
console.log(typeof(valueOfScore2)) // it change type to number but the value become NaN
console.log(valueOfScore2) // o/p => NaN

console.log("")
console.log("Converting null")
let score3=null
console.log(typeof score3) // object 
console.log(score3) // null
let valueOfScore3=Number(score3)
console.log(typeof valueOfScore3) // number
console.log(valueOfScore3) // 0

console.log("")
console.log("Converting Undifined")
let score4=undefined
console.log(typeof score4) //undifined
console.log(score4) //undefined
let valueOfScore4=Number(score4)
console.log(typeof valueOfScore4) //number
console.log(valueOfScore4) //NAN

// "33"=>>32
// "33abc"=>> NAN
// true=>>1 ; false => 0

console.log("")
console.log("Converting boolean")
let islogedIn=1 
let BooleanLogedIn=Boolean(islogedIn)
console.log(islogedIn)
console.log(BooleanLogedIn)
console.log("")

let isLooged="efv"
let BoolIsLoged=Boolean(isLooged)
console.log(BoolIsLoged) // if string present then true ; // If String not present like "" then false

// 1=> true ; 0=> false
// "str" => true ; "" => false

console.log("")
console.log("Converting the number")
let someNumber=33
let stringNumber=String(someNumber)
console.log(someNumber) // 33 as number
console.log(stringNumber) // 33 as string
console.log(typeof stringNumber) // string

/***********************OPERATIONS************************** */

console.log()
console.log(" ============================= OPERATION =============================")
console.log()

let value=3
let negValue=-value
console.log(negValue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3) // 2power3
console.log(2/2)
console.log(2%2)

console.log("")
let str="Good"
let str2=" Evening"
let str3=str+str2
console.log(str3)

console.log("1"+2) // string concate
console.log(1+"5")
console.log("1"+2+2) // left to right
console.log(1+2+"2") // perform left to right opperation

let num1,num2,num3;
num1=num2=num3=99+1 // not recommended

console.log("")
let gameCounter=100
console.log(gameCounter++)
console.log(++gameCounter) // same as Java



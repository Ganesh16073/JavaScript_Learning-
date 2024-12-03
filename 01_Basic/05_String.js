const name="Ajay" // Deceleration of String
const name2=new String("Ganesh") 
const repoCount=50

console.log(name + repoCount+ "value") // outdated Syntax
console.log(`Hello my name is ${name} and my Repositry count is ${repoCount}`) // moden syntax

console.log("")
console.log(typeof name2) //Object
console.log(typeof name) // String

console.log()
const gameName=new String("Chess")
console.log(gameName[0])
console.log(gameName.__proto__)
console.log()
console.log(gameName.length)
console.log(gameName.toLowerCase()) // does not change string
console.log(gameName.toUpperCase())
console.log(gameName)
console.log(gameName.charAt(2))
console.log(gameName.indexOf("e"))

console.log(gameName.substring(0,3))
const sub=gameName.slice(1,-1)
console.log(sub)

console.log()
const newdata="      Don         " // with space
console.log(newdata)
console.log(newdata.trim()) // without space  


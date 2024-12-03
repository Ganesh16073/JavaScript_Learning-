console.log(Date) // function
const date=new Date()
console.log(date) // 2024-12-03T06:46:14.293Z return date time and all
console.log(date.toString())
console.log(date.toISOString())
console.log(date.toDateString())
console.log(date.toJSON())
console.log(date.toLocaleString())
console.log(typeof date)
console.log()
let myCreatedDate=new Date(2003,6,16)
console.log(myCreatedDate)
console.log(myCreatedDate.toLocaleDateString())
console.log(myCreatedDate.toDateString())

let myCreated=new Date("07-16-2003") 
console.log(myCreated.toLocaleString())

console.log()
console.log(Date.now()) // we get Date in millSeconds

console.log()
let newDate=new Date();
console.log(newDate) // Date and Time
console.log(newDate.getTime())
console.log(newDate.getMonth())
console.log(newDate.getDay())
console.log(newDate.getDate())

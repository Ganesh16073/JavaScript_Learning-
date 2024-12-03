const marvel_hero=["thor","IronMAn","spiderman"]
const dc_hero=["superman","flash","batman"]
marvel_hero.push(dc_hero) // push array into array
console.log(marvel_hero) //[ 'thor', 'IronMAn', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
const all=marvel_hero.concat(dc_hero)
console.log(all)
const spread=[...marvel_hero, ...dc_hero]
console.log(spread) // alsowork as concact

console.log()
const anotherarray=[1,2,3,[4,5,6],7,[8,9,[10,11],12]]

const real_anotherarray=anotherarray.flat(Infinity)
console.log(real_anotherarray)

console.log()
console.log(Array.isArray("Hello")) // return true or false 
console.log(Array.from("Hello123")) // seprate every characer

console.log()
console.log()
let arr1=[0,1,2,3,4,5]

console.log("original array =>> "+arr1)
let newarr=arr1.slice(1,3) // first index to lastindex-1
console.log("slice array => "+newarr) 
console.log("original array =>> "+arr1) //slice does not affect original array. it just give copy
console.log()
let newarrsplice=arr1.splice(1,3) // satart and offset
console.log("Splice array =>"+newarrsplice) // splice return the subarray and delete from origial array
console.log("original array =>> "+arr1)

console.log()
console.log()
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score3,score2)) // is used to contact all the values

//[{}, {}, {}] // we mostly get object in array
const arr=[1,2,3,4,5,6,6,7,8,9,10]
 for (const element of arr) {
  console.log(element);
    
 }
const greeting="welcome to Codeing"
for (const greet of greeting) { // print every char // of
    console.log(greet);
    
}


//=================== MAP ======================
console.log();
const map=new Map()
map.set(1,"ganesh")
map.set(2,"ram")
map.set(3, "rahul")
map.set(4,"Munna")
map.set(5,"Ajay")
console.log(map);
console.log(map.keys()) // keys
console.log(map.values()); // values
console.log(map.entries()) // in array pair
console.log(map.size) // return size

console.log();
for (const key of map) { // print all data
    console.log(key)
}

console.log();
for (const [key] of map) { // print all Key
    console.log(key)
}
console.log();
for (const [key,value] of map) { // print all key and value
    console.log(`Key is ${key}  and VAlue is ${value}`)
}

const myObject={ // Object is not Iterable using this Syntax
    game1: 'Pubg',
    Game2: 'Spiderman',
    Game3: 'GTA'
}

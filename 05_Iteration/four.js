const myObject={ // Object 
    js:"JavaScript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myObject) {
    // console.log(key);// key only
    // console.log(myObject[key]); // values

    console.log(`The key of Object is =>> ${key} and the value is =>> ${myObject[key]}`);
    
    
    
}
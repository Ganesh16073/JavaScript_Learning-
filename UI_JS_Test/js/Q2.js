const js = {
    "name": "ganesh",
    "Age": 21,
    "Location": "pune",
    
};

function parseJson(js) {
    try {
       
        for (const [key, value] of Object.entries(js)) {
            if (typeof key !== 'string') {
                console.log(key);
                return key;  
            }
        }
        return 1;  
    } catch {
        console.log("Invalid JSON");
        return "error"; 
    }
}

const check = () => {
    const value = parseJson(js);  
    if (value === 1) {
        console.log("valid JSON");
    } else {
        console.log(`It is invalid because the key "${value}" is not a string`);
    }
}

check();

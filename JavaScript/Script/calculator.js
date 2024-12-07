var resultField;  
 
function appendValue(val) {
    resultField=document.getElementById("set").value; 
    console.log(resultField);
    // if(resultField==="NaN" || "Error" ||"undefined")
    // {
    //     document.getElementById("set").value="";
    // }
    if (val === '√') {
        document.getElementById("set").value=Math.sqrt(parseFloat(resultField));
    } else if (val === '1/x') {
        document.getElementById("set").value= 1 / resultField;
    } else if (val === '^2') {
        document.getElementById("set").value= (resultField*resultField);
    } else {
        document.getElementById("set").value=resultField+val;
    }
   
}
function clearEntry()
{
    document.getElementById("set").value="";
}

function clearResult()
{
    document.getElementById("set").value="";
}

function backspace()
{
    resultField = document.getElementById("set").value;
    document.getElementById("set").value = resultField.slice(0, -1);
}

function calculateResult()
{
    try {
        resultField = document.getElementById("set").value;
        document.getElementById("set").value = eval(resultField);
    } catch (error) {
        document.getElementById("set").value = "Error";
    }
       

    
}
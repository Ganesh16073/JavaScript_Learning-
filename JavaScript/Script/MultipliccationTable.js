function opentable()
{
	var n=parseInt(document.getElementById("num").value);
	
    var ctable=document.getElementById("content");
	ctable.innerHTML="";
	ctable.marginLeft="30%";

    var tableref=document.createElement("table");
	tableref.style.width="60%";
	tableref.style.hight="70%";
	tableref.style.textAlign="center";
	tableref.style.borderStyle="solid";
	tableref.style.borderColor="black";
	
    var hrow=document.createElement("tr");

    var th1=document.createElement("th");
	th1.innerHTML="Itrattore"
	
	hrow.append(th1);
	
	var th2=document.createElement("th");
	th2.innerHTML="X";
	hrow.append(th2);
	
	var th3=document.createElement("th");
	th3.innerHTML="Num";
	hrow.append(th3);
	
	var th4=document.createElement("th");
	th4.innerHTML
	hrow.append(th4);
	
	var th5=document.createElement("th");
	hrow.append(th5);
	tableref.append(hrow);
	
	
	for(var i=1;i<=10;i++)
	{
		var row=document.createElement("tr");
		
		var col1=document.createElement("td");
		col1.innerHTML=i;
		row.append(col1);
		
		var col2=document.createElement("td");
		col2.innerHTML="X";
		row.append(col2);
		
		var col3=document.createElement("td");
		col3.innerHTML=n;
		row.append(col3);
		
		var col4=document.createElement("td");
		col4.innerHTML="=";
		row.append(col4);
		
		var col5=document.createElement("td");
		col5.innerHTML=i*n;
		row.append(col5);
		
		tableref.append(row);
	}
	ctable.append(tableref);   
}

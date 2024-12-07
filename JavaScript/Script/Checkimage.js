let choosImage=[];
function addImage(val)
{
    const clickedImage=document.getElementById(val);
	if(clickedImage.src==choosImage[0] || clickedImage.src==choosImage[1] || clickedImage.src==choosImage[2])
	{
	}
	else
	{
		if(choosImage.length<3)
		{
			choosImage.push(clickedImage.src);
		}
		else{
			choosImage.splice(0,-1)
			choosImage.unshift(clickedImage.src)
		}
		updateResultImage();
	}

}
function updateResultImage()
{
    const firstImage = document.getElementById("first");
    const secondImage = document.getElementById("second");
    const thirdImage = document.getElementById("third");
    
    firstImage.src=choosImage[0];
    secondImage.src=choosImage[1];
    thirdImage.src=choosImage[2];
}
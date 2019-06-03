var colors = [
	"rgb(255,0,0)",
	"rgb(123,169,55)",
	"rgb(123,24,231)",
	"rgb(0,255,255)",
	"rgb(0,0,255)",
	"rgb(0,255,0)"];


function setOnClickListener()
{
	const arr = document.getElementsByClassName('square');
	for(var i=0;i<arr.length;i++)
	{
		console.log(arr[i].value);
		arr[i].addEventListener('click',function(){alert("Click");});
		arr[i].style.background=colors[i];
	}
}

setOnClickListener()
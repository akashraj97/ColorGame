function gen_random()
{
	return Math.floor(Math.random()*255);
}
	
function gen_random_color()
{
	return "rgb("+gen_random()+", "+gen_random()+", "+gen_random()+")";
}

arr = $("cb")
x = false;
function change_color()
{
	arr = $('.container .cb');
	console.log("XYZ");
	choice = Math.floor(Math.random()*5);
	arr.each(function(i,el){
		$(el).css("backgroundColor",gen_random_color());
		$(el).toggleClass('clicked');
		console.log(i,choice);
		if(i==choice)
		{
			$('#q').html($(el).css("backgroundColor"));
		}
		if(!x)
		{
			$(el).click(function(){
				if($(this).css("backgroundColor")==$('#q').html())
				{
					alert("You did it");
					change_color();
				}
				else
				{
					alert("Try Again :(");
				}
			});
		}
	})
	x = true;
}
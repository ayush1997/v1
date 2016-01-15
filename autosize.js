function retwidth()
{
	var a= $(window).width();
	return a;

}
function resize()
{

	var width = retwidth();
	if(width<1000)
	{
		$('#main').css('transform','scale(1.7)');

	}
	else
	{
		$('#main').css('transform','scale(1.0)');
	}

}
setInterval(resize,10);
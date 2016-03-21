function retwidth()
{
	var a= screen.width;
	return a;

}
function resize()
{

	var width = retwidth();
	if(width<500)
	{
		$('#main').css('transform','scale(2.0)');

	}
	else
	{
		$('#main').css('transform','scale(1.0)');
	}

}
resize();
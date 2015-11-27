var mainmenu_open = false;
var barslide = false;

function icons(action,del_time)
	{	if(action == 'open')
			{	
				mainmenu_open = true;
				$("#contact").stop(true,true).delay(del_time).animate({left:'65px'},50);
				$("#home").stop(true,true).delay(del_time).animate({left:'125px'},100);	
				$("#skills").stop(true,true).delay(del_time).animate({left:'190px'},150);
				$("#projects").stop(true,true).delay(del_time).animate({left:'250px'},200);
				$("#resume").stop(true,true).delay(del_time).animate({left:'300px'},250);

			}
		else if(action== 'close')
				{	
					mainmenu_open = false;
					$("#contact").stop(true,true).delay(del_time).animate({left:'-75px'},250);
					$("#home").stop(true,true).delay(del_time).animate({left:'-95px'},200);
					$("#skills").stop(true,true).delay(del_time).animate({left:'-75px'},150);
					$("#projects").stop(true,true).delay(del_time).animate({left:'-70px'},100);
					$("#resume").stop(true,true).delay(del_time).animate({left:'-75px'},50);
				}
		
	}
function slide(action,del_time)
{	if(action == 'open')
			{	
				
				$(".cont").stop(true,true).delay(del_time).animate({left:'110px'},50);
				$(".hom").stop(true,true).delay(del_time).animate({left:'174px'},100);	
				$(".ski").stop(true,true).delay(del_time).animate({left:'233px'},150);
				$(".proj").stop(true,true).delay(del_time).animate({left:'290px'},200);
				$(".resu").stop(true,true).delay(del_time).animate({left:'345px'},250);

			}
		else if(action== 'close')
				{	
					
					$(".cont").stop(true,true).delay(del_time).animate({left:'-50px'},250);
					$(".hom").stop(true,true).delay(del_time).animate({left:'-50px'},200);
					$(".ski").stop(true,true).delay(del_time).animate({left:'-50px'},150);
					$(".proj").stop(true,true).delay(del_time).animate({left:'-50px'},100);
					$(".resu").stop(true,true).delay(del_time).animate({left:'-50px'},50);
				}

}
function slanti(event)
	{
        if (mainmenu_open == false)
        	
        	{
        		$("#slant").stop(true,true).animate({height:'470px'},300); 
        		slide("open",100);
        		icons("open",150);
        		    
        	}
        else if(mainmenu_open == true)
        	
        	{
        		
				if(barslide == true)
						{
							bar();
						}
				$("#slant").stop(true,true).animate({height:'5px'},300);
				slide("close",150);
				icons("close",100);
				
			
        	}
	}
function icon_color(event)
{
	
	$(event.data.obj).css('color',event.data.col);
		
	
}
function sl(){

	$("#slant").css('backgroundColor','#8a00e6');
}
function barslide_icons(action,del_time){
	if (action == "open")

		{	
			
			$("#facebook").stop(true,true).delay(del_time).animate({bottom:'65px'},100);
			$("#github").stop(true,true).delay(del_time).animate({bottom:'65px'},150);	
			$("#mail").stop(true,true).delay(del_time).animate({bottom:'65px'},200);
			$("#linkin").stop(true,true).delay(del_time).animate({bottom:'65px'},250);
			$("#message").stop(true,true).delay(del_time).animate({bottom:'65px'},300);
			$("#google").stop(true,true).delay(del_time).animate({bottom:'65px'},350);
			

		}
	else if(action== 'close')
			{	
				
				$("#facebook").stop(true,true).delay(del_time).animate({bottom:'-50px'},350);
				$("#github").stop(true,true).delay(del_time).animate({bottom:'-50px'},300);
				$("#mail").stop(true,true).delay(del_time).animate({bottom:'-50px'},250);
				$("#linkin").stop(true,true).delay(del_time).animate({bottom:'-50px'},200);
				$("#message").stop(true,true).delay(del_time).animate({bottom:'-50px'},150);
				$("#google").stop(true,true).delay(del_time).animate({bottom:'-50px'},100);

			}
	
}
function bar(){
	if (barslide == false)
		{
			barslide = true;
			$('#slidebar').stop(true,true).animate({width:'340px',opacity:1},400);
			$('#righttri').stop(true,true).animate({left:'410px',opacity:1},400);
			barslide_icons("open",50);
		}
	else
		{
			barslide = false;
			$('#slidebar').stop(true,true).animate({width:'46px'},300);
			$('#righttri').stop(true,true).animate({left:'110px'},300);
			$('#slidebar').stop(true,true).animate({opacity:'0'});
			$('#righttri').stop(true,true).animate({opacity:'0'});
			barslide_icons("close",50);
			

		}
}

$(document).on("click","#menuicon",slanti);

$(document).on("mouseenter","#menuicon",{obj:'.nav',col:"white"},icon_color);
$(document).on("mouseleave","#menuicon",{obj:".nav",col:"black"},icon_color);


$(document).on("mouseenter","#contact",{obj:'.ph',col:"white"},icon_color);
$(document).on("mouseleave","#contact",{obj:".ph",col:"black"},icon_color);

$(document).on("mouseenter","#home",{obj:'.hm',col:"white"},icon_color);
$(document).on("mouseleave","#home",{obj:".hm",col:"black"},icon_color);

$(document).on("mouseenter","#skills",{obj:'.sk',col:"white"},icon_color);
$(document).on("mouseleave","#skills",{obj:".sk",col:"black"},icon_color);

$(document).on("mouseenter","#projects",{obj:".pr",col:"white"},icon_color);
$(document).on("mouseleave","#projects",{obj:".pr",col:"black"},icon_color);

$(document).on("mouseenter","#resume",{obj:'.res',col:"white"},icon_color);
$(document).on("mouseleave","#resume",{obj:".res",col:"black"},icon_color);
//$(document).on("mouseenter","#slant",sl);
//$(document).on("mouseleave","#slant",sl);
$(document).on("click","#contact",bar);

$(document).on("mouseenter","#facebook",{obj:'.fb',col:"white"},icon_color);
$(document).on("mouseleave","#facebook",{obj:".fb",col:"black"},icon_color);

$(document).on("mouseenter","#github",{obj:'.git',col:"white"},icon_color);
$(document).on("mouseleave","#github",{obj:".git",col:"black"},icon_color);

$(document).on("mouseenter","#mail",{obj:'.gmail',col:"white"},icon_color);
$(document).on("mouseleave","#mail",{obj:".gmail",col:"black"},icon_color);

$(document).on("mouseenter","#linkin",{obj:'.in',col:"white"},icon_color);
$(document).on("mouseleave","#linkin",{obj:".in",col:"black"},icon_color);

$(document).on("mouseenter","#message",{obj:'.mess',col:"white"},icon_color);
$(document).on("mouseleave","#message",{obj:".mess",col:"black"},icon_color);

$(document).on("mouseenter","#google",{obj:'.plus',col:"white"},icon_color);
$(document).on("mouseleave","#google",{obj:".plus",col:"black"},icon_color);



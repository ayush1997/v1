var mainmenu_open = false;
var barslide = false;

function icons(action,del_time)
	{	if(action == 'open')
			{	
				mainmenu_open = true;
				$("#contact").stop(true,true).delay(del_time).animate({left:'+=140px'},100);
				$("#home").stop(true,true).delay(del_time).animate({left:'+=220px'},150);	
				$("#skills").stop(true,true).delay(del_time).animate({left:'+=265px'},200);
				$("#projects").stop(true,true).delay(del_time).animate({left:'+=320px'},250);
				$("#resume").stop(true,true).delay(del_time).animate({left:'+=375px'},300);

			}
		else if(action== 'close')
				{	
					mainmenu_open = false;
					$("#contact").stop(true,true).delay(200).animate({left:'-=140px'},300);
					$("#home").stop(true,true).delay(200).animate({left:'-=220px'},250);
					$("#skills").stop(true,true).delay(200).animate({left:'-=265px'},200);
					$("#projects").stop(true,true).delay(200).animate({left:'-=320px'},150);
					$("#resume").stop(true,true).delay(200).animate({left:'-=375px'},100);
				}
		
	}
function slide(action,del_time)
{	if(action == 'open')
			{	
				
				$(".cont").stop(true,true).delay(del_time).animate({left:'+=160px'},100);
				$(".hom").stop(true,true).delay(del_time).animate({left:'+=224px'},150);	
				$(".ski").stop(true,true).delay(del_time).animate({left:'+=283px'},200);
				$(".proj").stop(true,true).delay(del_time).animate({left:'+=340px'},250);
				$(".resu").stop(true,true).delay(del_time).animate({left:'+=395px'},300);

			}
		else if(action== 'close')
				{	
					
					$(".cont").stop(true,true).delay(200).animate({left:'-=160px'},300);
					$(".hom").stop(true,true).delay(200).animate({left:'-=224px'},250);
					$(".ski").stop(true,true).delay(200).animate({left:'-=283px'},200);
					$(".proj").stop(true,true).delay(200).animate({left:'-=340px'},150);
					$(".resu").stop(true,true).delay(200).animate({left:'-=395px'},100);
				}

}
function slanti(event)
	{
        if (mainmenu_open == false)
        	
        	{
        		$("#slant").stop(true,true).animate({height:'470px'},600); 
        		slide("open",200);
        		icons("open",400);
        		    
        	}
        else if(mainmenu_open == true)
        	
        	{
        		
				if(barslide == true)
						{
							bar();
						}
				$("#slant").stop(true,true).animate({height:'5px'},300);
				slide("close",400);
				icons("close",200);
				
			
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
			$("#mail").stop(true,true).delay(del_time).animate({bottom:'65px'},150);
			$("#linkin").stop(true,true).delay(del_time).animate({bottom:'65px'},200);
			$("#message").stop(true,true).delay(del_time).animate({bottom:'65px'},250);
			$("#google").stop(true,true).delay(del_time).animate({bottom:'65px'},300);
			

		}
	else if(action== 'close')
			{	
				
				$("#facebook").stop(true,true).delay(del_time).animate({bottom:'-50px'},300);
				$("#github").stop(true,true).delay(del_time).animate({bottom:'-50px'},250);
				$("#mail").stop(true,true).delay(del_time).animate({bottom:'-50px'},150);
				$("#linkin").stop(true,true).delay(del_time).animate({bottom:'-50px'},150);
				$("#message").stop(true,true).delay(del_time).animate({bottom:'-50px'},200);
				$("#google").stop(true,true).delay(del_time).animate({bottom:'-50px'},100);

			}
	
}
function bar(){
	if (barslide == false)
		{
			barslide = true;
			$('#slidebar').stop(true,true).animate({width:'340px',opacity:1});
			$('#righttri').stop(true,true).animate({left:'410px',opacity:1});
			barslide_icons("open",200);
		}
	else
		{
			barslide = false;
			$('#slidebar').stop(true,true).animate({width:'46px'},1000);
			$('#righttri').stop(true,true).animate({left:'110px'},1000);
			$('#slidebar').stop(true,true).animate({opacity:'0'});
			$('#righttri').stop(true,true).animate({opacity:'0'});
			barslide_icons("close",200);
			

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



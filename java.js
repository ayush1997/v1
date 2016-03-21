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
	if(event.data.action == "cur_on")
	{	
		$('#display_title').stop(true,true).animate({bottom:'273px',left:'230px',opacity:1},40);
		$('#display_title').stop(true,true).html(event.data.text);
		$(event.data.obj).css('color',event.data.col);
	}
	else if(event.data.action == "cur_down")
	{
		$("#display_title").stop(true,true).animate({bottom:'253px',left:'260px',opacity:0},40);
		$('#display_title').stop(true,true).html('');
		$(event.data.obj).css('color',event.data.col);
	}
	else if(event.data.action == 'main_menu')
	{
		$(event.data.obj).css('color',event.data.col);
	}
	
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

$(document).on("mouseenter","#menuicon",{action:"main_menu",obj:'.nav',col:"white"},icon_color);
$(document).on("mouseleave","#menuicon",{action:"main_menu",obj:".nav",col:"black"},icon_color);


$(document).on("mouseenter","#contact",{action:'cur_on',obj:'.ph',col:"white",text:'CONTACT'},icon_color);
$(document).on("mouseleave","#contact",{action:'cur_down',obj:".ph",col:"black"},icon_color);

$(document).on("mouseenter","#home",{action:'cur_on',obj:'.hm',col:"white",text:'HOME'},icon_color);
$(document).on("mouseleave","#home",{action:'cur_down',obj:".hm",col:"black"},icon_color);

$(document).on("mouseenter","#skills",{action:'cur_on',obj:'.sk',col:"white",text:'SKILLS'},icon_color);
$(document).on("mouseleave","#skills",{action:'cur_down',obj:".sk",col:"black"},icon_color);

$(document).on("mouseenter","#projects",{action:'cur_on',obj:".pr",col:"white",text:'PROJECTS'},icon_color);
$(document).on("mouseleave","#projects",{action:'cur_down',obj:".pr",col:"black"},icon_color);

$(document).on("mouseenter","#resume",{action:'cur_on',obj:'.res',col:"white",text:'RESUME'},icon_color);
$(document).on("mouseleave","#resume",{action:'cur_down',obj:".res",col:"black"},icon_color);
//$(document).on("mouseenter","#slant",sl);
//$(document).on("mouseleave","#slant",sl);
$(document).on("click","#contact",bar);

$(document).on("mouseenter","#facebook",{action:'cur_on',obj:'.fb',col:"white",text:'FACEBOOK'},icon_color);
$(document).on("mouseleave","#facebook",{action:'cur_down',obj:".fb",col:"black"},icon_color);

$(document).on("mouseenter","#github",{action:'cur_on',obj:'.git',col:"white",text:'GITHUB'},icon_color);
$(document).on("mouseleave","#github",{action:'cur_down',obj:".git",col:"black"},icon_color);

$(document).on("mouseenter","#mail",{action:'cur_on',obj:'.gmail',col:"white",text:'GMAIL'},icon_color);
$(document).on("mouseleave","#mail",{action:'cur_down',obj:".gmail",col:"black"},icon_color);

$(document).on("mouseenter","#linkin",{action:'cur_on',obj:'.in',col:"white",text:'LINKEDIN'},icon_color);
$(document).on("mouseleave","#linkin",{action:'cur_down',obj:".in",col:"black"},icon_color);

$(document).on("mouseenter","#message",{action:'cur_on',obj:'.mess',col:"white",text:'MESSAGE'},icon_color);
$(document).on("mouseleave","#message",{action:'cur_down',obj:".mess",col:"black"},icon_color);

$(document).on("mouseenter","#google",{action:'cur_on',obj:'.plus',col:"white",text:"TWITTER"},icon_color);
$(document).on("mouseleave","#google",{action:'cur_down',obj:".plus",col:"black"},icon_color);



$(function(){
	$('p').mouseover(function(){
		$(this).css('color','#e4393c');

		$(this).mouseout(function(){
			$(this).css('color','#555');
		})

	})
	
	$('.di>mark').mouseover(function(){
		$(this).css('background','#e4393c');
		$(this).mouseout(function(){
			$(this).css('background','#bf2c24');
		})
	})
	$('aside ul li').mouseover(function(){
		$(this).css({'transition':'all 1s ease',"transform":"rotateY(360deg)"});
		$('aside ul li').mouseout(function(){
			$(this).css({'transition':'all 1s ease',"transform":"rotateY(0deg)"});
			
		})	
	})

	$('.qi').mouseover(function(){
		$(this).css('border-top','2px solid red').css('background','#fff');
		$('.la').css('display','block');
		$(this).mouseout(function(){
			$(this).css('border-top','2px solid transparent').css('background','0');
			$('.la').css('display','none');
			})
		
	})

	$('#inp').focus();
	$('#inp').click(function(){
		$(this).val('');
	})
	$(".cur").mouseover(function(){
		$(this).css('cursor','pointer');
	})
var num = 14;
$('#bt1').click(function(){	
	if(num<24){
		num=num+2;
		var size=num+"px"
		$('.zi p').css({'font-size':num+'px'});
		//alert(num);
	}else{
		alert('字体已经够大了');
	}
})
$('#bt2').click(function(){	
	if(num>12){
		num=num-2;
		var size=num+"px"
		$('.zi p').css({'font-size':num+'px'});
		//alert(num);
	}else{
		alert('字体不能再小了');
	}
})
$('aside li').eq(1).mouseover(function(){
	$('.set').css('display','block');
})
$('aside li').eq(1).click(function(){
	$('.set').css('display','none');
})
// $('.set').mouseout(function(){
// 	$(this).css('display','none');
// })
$('#bt3').click(function(){	
	$('.top,.main,.zi,.feng,.footer').css('background','#333').css('color','#fff');
	$('aside').css('background','#555').css('color','#333');
	$(this).val('是');
	$('#bt4').val('否');
	$('.tu img').attr('src','');
})
$('#bt4').click(function(){	
	$('.top,.main,.zi,.feng,.footer').css('background','').css('color','');
	$('aside').css('background','').css('color','');
	$(this).val('是');
	$('#bt3').val('否');
	$('.tu .one').attr('src','img/ping.png');
	$('.tu .two').attr('src','img/lun.png');
})

$('#bt5').click(function(){	
	$('.top,.main,.zi,.feng,.footer').css('background','').css('color','');
	$('aside').css('background','').css('color','');
	$('#bt4').val('否');
	$('#bt3').val('是');
	$('.zi p').css({'font-size':'14px'});
	$('.tu .one').attr('src','img/ping.png');
	$('.tu .two').attr('src','img/lun.png');
})




})
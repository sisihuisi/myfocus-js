myFocus.pattern.extend({//*********************ladyQ******************
	'mF_ladyQ':function(settings,$){
		var $focus=$(settings);
		var $picList=$focus.find('.pic li');
		var $txtList=$focus.addListTxt().find('li');
		var $numList=$focus.addListNum().find('li');
		var $bar=$focus.addHtml('<div class="time_bar"></div>');
		//CSS
		var n=$picList.length,numH=28,barW=settings.width-23*n-6;
		$focus[0].style.height=settings.height+numH+'px';
		$bar[0].style.cssText='top:'+(settings.height+4)+'px;width:'+barW+'px;'+(settings.timeBar?'':'display:none');
		for(var i=0;i<n;i++) $txtList[i].style.bottom=numH-1+'px';
		//PLAY
		var over=false,start=true,t=settings.time*1000;
		$focus.play(function(i){
			$picList[i].style.zIndex=1;
			if(!start) $picList.eq(i).fadeOut(600,'easeOut',function(){this.index=''});
			$txtList[i].style.display='none';
			$numList[i].className='';
			if(settings.timeBar) $bar.stop()[0].style.width=barW+'px';
			if(settings.timeBar&&!over) $bar.slide({width:0},t,'linear');
		},function(i){
			$picList.eq(i).fadeIn(600,'easeInOut');
			$txtList[i].style.display='block';
			$numList[i].className='current',start=false;
		});
		//Control
		$focus.bindControl($numList);
		//Stop time bar event
		if(settings.timeBar){
			$focus.bind('mouseover',function(){$bar.stop()[0].style.width=barW+'px',over=true;});
			$focus.bind('mouseout',function(){$bar.slide({width:0},t,'linear'),over=false;});
		}
	}
});
myFocus.defConfig.extend({
	txtHeight:58,//默认标题高度
	timeBar:true//是否有时间条[true(有)|false(无)]
});
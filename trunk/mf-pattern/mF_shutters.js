myFocus.pattern.extend({//*********************百叶窗******************
	'mF_shutters':function(settings,$){
		var c=Math.floor(settings.width/50);
		var $focus=$(settings);
		var $txtList=$focus.addListTxt().find('li');
		var $picUls=$focus.find('.pic ul').repeat(c);
		
		var $prevBtn=$focus.addHtml('<div class="prev"><a href="javascript:;">PREV</a></div>');
		var $nextBtn=$focus.addHtml('<div class="next"><a href="javascript:;">NEXT</a></div>');
		var $picListArr=[];
		//CSS
		var w=settings.width/c;
		$picUls.each(function(i){
			$(this).css({width:w*(i+1),zIndex:c-i});
			$picListArr.push($(this).find('li'));
		});
		//PLAY
		//var dur=300;
		//var $list=$focus.find('.pic li');
		$focus.play(function(i){
			$txtList[i].className='';
			//for(var j=0;j<c;j++) $picListArr[j].eq(i).delay((j+1)*100).fadeOut();
			//for(var j=0;j<c;j++) timeoutFx($picListArr[j].eq(i),'fadeOut',(j+1)*100);
			//$list.each(function(){this.style.display='none'});
		},function(i){
			//for(var j=0;j<c;j++) $picListArr[j].eq(i).delay((j+1)*100).fadeIn();
			$txtList[i].className='current';
			for(var j=0;j<c;j++){
				
				//$picListArr[j].eq(i)[0].style.zIndex=99;
				timeoutFx($picListArr[j],i,(j+1)*100);
			}
		});
		function timeoutFx($picList,i,t){
			setTimeout(function(){
				$picList.eq(i).css({zIndex:1}).fadeIn(function(){
					$picList.each(function(){this.style.display='none'});
					this.style.cssText='z-index:"";display:block';
				});
			},t);
		}
		//Control
		$prevBtn.bind('click',function(){$focus.run('-=1')});
		$nextBtn.bind('click',function(){$focus.run('+=1')});
		$focus.bind('mouseover',function(){$prevBtn[0].style.display=$nextBtn[0].style.display='block'});
		$focus.bind('mouseout',function(){$prevBtn[0].style.display=$nextBtn[0].style.display='none'});
		//$focus.bindControl($numList,settings.trigger,settings.delay);
	}
});
myFocus.defConfig.extend({
	chipNum:10//图片切片数量，能被焦点图的高整除才有效，默认为8片
});
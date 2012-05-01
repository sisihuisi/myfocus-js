myFocus.pattern.extend({//*********************百叶窗******************
	'mF_shutters':function(settings,$){
		var c=Math.floor(settings.width/50);
		var $focus=$(settings);
		var $picUls=$focus.find('.pic ul').repeat(c);
		var $picListArr=[];		
		//CSS
		var w=settings.width/c;
		$picUls.each(function(i){
			$(this).css({width:w*(i+1),zIndex:c-i});
			$picListArr.push($(this).find('li'));
		});
		//PLAY
		//var dur=300;
		
		$focus.play(function(i){
			//for(var j=0;j<c;j++) $picListArr[j].eq(i).delay((j+1)*100).fadeOut();
			for(var j=0;j<c;j++) timeoutFx($picListArr[j].eq(i),'fadeOut',(j+1)*100);
		},function(i){
			//for(var j=0;j<c;j++) $picListArr[j].eq(i).delay((j+1)*100).fadeIn();
			for(var j=0;j<c;j++) timeoutFx($picListArr[j].eq(i),'fadeIn',(j+1)*100);
		});
		function timeoutFx(o,type,t){
			setTimeout(function(){
				o[type]();
			},t);
		}
		//Control
		//$focus.bindControl($numList,settings.trigger,settings.delay);
	}
});
myFocus.defConfig.extend({
	chipNum:10//图片切片数量，能被焦点图的高整除才有效，默认为8片
});
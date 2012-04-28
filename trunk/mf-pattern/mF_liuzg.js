myFocus.pattern.extend({
	'mF_liuzg':function(settings,$){//*********************绚丽切片风格******************
		var $focus=$(settings);
		var $picBox=$focus.find('.pic');
		var $picList=$picBox.find('li');
		var $txtList=$focus.addListTxt().find('li');
		var $numList=$focus.addListNum().find('li');
		//HTML++
		var c=settings.height%settings.chipNum?8:settings.chipNum,n=$txtList.length,html=['<ul>'];
		for(var i=0;i<c;i++){
			html.push('<li><div>');
			for(var j=0;j<n;j++) html.push($picList[j].innerHTML);
			html.push('</div></li>');
		}
		html.push('</ul>');
		$picBox[0].innerHTML=html.join('');
		//CSS
		var w=settings.width,h=settings.height,cH=h/c;
		var $picList=$picBox.find('li'),$picDivList=$picBox.find('div');
		$picList.each(function(i){
			$picList.eq(i).css({width:w,height:cH});
			$picDivList.eq(i).css({height:h*n,top:-i*h});
		});
		$picBox.find('a').each(function(){this.style.height=h+'px'});
		//PLAY
		$focus.play(function(i){
			$txtList[i].style.display='none';
			$numList[i].className='';
		},function(i){
			var tt=settings.type===4?Math.round(1+(Math.random()*(3-1))):settings.type;//效果选择
			var dur=tt===1?1200:300;
			for(var j=0;j<c;j++){
				$picDivList.eq(j).slide({top:-i*c*cH-j*cH},tt===3?Math.round(300+(Math.random()*(1200-300))):dur);
				dur=tt===1?dur-150:dur+150;
			}
			$txtList[i].style.display='block';
			$numList[i].className = 'current';
		});
		//Control
		$focus.bindControl($numList);
	}
});
myFocus.defConfig.extend({//可选个性参数
	chipNum:8,//图片切片数量，能被焦点图的高整除才有效，默认为8片
	type:4////切片效果，可选：1(甩头) | 2(甩尾) | 3(凌乱) | 4(随机)
});
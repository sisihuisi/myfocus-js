myFocus.pattern.extend({//*********************luluJQ******************
	'mF_luluJQ':function(settings,$){
		var $focus=$(settings);
		$focus.find('.pic a').each(function(){
			var $o=$(this),txt=$o.find('img')[0].alt;
			$o.addHtml('<span><b>'+txt+'</b><i></i></span>');
		});
		var $picBox=$focus.find('.pic');
		var $picList=$focus.find('li');
		var $txtList=$focus.find('span');
		var $txtBgList=$focus.find('i');
		//CSS
		var n=$picList.length,tabW=settings.tabWidth,txtH=settings.txtHeight,sFix=settings.grayPicSuffix;
		$focus.css({width:settings.width+(n-1)*tabW});
		for(var i=0;i<n;i++){
			if(i>0) $picList[i].style.left=settings.width+(i-1)*tabW+'px';
			if(i>0&&settings.grayChange) $.alterSRC($picList[i],sFix);
			$txtList[i].style.cssText=$txtBgList[i].style.cssText='top:0;height:'+txtH+'px;line-height:'+txtH+'px;'
		}
		//PLAY
		$focus.play(function(i,n){
			$txtList.eq(i).slide({top:0});
			if(settings.grayChange) $.alterSRC($picList[i],sFix);
		},function(i,n){
			for(var j=0;j<n;j++){
				if(j<=i) $picList.eq(j).slide({left:j*tabW});
				else $picList.eq(j).slide({left:settings.width+(j-1)*tabW});
			}
			$txtList.eq(i).slide({top:-txtH});
			if(settings.grayChange) $.alterSRC($picList[i],sFix,true);
		});
		//Control
		$focus.bindControl($picList);
	}
});
myFocus.defConfig.extend({//可选个性参数
	tabWidth:68,//图片tab留边宽度(像素)
	txtHeight:34,//文字层高度(像素)
	grayChange:false,//非当前图片是否变灰,可选：true(是) | false(否),如果要变灰,请准备灰色图片副本,并配合下面参数grayPicSuffix设置
	grayPicSuffix:'-gray'//灰色图片的名称后缀,例如原图是'1.jpg',灰色副本则以'1-gray.jpg'规则命名(建议在myFocus的DIV后添加它的隐藏灰色副本DIV,这样可以预加载副本图片)
});
//扩充myFocus全局一个方法(更换灰色的图片)
myFocus.extend({
	alterSRC:function(o,suffix,del){
		var img=o.getElementsByTagName('img')[0];
		img.src=del?img.src.replace(eval("/"+suffix+"\\.(?=[^\\.]+$)/g"),'.'):img.src.replace(/\.(?=[^\.]+$)/g,suffix+'.');
	}
});
myFocus.extend({//*********************luluJQ******************
	mF_luluJQ:function(par){
		var box=this.$(par.id),pics=this.$c('pic',box);
		for(var i=0,l=this.$$('a',pics);i<l.length;i++) l[i].innerHTML+='<span><b>'+this.$$('img',pics)[i].alt+'</b><i></i></span>';
		var pics=this.$c('pic',box),pic=this.$li('pic',box),txt=this.$$('span',pics),txtBg=this.$$('i',pics),n=pic.length;
		//CSS
		var pad=par.pad||32,txtH=isNaN(par.txtHeight/1)?34:par.txtHeight;//设置默认的文字高度;
		box.style.width=par.width+(n-1)*pad+'px';
		for(var i=0;i<n;i++){
			if(i>0) pic[i].style.left=par.width+(i-1)*pad+'px';
			if(i>0&&par.gray) this.alterSRC(pic[i],'-2');
			txt[i].style.cssText=txtBg[i].style.cssText='height:'+txtH+'px;line-height:'+txtH+'px;'
		}
		//PLAY
		eval(this.switchMF(function(mf){
			mf.slide(txt[index],{top:0});
			if(par.gray) mf.alterSRC(pic[index],'-2');
		},function(mf){
			for(var i=0;i<n;i++){
				if(i<=next) mf.slide(pic[i],{left:i*pad});
				else mf.slide(pic[i],{left:par.width+i*pad-pad});
			}
			mf.slide(txt[next],{top:-txtH});
			if(par.gray) mf.alterSRC(pic[next],'-2',true);
		}))
		eval(this.bind('pic','par.trigger',par.delay));
	}
});
myFocus.set.params('mF_luluJQ',{//额外参数设置
	pad:68,//图片留边宽度
	gray:false//非当前图片是否变灰,如果要变灰,请先准备图片灰色的副本并命名为："原来图片的名字-2.jpg"
});
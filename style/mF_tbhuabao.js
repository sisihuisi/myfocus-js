myFocus.extend({//*********************tbhuabao******************
	mF_tbhuabao:function(par){
		var box=this.$(par.id);
		this.addList(box,['dot','txt','prev','next']);this.wrap([this.$c('pic',box)],'win');
		var pics=this.$c('pic',box),dot=this.$li('dot',box),txt=this.$li('txt',box),pre=this.$c('prev',box),nex=this.$c('next',box),n=txt.length;
		pics.innerHTML+=pics.innerHTML;//无缝复制
		for(var i=0;i<n;i++) dot[i].innerHTML='<a href="javascript:;">&bull;</a>';//小点
		pre.innerHTML='<a href="javascript:;">&#8249;</a>';nex.innerHTML='<a href="javascript:;">&#8250;</a>';//前后箭头
		//CSS
		var win=this.$c('win',box),pic=this.$li('pic',box),dots=this.$c('dot',box),dotH=32,arTop=par.height/2-32;
		box.style.height=par.height+dotH+'px';
		win.style.cssText='width:'+par.width+'px;height:'+par.height+'px;';
		pics.style.width=par.width*2*n+'px';
		for(var i=0;i<n;i++) txt[i].style.bottom=dotH+'px';
		for(var i=0;i<2*n;i++) pic[i].style.cssText='width:'+par.width+'px;height:'+par.height+'px;';//滑动固定其大小
		pre.style.cssText=nex.style.cssText='top:'+arTop+'px;';
		//PLAY
		eval(this.switchMF(function(){
			txt[index>=n?(index-n):index].style.display='none';
			dot[index>=n?(index-n):index].className = '';
		},function(){
			myFocus.slide(pics,{left:-par.width*next});
			txt[next>=n?(next-n):next].style.display='block';
			dot[next>=n?(next-n):next].className = 'current';
		},'par.less'));
		eval(this.bind('dot','par.trigger',par.delay));
		eval(this.turn('pre','nex'));
	}
});
myFocus.setting.prototype.param('mF_tbhuabao',{less:true});//支持无缝设置
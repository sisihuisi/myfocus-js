myFocus.extend({//*********************games******************
	mF_games_tb:function(par){
		var box=this.$(par.id);
		this.addList(box,['thumb','txt','prev','next']);this.wrap([this.$c('thumb',box)],'win');
		var pics=this.$c('pic',box),win=this.$c('win',box),thus=this.$c('thumb',box),thu=this.$li('thumb',box),txt=this.$li('txt',box),pre=this.$c('prev',box),nex=this.$c('next',box),n=txt.length;
		pre.innerHTML='<a href="javascript:;">&#8249;</a>';nex.innerHTML='<a href="javascript:;">&#8250;</a>';//前后箭头
		//CSS
		var pic=this.$li('pic',box),winW=par.width-20,sw=Math.floor(winW/4),sh=par.height/par.width*(sw-14)+28;//参考*按比例求高
		box.style.height=par.height+sh+'px';
		win.style.cssText='width:'+winW+'px;height:'+sh+'px;';
		thus.style.width=sw*n+'px';
		for(var i=0;i<n;i++){
			thu[i].style.cssText='width:'+(sw-14)+'px;height:'+(sh-28)+'px';//减去总padding
			this.$$('span',thu[i])[0].style.cssText='width:'+(sw-14)+'px;height:'+(sh-28)+'px';//参考*
			txt[i].style.bottom=sh+'px';
		}
		pre.style.cssText=nex.style.cssText='height:'+(sh-28+6)+'px;line-height:'+(sh-28+6)+'px;';
		//PLAY
		eval(this.switchMF(function(){
			pic[index].style.display='none';
			txt[index].style.display='none';
			thu[index].className = '';
		},function(){
			myFocus.fadeIn(pic[next]);
			txt[next].style.display='block';
			thu[next].className = 'current';
			eval(myFocus.scroll('thus','"left"','sw',4));
		}));
		eval(this.bind('thu','"click"'));//让其只支持click点击
		eval(this.turn('pre','nex'));
	}
});
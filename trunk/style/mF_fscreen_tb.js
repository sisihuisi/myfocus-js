myFocus.extend({//*********************fscreen******************
	mF_fscreen_tb:function(par){
		var box=this.$(par.id);
		this.addList(box,['thu-bg','thumb','txt','prev','next']);this.wrap([this.$c('thumb',box)],'win');
		var pics=this.$c('pic',box),thuBg=this.$c('thu-bg',box),win=this.$c('win',box),thus=this.$c('thumb',box),thu=this.$li('thumb',box),txt=this.$li('txt',box),pre=this.$c('prev',box),nex=this.$c('next',box),n=txt.length;
		pre.innerHTML='<a href="javascript:;">&#8249;</a>';nex.innerHTML='<a href="javascript:;">&#8250;</a>';//前后箭头
		//CSS
		var pic=this.$li('pic',box),winW=par.width-20,sw=Math.floor(winW/4),sh=par.height/par.width*(sw-36)+16;//参考*按比例求高
		thuBg.style.height=sh+'px';
		win.style.cssText='width:'+winW+'px;height:'+sh+'px;';
		thus.style.width=sw*n+'px';
		for(var i=0;i<n;i++){
			thu[i].style.cssText=this.$$('span',thu[i])[0].style.cssText='width:'+(sw-36)+'px;height:'+(sh-16)+'px';//减去总padding(*)
			txt[i].style.left=-par.width+'px';
		}
		pre.style.cssText=nex.style.cssText='height:'+(sh-16)+'px;line-height:'+(sh-20)+'px;';//-padding
		//PLAY
		eval(this.switchMF(function(){
			myFocus.stop(txt[index]);
			pic[index].style.display='none';
			txt[index].style.left=-par.width+'px';
			thu[index].className = '';
		},function(){
			myFocus.fadeIn(pic[next],20,function(){myFocus.slide(txt[next],{left:0})});
			thu[next].className = 'current';
			eval(myFocus.scroll('thus','"left"','sw',4));
		}));
		eval(this.bind('thu','"click"'));//让其只支持click点击
		eval(this.turn('pre','nex'));
	}
});
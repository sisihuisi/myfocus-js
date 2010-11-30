myFocus.extend({//*********************qqyue******************
	mF_sd_qqyue:function(par){
		var box=this.$(par.id);
		this.addList(box,['txt']);
		var pics=this.$c('pic',box),pic=this.$li('pic',box),txts=this.$c('txt',box),txt=this.$li('txt',box),ps=this.$c('par',box),p=this.$li('par',box),n=txt.length;
		//CSS
		txts.style.width=par.width*5/11+'px';
		box.style.width=par.width*16/11+1+'px';
		ps.style.width=par.width-12*2+'px';
		for(var i=0;i<n;i++){
			txt[i].style.cssText='width:'+(par.width*5/11+2)+'px;height:'+(par.height-n+4)/n+'px;';
		}
		//PLAY
		eval(this.switchMF(function(){
			pic[index].style.display=p[index].style.display='none';
			txt[index].className='';
		},function(){
			myFocus.fadeIn(pic[next]);
			txt[next].className='current';
			p[next].style.display='block';
		}));
		eval(this.bind('txt','par.trigger',par.delay));
	}
});
myFocus.extend({//*********************趣玩风格******************
	mF_quwan:function(par){
		var box=this.$(par.id);
		this.addList(box,['txt','num']);
		var pic=this.$li('pic',box),txt=this.$li('txt',box),num=this.$li('num',box),n=txt.length;
		//CSS
		var numH=num[0].offsetHeight;
		for(var i=0;i<n;i++){
			box.style.height=par.height+numH+1+'px';
			txt[i].style.cssText='bottom:'+(numH+1)+'px;';
		}
		//PLAY
		eval(this.switchMF(function(){
			pic[index].style.display='none';
			txt[index].style.display='none';
			num[index].className='';
		},function(){
			myFocus.fadeIn(pic[next]);
			txt[next].style.display='block';
			num[next].className='current';
		}));
		eval(this.bind('num','par.trigger',par.delay));
	}
});
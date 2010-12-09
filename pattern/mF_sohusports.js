myFocus.extend({//*********************搜狐体育******************
	mF_sohusports:function(par){
		var box=this.$(par.id);
		this.addList(box,['txt','num']);
		var pic=this.$li('pic',box),txt=this.$li('txt',box),num=this.$li('num',box),n=txt.length;
		//CSS
		for(var i=0;i<n;i++){pic[i].style.display=txt[i].style.display='none';}
		//PLAY
		eval(this.switchMF(function(){
			pic[index].style.display='none';
			txt[index].style.display='none';
			num[index].className='';
		},function(){
			myFocus.fadeIn(pic[next]);
			txt[next].style.display='';
			num[next].className='current';
		}))
		eval(this.bind('num','par.trigger',par.delay));
	}
});
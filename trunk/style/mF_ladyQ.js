myFocus.extend({//*********************ladyQ******************
	mF_ladyQ:function(par){
		var box=this.$(par.id);
		this.addList(box,['txt','num']);this.wrap([this.$c('num',box)],'num_box');
		var pic=this.$li('pic',box),txt=this.$li('txt',box),num=this.$li('num',box),n=txt.length;
		//CSS
		var numH=this.$c('num_box',box).offsetHeight;
		box.style.height=par.height+numH+'px';
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
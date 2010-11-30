myFocus.extend({//*********************太平洋电脑网风格******************
	mF_pconline:function(par){
		var box=this.$(par.id);
		this.addList(box,['txt','num']);
		var pic=this.$li('pic',box),txt=this.$li('txt',box),num=this.$li('num',box),n=txt.length;
		//CSS
		var txtH=isNaN(par.txtHeight/1)?28:par.txtHeight;//设置默认的文字高度
		box.style.height=par.height+txtH+'px';
		//PLAY
		eval(this.switchMF(function(){
			pic[index].style.display='none';
			txt[index].style.display='none';
			num[index].className='';
		},function(){
			myFocus.fadeIn(pic[next],par.speed);
			txt[next].style.display='block';
			num[next].className='current';
		}));
		eval(this.bind('num','par.trigger',par.delay));
	}
});
myFocus.setting.prototype.param('mF_pconline',{speed:20});
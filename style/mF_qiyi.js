myFocus.extend({//*********************奇艺******************
	mF_qiyi:function(par){
		var box=this.$(par.id);
		this.addList(box,['txt','num']);this.wrap([this.$c('pic',box),this.$c('txt',box)],'swt');
		var swt=this.$c('swt',box),pic=this.$li('pic',swt),txt=this.$li('txt',swt),num=this.$li('num',box),n=txt.length;
		//CSS
		var txtH=isNaN(par.txtHeight/1)?34:par.txtHeight;//设置默认的文字高度
		swt.style.width=par.width*n+'px';
		for(var i=0;i<n;i++) pic[i].style.width=par.width+'px';
		//PLAY
		eval(this.switchMF(function(){
			num[index].className='';
		},function(){
			txt[next].style.top=0+'px';//复位
			myFocus.slide(swt,{left:-par.width*next},50,'easeOut',function(){myFocus.slide(txt[next],{top:-txtH})});
			num[next].className='current';
		}))
		eval(this.bind('num','par.trigger',par.delay));
	}
});
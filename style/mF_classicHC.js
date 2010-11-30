myFocus.extend({
	mF_classicHC:function(par){//*********************经典怀旧系列一--慧聪风格******************
		var box=this.$(par.id);//定义焦点图盒子
		this.addList(box,['txt','num-bg','num']);//添加ul列表
		var pic=this.$li('pic',box),txt=this.$li('txt',box),num=this.$li('num',box),n=pic.length;//定义焦点图元素
		//CSS
		var txtH=isNaN(par.txtHeight/1)?26:par.txtHeight;//设置默认的文字高度
		box.style.width=par.width+2+'px';box.style.height=par.height+txtH+2+'px';
		this.$c('num-bg',box).style.bottom=this.$c('num',box).style.bottom=txtH+1+'px';
		for(var i=0;i<n;i++){
			pic[i].style.display='none';
			txt[i].style.cssText='display:none;top:'+(par.height+2)+'px;width:'+(par.width+2)+'px';
		}
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
//myFocus.setting.prototype.param('mF_classicHC',{less:'',txtWidth:''});
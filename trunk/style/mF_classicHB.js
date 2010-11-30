myFocus.extend({
	mF_classicHB:function(par){//*********************经典怀旧系列二--海报风格******************
		var box=this.$(par.id);//定义焦点图盒子
		this.addList(box,['txt','num']);//添加ul列表
		var pic=this.$li('pic',box),txt=this.$li('txt',box),num=this.$li('num',box),n=pic.length;//定义焦点图元素
		//CSS
		var txtH=isNaN(par.txtHeight/1)?20:par.txtHeight;//设置默认的文字高度
		for(var i=0;i<n;i++){
			pic[i].style.cssText="display:none;top:-"+0.1*par.height+"px;left:-"+0.1*par.width+"px;width:"+1.2*par.width+"px;height:"+1.2*par.height+"px;"
			txt[i].style.top=-txtH+'px';
		}
		//PLAY
		eval(this.switchMF(function(){
			myFocus.stop(pic[index]).stop(txt[index]);
			pic[index].style.cssText="display:none;top:-"+0.1*par.height+"px;left:-"+0.1*par.width+"px;width:"+1.2*par.width+"px;height:"+1.2*par.height+"px;"
			txt[index].style.top=-txtH+'px';
			myFocus.slide(num[index],{width:16},10);num[index].className='';
		},function(){
			myFocus.fadeIn(pic[next],20).slide(pic[next],{width:par.width,height:par.height,top:0,left:0},20)
			myFocus.slide(txt[next],{top:0},20);
			myFocus.slide(num[next],{width:26},10);num[next].className='current';
		}))
		eval(this.bind('num','par.trigger',par.delay));
	}
});
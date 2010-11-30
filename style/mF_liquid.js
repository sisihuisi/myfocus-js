myFocus.extend({//*********************液动风格（只支持除了IE8以外的主流浏览器）******************
	mF_liquid:function(par){
		var box=this.$(par.id);
		this.addList(box,['mod','txt','num']);this.$c('mod',box).innerHTML=this.$c('pic',box).innerHTML;
		var pic=this.$li('pic',box),mod=this.$li('mod',box),txt=this.$li('txt',box),num=this.$li('num',box),n=pic.length;
		//CSS
		for(var i=0;i<n;i++){
			pic[i].style.cssText='width:0px;z-index:1;';
			mod[i].style.cssText='width:'+par.width*10+'px;left:'+par.width+'px;';
		}
		//PLAY
		eval(this.switchMF(function(){
			myFocus.stop(pic[index]).stop(mod[index]);
			pic[index].style.width=0+'px';
			mod[index].style.left=par.width+'px';
			txt[index].style.display='none';
			num[index].className = '';
		},function(){
			myFocus.slide(mod[next],{left:0},8,'linear',function(){myFocus.slide(pic[next],{width:par.width},50).slide(this,{left:-9*par.width},50)});
			txt[next].style.display='block';
			num[next].className = 'current';
		}));
		eval(this.bind('num','par.trigger',0));//延迟固定为0以兼容IE6
	}
});
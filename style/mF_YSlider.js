myFocus.extend({//*********************YSlide--翻页效果******************
	mF_YSlider:function(par){
		var box=this.$(par.id);
		this.addList(box,['rePic','txt','num']);this.$c('rePic',box).innerHTML=this.$c('pic',box).innerHTML;//复制
		var pic=this.$li('pic',box),rePic=this.$li('rePic',box),txt=this.$li('txt',box),num=this.$li('num',box),n=pic.length;
		//PLAY
		eval(this.switchMF(function(){
			pic[index].style.display=txt[index].style.display='none';
			rePic[index].style.cssText='left:0;display:block;filter:alpha(opacity=100);opacity:1;';
			myFocus.slide(rePic[index],{left:par.width},30).fadeOut(rePic[index]);
			num[index].className='';
		},function(){
			pic[next].style.display=txt[next].style.display='block';
			num[next].className='current';
		}))
		eval(this.bind('num','par.trigger',par.delay));
	}
});
myFocus.extend({//*********************51xflash******************
	mF_51xflash:function(par){
		var box=this.$(par.id);
		this.addList(box,['txt','play']);this.wrap([this.$c('pic',box)],'cont')
		var cont=this.$c('cont',box),pics=this.$c('pic',cont),pic=this.$li('pic',cont),txt=this.$li('txt',box),btn=this.$c('play',box);
		var n=pic.length;//运行时相关参数
		//CSS
		var pad=4,w=(par.width/3),h=(par.height-pad*2)/3,disX=w+pad,disY=h+pad,txtH=isNaN(par.txtHeight/1)?34:par.txtHeight;
		box.style.cssText='width:'+(par.width+disX)+'px;height:'+(par.height+txtH+(txtH==0?0:pad))+'px;';//焦点图盒子
		cont.style.cssText='width:'+(par.width+disX)+'px;height:'+par.height+'px;';//图片盒子
		for(var i=0;i<n;i++){
			txt[i].style.display='none';
			pic[i].style.cssText='width:'+w+'px;height:'+h+'px;top:'+disY*(i-1)+'px;';
		}
		//PLAY
		eval(this.switchMF(function(){
			txt[index].style.display='none';
		},function(){
			if(index==-1) {index=n-1;next=0};//index和next一起运行时的特殊情况
			pic[index].style.zIndex=2;pic[next].style.zIndex=1;
			myFocus.slide(pic[index],{right:0,top:parseInt(pic[next].style.top),width:w,height:h},20,'easeOut',function(){this.style.zIndex=''});
			myFocus.slide(pic[next],{right:disX,top:0,width:par.width,height:par.height},20);
			txt[next].style.display='';
		}))
		eval(this.bind('pic','"click"'));//让其只支持click
		eval(this.toggle('btn','play','stop'));
	}
});
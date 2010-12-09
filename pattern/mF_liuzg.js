myFocus.extend({
	mF_liuzg:function(par){//*********************绚丽切片风格******************
		var box=this.$(par.id);
		this.addList(box,['txt','num']);//添加ul列表
		var pics=this.$c('pic',box),pic=this.$li('pic',box),n=pic.length;
		var c=par.height%par.chip?8:par.chip,h=par.height/c,html=[];
		for(var i=0;i<c;i++){
			html.push('<li><div>');
			for(var j=0;j<n;j++) html.push(pic[j].innerHTML);
			html.push('</div></li>');
		}
		pics.innerHTML=html.join('');
		//CSS
		var pic=this.$li('pic',box),txt=this.$li('txt',box),btn=this.$li('num',box),wrap=this.$$('div',pics);
		for(var i=0;i<c;i++){//初始化样式设置
			pic[i].style.cssText='width:'+par.width+'px;height:'+h+'px;';
			wrap[i].style.cssText='height:'+par.height*n+'px;top:'+-i*h+'px;';
			this.$$('a',pic[i])[0].style.height=par.height+'px';
		}
		//PLAY
		eval(this.switchMF(function(){
			txt[index].style.display='none';
			btn[index].className = '';
		},function(){
			var tt=par.type==4?Math.round(1+(Math.random()*(3-1))):par.type;//效果选择
			var spd=tt==2?20:(tt==1?80:Math.round(20+(Math.random()*(80-20))));
			for(var i=0;i<c;i++){
				if(tt==3) spd=Math.round(20+(Math.random()*(80-20)));
				myFocus.slide(wrap[i],{top:-next*c*h-i*h},spd);
				spd=tt==2?spd+10:(tt==1?spd-10:spd);
			}
			txt[next].style.display='block';
			btn[next].className = 'current';
		}))
		eval(this.bind('btn','par.trigger',par.delay));
	}
});
myFocus.set.params('mF_liuzg',{//个性参数设置
	chip:8,//图片切片数量，能被焦点图的高整除才有效，默认为8片
	type:4////切片效果选择，1为甩头，2为甩尾，3为凌乱，4为随机效果
});
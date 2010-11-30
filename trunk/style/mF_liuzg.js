myFocus.extend({
	mF_liuzg:function(par){//*********************绚丽切片风格******************
		var box=this.$(par.id);
		this.addList(box,['txt','num']);//添加ul列表
		var pic=this.$li('pic',box),n=pic.length;
		var c=par.height%par.chip?8:par.chip,h=par.height/c,pics=[];
		for(var i=0;i<c;i++){
			pics.push('<li><p>')
			for(var j=0;j<n;j++) pics.push(pic[j].innerHTML);
			pics.push('</p></li>')
		}
		this.$c('pic',box).innerHTML=pics.join('');
		var pic=this.$li('pic',box),txt=this.$li('txt',box),btn=this.$li('num',box);
		//CSS
		for(var i=0;i<c;i++){//初始化样式设置
			this.$$('p',pic[i])[0].style.top=-i*h+'px';
			pic[i].style.height=h+'px';this.$$('a',pic[i])[0].style.height=par.height+'px';
			this.$$('p',pic[i])[0].style.height=par.height*c+'px';
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
				myFocus.slide(myFocus.$$('p',pic[i])[0],{top:-next*c*h-i*h},spd);
				spd=tt==2?spd+10:(tt==1?spd-10:spd);
			}
			txt[next].style.display='block';
			btn[next].className = 'current';
		}))
		eval(this.bind('btn','par.trigger',par.delay));
	}
});
myFocus.setting.prototype.param('mF_liuzg',{//额外参数设置
	chip:8,//图片切片数量，能被焦点图的高整除才有效，默认为8片
	type:4////切片效果选择，1为甩头，2为甩尾，3为凌乱，4为随机效果
});
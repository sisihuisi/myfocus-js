myFocus.extend({//*********************雷柏风格******************
	mF_rapoo:function(par){
		var box=this.$(par.id);
		this.addList(box,['txt','num','prev','next']);
		var pic=this.$li('pic',box),txt=this.$li('txt',box),num=this.$li('num',box),pre=this.$c('prev',box),nex=this.$c('next',box);
		var n=txt.length;//运行时相关参数
		pre.innerHTML='<a href="javascript:;">&#8249;</a>';nex.innerHTML='<a href="javascript:;">&#8250;</a>';//前后箭头
		//CSS
		var txts=this.$c('txt',box),nums=this.$c('num',box),txtW=par.txtWidth=='default'?68:par.txtWidth||68;//设置默认的文字宽度;
		txts.style.width=(n-1)*24+txtW+'px';nums.style.width=n*24+6+txtW+'px';
		pre.style.right=parseInt(nums.style.width)+26+'px';
		for(var i=0;i<n;i++){
			txt[i].style.left=i*24+'px';
			pic[i].style.left=par.width+'px';
		}
		//PLAY
		eval(this.switchMF(function(){
			txt[index].style.width=0+'px';
			num[index].className='';
			for(var i=0;i<n;i++) num[i].style.marginLeft=6+'px';
			nex.style.right=88+'px'
		},function(){
			pic[next].style.zIndex=1;
			myFocus.slide(pic[next],{left:0},30,'easeInOut',function(){this.style.zIndex='';if(prev!==next){pic[prev].style.left=par.width+'px';}}).slide(txt[next],{width:txtW},30,'easeInOut').slide(nex,{right:14},30,'easeInOut');
			if(next<n-1) myFocus.slide(num[next+1],{marginLeft:txtW+12},30,'easeInOut');
			num[next].className='current';
		}));
		eval(this.bind('num','"click"',par.delay));//让其只支持click点击
		eval(this.turn('pre','nex'));
	}
});
myFocus.setting.prototype.param('mF_rapoo',{//额外参数设置
	txtWidth:68//文字段宽度(像素)
});
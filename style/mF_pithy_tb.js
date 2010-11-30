myFocus.extend({//*********************pithy******************
	mF_pithy_tb:function(par){
		var box=this.$(par.id);
		this.addList(box,['thumb','txt','prev','next']);
		var pics=this.$c('pic',box),thus=this.$c('thumb',box),thu=this.$li('thumb',box),txt=this.$li('txt',box),pre=this.$c('prev',box),nex=this.$c('next',box),n=txt.length;
		pics.innerHTML+=pics.innerHTML;//无缝复制
		//CSS
		var pic=this.$li('pic',box),sw=par.width/4,sh=Math.floor(par.height/4);
		box.style.width=5*sw+4+'px';
		pics.style.height=2*par.height*n + 'px';
		thus.style.cssText='width:'+sw+'px;height:'+sh*n+'px;';
		for(var i=0;i<n;i++){
			thu[i].style.cssText='width:'+(sw-17)+'px;height:'+(sh-10)+'px';//减去总padding
			this.$$('span',thu[i])[0].style.cssText='width:'+(sw-7-1)+'px;height:'+(sh-2)+'px';//减去1px边框和pading
		}
		for(var i=0;i<2*n;i++) pic[i].style.height=par.height+'px';//消除间隙
		pre.style.right=sw+40+'px';nex.style.right=sw+16+'px';//相差nex的宽=24
		//PLAY
		eval(this.switchMF(function(){
			txt[index>=n?(index-n):index].style.display='none';
			thu[index>=n?(index-n):index].className = '';
			//if (index==2*n-1) { pics.style.top=-(n-1)*par.height+'px';index = n-1;}//无缝slide
		},function(){
			myFocus.slide(pics,{top:-par.height*next},40);
			txt[next>=n?(next-n):next].style.display='block';
			thu[next>=n?(next-n):next].className = 'current';
			eval(myFocus.scroll('thus','"top"','sh',4));
		},'par.less','"top"'));
		eval(this.bind('thu','"click"'));//让其只支持click点击
		eval(this.turn('pre','nex'));
	}
});
myFocus.setting.prototype.param('mF_pithy_tb',{less:true});
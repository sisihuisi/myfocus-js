myFocus.extend({//*********************mF_slide3D******************
	mF_slide3D:function(par){
		var box=this.$(par.id);
		this.addList(box,['mask11','mask12','mask21','mask22','num','next']);
		var pics=this.$c('pic',box),num=this.$li('num',box),m11=this.$c('mask11',box),m12=this.$c('mask12',box),m21=this.$c('mask21',box),m22=this.$c('mask22',box),nex=this.$c('next',box),n=num.length;
		pics.innerHTML+=pics.innerHTML;
		nex.innerHTML='NEXT';
		//PLAY
		var pic=this.$li('pic',box),d=Math.ceil(par.height/6);
		eval(this.switchMF(function(mf){
			m11.style.cssText=m12.style.cssText='border-width:0px '+par.width/2+'px;';
			m21.style.cssText=m22.style.cssText='border-width:'+d+'px 0px;';
			num[index].className='';
		},function(mf){
			pic[n].innerHTML=pic[prev].innerHTML;
			pic[n+1].innerHTML=pic[next].innerHTML;
			mf.$$('img',pic[n])[0].style.cssText='width:'+par.width+'px;height:'+par.height+'px';
			mf.$$('img',pic[n+1])[0].style.cssText='width:0px;height:'+par.height+'px';
			mf.slide(mf.$$('img',pic[n])[0],{width:0});
			mf.slide(mf.$$('img',pic[n+1])[0],{width:par.width});
			mf.slide(m11,{borderLeftWidth:0,borderRightWidth:0,borderTopWidth:d,borderBottomWidth:d});
			mf.slide(m12,{borderLeftWidth:0,borderRightWidth:0,borderTopWidth:d,borderBottomWidth:d});
			mf.slide(m21,{borderLeftWidth:par.width/2,borderRightWidth:par.width/2,borderTopWidth:0,borderBottomWidth:0});
			mf.slide(m22,{borderLeftWidth:par.width/2,borderRightWidth:par.width/2,borderTopWidth:0,borderBottomWidth:0});
			num[next].className='current';
		}));
		eval(this.bind('num','par.trigger',par.delay));
		eval(this.turn('nex','nex'));
	}
});
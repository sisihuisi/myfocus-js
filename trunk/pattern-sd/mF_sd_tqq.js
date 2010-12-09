myFocus.extend({//*********************tqq******************
	mF_sd_tqq:function(par){
		var box=this.$(par.id),msgs=this.$c('msgs',box),n=this.$$_('li',msgs).length;
		//PLAY
		eval(this.switchMF(function(mf){
			var last=mf.$$_('li',msgs)[n-1],lastH=last.offsetHeight;
			mf.slide(msgs,{marginTop:lastH},50,'easeOut',function(){
				msgs.insertBefore(last,msgs.firstChild);
				mf.opacity(last,0);
				msgs.style.marginTop=0+'px';
				mf.fadeIn(last);
			});
		}));
	}
});
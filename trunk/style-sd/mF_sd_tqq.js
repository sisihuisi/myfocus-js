myFocus.extend({//*********************tqq******************
	mF_sd_tqq:function(par){
		var box=this.$(par.id),msgs=this.$c('msgs',box),n=this.$$_('li',msgs).length;
		//PLAY
		eval(this.switchMF(function(){
			var last=myFocus.$$_('li',msgs)[n-1],lastH=last.offsetHeight;
			myFocus.slide(msgs,{marginTop:lastH},50,'easeOut',function(){
				msgs.insertBefore(last,msgs.firstChild);
				myFocus.opa(last,0);
				msgs.style.marginTop=0+'px';
				myFocus.fadeIn(last);
			});
		}));
	}
});
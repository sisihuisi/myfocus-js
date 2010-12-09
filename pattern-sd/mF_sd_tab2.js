myFocus.extend({//*********************tab2******************
	mF_sd_tab2:function(par){
		var box=this.$(par.id),dl=this.$$_('dl',box),dt=[],dd=this.$$_('dd',dl[0])[0],inlist=[];
		var n=dl.length,type=par.type||'slide';//运行时相关参数
		for(var i=0;i<n;i++){
			dt.push(this.$$_('dt',dl[i])[0]);
			inlist.push('<li class=in-li>'+this.$$_('dd',dl[i])[0].innerHTML+'</li>');
		}
		dd.innerHTML=inlist.join('');this.wrapIn(dd,'in-ul');
		//CSS
		var ul=this.$c('in-ul',box),li=this.$li('in-ul',box);
		var w=dd.offsetWidth+20,h=dd.offsetHeight,tH=dt[0].offsetHeight+1;//加边框大小(上和下各1px)
		box.style.cssText='width:'+w+'px;height:'+(h+tH)+'px;';
		ul.style.width=w*n+'px';
		for(var i=0;i<n;i++){
			this.$$_('dd',dl[i])[0].style.display='none';
			li[i].style.width=w+'px';
			if(type=='none') li[i].style.cssText='position:absolute;display:none;';
		}
		dd.style.display='block';
		//PLAY
		eval(this.switchMF(function(){
			dl[index].className='';
			if(type=='none') li[index].style.display='none';
		},function(){
			dl[next].className='current';
			if(type=='slide') myFocus.slide(ul,{left:-next*w},20,'easeInOut');
			if(type=='none') li[next].style.display='block';
		}));
		eval(this.bind('dt','par.trigger',par.delay));
	}
});
window.onload=function(){
     var menu = document.querySelectorAll('.down_context');
    for (var i = 0; i < menu.length; i++) {
    	var act = menu[i].className;
    	menu[i].onmouseover=function(){
    		move(this);
    	}
    	menu[i].onmouseout=function(){
    		move(this);
    	}
    };
    function move(obj){
    	var text = obj.getElementsByTagName('a')[0];
    	 if(obj.className.indexOf('active')<0){
    	 	obj.className = act.replace('down_context','down_context active');
    	 	text.style.color = 'white';
    	 }else{
    	 	obj.className = act.replace('down_context active','down_context');
    	 	text.style.color = 'rgb(248,183,1)';
    	 }
    }

}

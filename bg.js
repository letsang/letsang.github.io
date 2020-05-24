$(function() {
	$('body').on("keydown", function(e){
		var keycode = e.keyCode;
		switch(keycode) {
			case 39:
				$(this).css({'background':'url("https://vignette.wikia.nocookie.net/earthenring/images/5/56/Thar_Walk_Anim.gif/revision/latest/scale-to-width-down/340?cb=20070326214130")no-repeat center center fixed'}); 
				break;
			case 37:
				$(this).css({'background':'url("https://s7.gifyu.com/images/ezgif-3-2325131422af.gif")no-repeat center center fixed'});
				break;
		}
	});
});

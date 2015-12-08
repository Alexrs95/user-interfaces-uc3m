$(document).ready(function(){
	$('input.floatlabel').floatlabel();

	    $('#login').click(function() {
	    	var validPass = false;
            var validNIA = false;
        	nia = $("#NIA").val();
        	pass = $("#pass").val();
        	if (nia.length != 9) {
        		$("#NIA").css({'border-color': 'red'});
        		validNIA = false;
        	} else {
        		$("#NIA").css({'border-color': 'gray'});
        		validNIA = true;
        	}

        	if (pass.length == 0) {
        		$("#pass").css({'border-color': 'red'});
        		validPass = false;
        	} else {
        		$("#pass").css({'border-color': 'gray'});
        		validPass = true;
        	}

        	if (validPass && validNIA) {
       			window.open('index.html', '_self');
        	};
    });

});

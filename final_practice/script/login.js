$(document).ready(function(){
	$('input.floatlabel').floatlabel();

	    $('#login').click(function() {
	    	var valid = true;
        	nia = $("#NIA").val();
        	pass = $("#pass").val();
        	if (nia.length != 9) {
        		$("#NIA").css({'border-color': 'red'});
        		valid = false;
        	} else {
        		$("#NIA").css({'border-color': 'gray'});
        		valid = true;
        	}

        	if (pass.length == 0) {
        		$("#pass").css({'border-color': 'red'});
        		valid = false;
        	} else {
        		$("#pass").css({'border-color': 'gray'});
        		valid = true;
        	}

        	if (valid) {
       			window.open('index.html', '_self');
        	};
    });

});

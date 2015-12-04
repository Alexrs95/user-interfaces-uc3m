$(document).ready(function(){

    $('input.floatlabel').floatlabel();

    $('#card_form').hide();

    $('#credit_card').click(function() {
        $('#card_form').slideDown();
    });

    $('#paypal').click(function() {
        $('#card_form').slideUp();
    });

    $('#submit').click(function() {

        var isValid = true;

        name = $("#name").val();
        if(name.length > 0) {
            console.log("valid name");
            $("#name").css({'border-color': '#B0B5B8'});
        }else{
            isValid = false;
            $("#name").css({'border-color': 'red'});
        };

        surname = $('#surname').val();
        if(surname.length > 0) {
            console.log("valid surname");
            $("#surname").css({'border-color': '#B0B5B8'});
        }else{
            isValid = false;
            $("#surname").css({'border-color': 'red'});
        };

        mail = $('#email').val();
        if (mail.match('^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$')) {
            console.log("valid mail");
            $("#email").css({'border-color': '#B0B5B8'});
        }else {
            isValid = false;
            $("#email").css({'border-color': 'red'});
            $("label.mail-label").css({'color' : 'red'})
        };

        address = $('#address').val();
        if (address.length > 0) {
            console.log("valid address");
            $("#address").css({'border-color': '#B0B5B8'});

        }else {
            isValid = false;
            $("#address").css({'border-color': 'red'});
        };

        number = $('#tel').val();
        if (number.length == 9 && number.match('^[0-9]{9}')) {
            console.log("valid number");
            $("#tel").css({'border-color': '#B0B5B8'});
        }else {
            isValid = false;
            $("#tel").css({'border-color': 'red'});
            $("label.tel-label").css({'color' : 'red'})

        };

        username = $('#username').val();
        if (username.length > 0) {
            //Remaining fields mandatory
            pass = $('#pass').val();
            if (pass.match('^[0-9a-z]{1,8}')) {
                console.log("valid pass");
                $("#pass").css({'border-color': '#B0B5B8'});

            }else{
                isValid = false;
                $("#pass").css({'border-color': 'red'});
            };

            rep_pass = $('#rep_pass').val();
            if (rep_pass == pass) {
                console.log("valid rep pass");
                $("#rep_pass").css({'border-color': '#B0B5B8'});
            }else{
                isValid = false;
                $("#rep_pass").css({'border-color': 'red'});
                $("label.rep_pass-label").css({'color' : 'red'})
            };
        };

        var countChecked = function() {
            var n = $( "input[type=checkbox]:checked" ).length;
            if (n === 1) {
                isValid = true;
            } else {
                isValid = false;
            };
        };
       countChecked();
 
        $("input[type=checkbox]" ).on( "click", countChecked);

        radio = $("form input[type='radio']:checked").val();
        if (radio == "paypal" && isValid) {
            window.open('https://www.paypal.com/es/home', '_blank');
        } else if(radio == "card") {

            cardNum = $('#card_num').val();
            if (cardNum.length > 0 && cardNum.match('[0-9]{13,16}')) {
                console.log('card num valid');
                $("#card_num").css({'border-color': '#B0B5B8'});
            }else {
                isValid = false;
                $("#card_num").css({'border-color': 'red'});
                $("label.card_num-label").css({'color' : 'red'});
            };

            expDate = $('#exp_date').val();
            if (expDate.length > 0) {
                console.log('exp_date correct');
                $("#exp_date").css({'border-color': '#B0B5B8'});
            }else {
                isValid = false;
                $("#exp_date").css({'border-color': 'red'});
                $("label.exp_date-label").css({'color' : 'red'})
            };

            cvv = $('#cvv').val();
            if (cvv.length > 0) {
                console.log('cvv correct');
                $("#cvv").css({'border-color': '#B0B5B8'});
            }else {
                isValid = false;
                $("#cvv").css({'border-color': 'red'});
            };

            cardName = $('#card_name').val();
            if (cardName.length > 0) {
                console.log('card name valid');
                $("#card_name").css({'border-color': '#B0B5B8'});
            }else{
                isValid = false;
                $("#card_name").css({'border-color': 'red'});
            };

        } else {
            isValid = false;
        };

        if (isValid) {
            alert("Valid, and email will be sent to " + mail);
        }else {
            alert("Invalid");
        };

    });
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function(){
    readURL(this);
});

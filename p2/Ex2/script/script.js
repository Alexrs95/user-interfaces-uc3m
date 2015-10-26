$(document).ready(function(){
    $('#card_form').hide();

    $('#credit_card').click(function() {
        $('#card_form').show();
    });

    $('#paypal').click(function() {
        $('#card_form').hide();
    });


    $('#submit').click(function() {

        var isValid = true;

        name = $("#name").val();
        if(name.length > 0) {
            console.log("valid name");
        }else{
            isValid = false;
            $("#name").css({'border-color': 'red'});
            $("#label_name").css({'background': 'red'});

        };

        surname = $('#surname').val();
        if(surname.length > 0) {
            console.log("valid surname");
        }else{
            isValid = false;
            $("#surname").css({'border-color': 'red'});
            $("#label_surname").css({'background': 'red'});
        };

        mail = $('#email').val();
        if (mail.match('^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$')) {
            console.log("valid mail");
        }else {
            isValid = false;
            $("#email").css({'border-color': 'red'});
            $("#label_email").css({'background': 'red'});
        };

        address = $('#address').val();
        if (address.length > 0) {
            console.log("valid address");
        }else {
            isValid = false;
            $("#address").css({'border-color': 'red'});
            $("#label_address").css({'background': 'red'});
        };

        number = $('#tel').val();
        if (number.length == 9 && number.match('^[0-9]{9}')) {
            console.log("valid number");
        }else {
            isValid = false;
            $("#tel").css({'border-color': 'red'});
            $("#label_tel").css({'background': 'red'});
        };

        username = $('#username').val();
        if (username.length > 0) {
            //Remaining fields mandatory
            pass = $('#pass').val();
            if (pass.match('^[0-9a-z]{8}')) {
                console.log("valid pass");
            }else{
                isValid = false;
                $("#pass").css({'border-color': 'red'});
                $("#label_pass").css({'background': 'red'});
            };

            rep_pass = $('#rep_pass').val();
            if (rep_pass == pass) {
                console.log("valid rep pass");
            }else{
                isValid = false;
                $("#rep_pass").css({'border-color': 'red'});
                $("#label_rep_pass").css({'background': 'red'});
            };
        };

        radio = $("form input[type='radio']:checked").val();
        if (radio == "paypal" && isValid) {
            window.open('https://www.paypal.com/es/home', '_blank');
        } else if(radio == "card") {

            cardNum = $('#card_num').val();
            if (cardNum.length > 0) {
                console.log('card num valid');
            }else {
                isValid = false;
                $("#card_num").css({'border-color': 'red'});
                $("#label_card_num").css({'background': 'red'});
            };

            expDate = $('#exp_date').val();
            if (exp_date.length > 0) {
                console.log('exp_date correct');
            }else {
                isValid = false;
                $("#exp_date").css({'border-color': 'red'});
                $("#label_exp_date").css({'background': 'red'});
            };

            cvv = $('#cvv').val();
            if (cvv.length > 0) {
                console.log('cvv correct');
            }else {
                isValid = false;
                $("#cvv").css({'border-color': 'red'});
                $("#label_cvv").css({'background': 'red'});
            };

            cardName = $('#cardName').val();
            if (cardName.length > 0) {
                console.log('card name valid');
            }else{
                isValid = false;
                $("#cardName").css({'border-color': 'red'});
                $("#label_cardName").css({'background': 'red'});
            };

        } else {
            isValid = false;
        };

        if (isValid) {
            alert("Valid");
        }else {
            alert("Invalid");
        };

        // if ($('#submit_check').is(':checked')) {
        //     console.log('checked');
        // };
    });
});
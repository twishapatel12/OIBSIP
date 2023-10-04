$(document).ready(function(){

    $("#signin-link").click(function(){
        $("#register").removeClass("form-hide");
        $("#signin").addClass("form-hide");
    });

    $("#signup-link").click(function(){
        $("#signin").removeClass("form-hide");
        $("#register").addClass("form-hide");
    });

    $("#login-btn").click(function(){


        if(($("#username").val().length == 0) || ($("#pwd").val().length == 0)){
            $("#alert").removeClass("form-hide");
            //$("#alert").show();
            
        }
        else if(($("#username").val() == "twisha") && ($("#pwd").val() == "abc")){
            $("#success-link").removeClass("form-hide");
            $("#signin-link").addClass("form-hide");
            //$("#alert, #alert-1, #alert-2, #aler-3, #alert-4").hide();
        }
        else{
            $("#alert-2").removeClass("form-hide");
            //$("#alert-2").show();
            //$("#alert, #alert-1").hide();
        }
    });

    $("#register-btn").click(function(){
        if(($("#signup_username").val().length == 0) || ($("#password").val().length == 0)){
            $("#alert-3").removeClass("form-hide");
            //$("#alert-3").show();
        }
        else if(($("#password").val()) != ($("#confirmPassword").val())){
            $("#alert-4").removeClass("form-hide");
            //$("#alert-4").show();
        }
    });

    $("#success-btn").click(function(){
        $(".success").addClass("form-hide");
        $("#signin").removeClass("form-hide");
    });
});
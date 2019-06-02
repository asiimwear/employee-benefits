$(document).ready(function() {
    $(".sign-button").click( function(e) {
        e.preventDefault();
        $("#show-onclick,#show-onclick1,#show-onclick2,#show-onclick3,#show-onclick4,#show-onclick5").show();
    });
});

$(document).ready(function() {
     $(".login-button").click( function(e) {
        e.preventDefault();
        $("#show-onclick,#show-onclick2").show();
    });
});
$(document).ready(function() {
     $(".login-button").click( function(e) {
        e.preventDefault();
        $("show-onclick1,#show-onclick3,#show-onclick4,#show-onclick5").hide();
    });
});

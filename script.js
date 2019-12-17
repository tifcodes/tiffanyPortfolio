let app = {};

app.init = function() {
    $( ".cross" ).hide();
    $( ".menu" ).hide();

    $( ".hamburger" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
        $( ".hamburger" ).hide();
        $( ".cross" ).show();
        });
    });
    
    $( ".cross" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
        $( ".cross" ).hide();
        $( ".hamburger" ).show();
        });
    });

    $( ".hamburger" ).keypress(function() {
        $( ".menu" ).slideToggle( "slow", function() {
        $( ".hamburger" ).hide();
        $( ".cross" ).show();
        });
    });
    
    $( ".cross" ).keypress(function() {
        $( ".menu" ).slideToggle( "slow", function() {
        $( ".cross" ).hide();
        $( ".hamburger" ).show();
        });
    });
}

$(function() {
    app.init();
    AOS.init();
    $(function () {
        $('a').smoothScroll();
    });
});
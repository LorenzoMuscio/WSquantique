var timeout;
var timeoutQuantique;

$("#piratage_start").click(function() {
    clearTimeout(timeout);
    clearTimeout(timeoutQuantique);
    noQuantiqueBarWidth = 1;
    $("#no_quantique_span").hide();
    setBarWidth(noQuantiqueBarWidth);
    $("#quantique_span").hide();
    $("#quantique_bar").width("1%");
    $("#quantique_bar").html("1sec  /  978 685 475 années");
    timeQuantique(2);
});

function setBarWidth(value) {
    $("#no_quantique_bar").width(value+"%");
    $("#no_quantique_bar").html(value+"sec  /  100sec");
    if (value != 100) {
        timeout = setTimeout(() => {
            value++;
            setBarWidth(value);
        }, 1000);
    } else {
        $("#no_quantique_span").show();
    }
}

function timeQuantique(value) {
    timeoutQuantique = setTimeout(() => {
        $("#quantique_bar").html(value+"sec  /  978 685 475 années");
        value++;
        timeQuantique(value);
    }, 1000);
}

$(".glyphicon-chevron-down").click(function() {
    $("html, body").stop().animate( { scrollTop: $("#container_presentation").offset().top }, 1300);
});
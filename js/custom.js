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

$("#chevron_presentation").click(function() {
    $("html, body").stop().animate( { scrollTop: $("#container_presentation").offset().top }, 1300);
});

$("#chevron_introduction").click(function() {
    $("html, body").stop().animate( { scrollTop: $("#container_introduction").offset().top }, 1300);
});

$("#chevron_content").click(function() {
    $("html, body").stop().animate( { scrollTop: $("#container_content").offset().top }, 1300);
});

$("#schema_forward").click(function() {
    $("html, body").stop().animate( { scrollTop: $("#container_content").offset().top }, 1300);
});

$("#schema_backward").click(function() {
    $("html, body").stop().animate( { scrollTop: $("#container_content").offset().top }, 1300);
});
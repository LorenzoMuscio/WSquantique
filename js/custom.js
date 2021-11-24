var timeout;

$("#piratage_start").click(function() {
    clearTimeout(timeout);
    noQuantiqueBarWidth = 1;
    $("#no_quantique_span").hide();
    setBarWidth("no_quantique", noQuantiqueBarWidth, 70);
    quantiqueBarWidth = 1;
    $("#quantique_span").hide();
    setBarWidth("quantique", quantiqueBarWidth, 2000);
});

function setBarWidth(name, value, time) {
    $("#"+name+"_bar").width(value+"%");
    if (value != 100) {
        timeout = setTimeout(() => {
            value++;
            setBarWidth(name, value, time);
        }, time);
    } else {
        $("#"+name+"_span").show();
    }
}
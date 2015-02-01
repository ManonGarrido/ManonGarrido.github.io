var max = 255, min = 0;
var toto = 100, titi= 0;

$(document).ready(function(){
    var $mainImage = $("#main_img");
    var $title = $("body h1:nth-child(1)");
    var $imgRond = $(".item-img");
    var $menuA = $("nav a");
    var $siteCanvas = $("#site-canvas");


    $menuA.click(function(){
        toggleNav();
    });

    $(window).click(function(){
        $title.css("background-color", randomColor());
    });
    $imgRond.click(function(){
        $(this).css("border-radius", randomForm()+"%");
    });
    $('#nav-button').click(function(e) {
        toggleNav();
        e.preventDefault();
        return false;
    });

    $siteCanvas.click(function(){
        if ($('#site-wrapper').hasClass('show-nav')) {
            $('#site-wrapper').removeClass('show-nav');
        }
    });
});

/*function randomColor(){
    return "rgb("+ Math.floor(Math.random() * (max - min + 1) + min) +","+
    Math.floor(Math.random() * (max - min + 1) + min) +","+
    Math.floor(Math.random() * (max - min + 1) + min) +")";
}*/
function randomForm(){
    return Math.floor(Math.random() * (toto - titi + 1) + titi);

}

function toggleNav() {
    if ($('#site-wrapper').hasClass('show-nav')) {
        // Do things on Nav Close
        $('#site-wrapper').removeClass('show-nav');
    } else {
        // Do things on Nav Open
        $('#site-wrapper').addClass('show-nav');
    }

    //$('#site-wrapper').toggleClass('show-nav');
}

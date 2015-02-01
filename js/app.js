var max = 255, min = 0;
var toto = 100, titi= 0;
var $wrapper = $("#site-wrapper");
$(document).ready(function(){
    var $mainImage = $("#main_img");
    var $title = $("body h1:nth-child(1)");
    var $imgRond = $(".item-img");
    var $menuA = $("nav a");
    var $siteCanvas = $("#site-canvas");
    


    $menuA.click(function(){
        toggleNav();
    });

   // $(window).click(function(){
    //    $title.css("background-color", randomColor());
    //});
    $imgRond.click(function(){
        $(this).css("border-radius", randomForm()+"%");
    });
    $('#nav-button').click(function(e) {
        toggleNav();
        e.preventDefault();
        return false;
    });

    $siteCanvas.click(function(){
        if ($wrapper.hasClass('show-nav')) {
            $wrapper.removeClass('show-nav');
        }
    });
    window.onresize = resize;
});

function randomForm(){
    return Math.floor(Math.random() * (toto - titi + 1) + titi);

}

function toggleNav() {
    if ($wrapper.hasClass('show-nav')) {
        // Do things on Nav Close
        $wrapper.removeClass('show-nav');
    } else {
        // Do things on Nav Open
        $wrapper.addClass('show-nav');
    }

    //$('#site-wrapper').toggleClass('show-nav');
}

//Enleve le menu onresize
function resize() {
    if ($(window).width() > 800) {
        if ($wrapper.hasClass('show-nav')) {
            $wrapper.removeClass('show-nav');
        }
    }
}
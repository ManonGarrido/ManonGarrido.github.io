var $wrapper = $("#site-wrapper");
$(document).ready(function(){
    var $title = $("body h1:nth-child(1)");
    var $imgRond = $(".item-img");
    var $menuA = $("nav a");
    var $siteCanvas = $("#site-canvas");
    


    $menuA.click(function(){
        toggleNav();
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
        if ($wrapper.hasClass('show-nav')) {
            $wrapper.removeClass('show-nav');
        }
    });
    window.onresize = resize;
});

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
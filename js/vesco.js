//  ======= ANIMATION ======== //
$(function(){
    new WOW().init();
});


$(function(){
    $("#ourwork").magnificPopup({
        delegate : 'a',
        type : 'image',
        gallery:{
            enabled:true
        }
    });
})
// ======= CAREOSEL ======== //

$(function(){
    $('.team-slide').owlCarousel({
        items:3,
        autoplay:true,
        smartspeed:500,
        loop:true,
        autoplayHoverPause:true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:1,
            },
            320 : {
                items:1,
            },
            576 : {
                items:2,
            },
            768 :{
                items : 3,
            },
        }
    });
})


$(function(){
    $('.customer-slide').owlCarousel({
        items:1,
        autoplay:true,
        smartspeed:500,
        loop:true,
        autoplayHoverPause:true
    });
})


$(function(){
    $('.clients-list').owlCarousel({
        items:6,
        autoplay:true,
        smartspeed:500,
        loop:true,
        autoplayHoverPause:true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:2,
            },
            // breakpoint from 480 up
            480 : {
                items:3,
            },
            // breakpoint from 768 up
            768 : {
                items:4,
            },
            992 : {
                items:5,
            },
        }
    });
})

// ========= NAVBAR SCROLL EFFECT ========= //

$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 60){
            $("nav").addClass("bg-dark");
        }else
        {
            ($("nav").removeClass("bg-dark"))
        }
    })
})


$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// ======= SCROLL SPEED ========= //

$(function(){
    $("a.nav-link").click(function(event){
        event.preventDefault();

        var section = $(this).attr("href");

        $('html,body').animate({
            scrollTop:$(section).offset().top
        }, 900)
    })
})


$(function(){
    $("#footer-right>ul>li>a").click(function(event){
        event.preventDefault();

        var section = $(this).attr("href");

        $('html,body').animate({
            scrollTop:$(section).offset().top
        }, 900)
    })
})
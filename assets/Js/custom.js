const burgermenu = document.querySelector('.navbar-nav')
$('#menu').click (function(){
        this.classList.toggle("icon");
        burgermenu.classList.toggle("showMenu");
    }
) 


//Banner section
$('.hero-slider').owlCarousel({
    items:1,
    loop: true,
    margin:0,
    nav:false,
    dots:false,
    autoplayHoverPause:true,
    autoHeight:false,
    autoplay :true,
    autoplayTimeout :8000
});

// counter section
$('.count').counterUp({
    delay:20,
    time:2000
});

// expert section
$('.owl-two').owlCarousel({
    items: 2,
    margin: 30,
    loop: true,
    nav : true,
    dots: false,
    center : false,
    autoplayHoverPause:true,
    autoplay :true,
    autoplayTimeout :2000,
    // stagePadding : 80, // in px
    responsive:{
        0:{
            items:1,
            responsiveClass : true
        },
        600:{
            items:2,
        },
        1000:{
            items:2,
        }
    }
});
// testimonial section
$('.owl-three').owlCarousel({
    items: 2,
    margin: 30,
    loop: true,
    nav : false,
    dots: true,
    center : false,
    autoplayHoverPause:true,
    autoplay :true,
    autoplayTimeout :2000,
    // stagePadding : 80, // in px
    responsive:{
        0:{
            items:1,
            responsiveClass : true
        },
        600:{
            items:1,
        },
        1000:{
            items:2,
        }
    }
});
// Latest News section
$('.owl-forth').owlCarousel({
    items: 3,
    margin: 30,
    loop: true,
    autoplayHoverPause:true,
    nav : false,
    dots: true,
    center : false,
    autoplay :true,
    autoplayTimeout :2000,
    // stagePadding : 80, // in px
    responsive:{
        0:{
            items:1,
            responsiveClass : true
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});
// our partner section
$('.owl-fifth').owlCarousel({
    items: 3,
    margin: 30,
    loop: true,
    autoplayHoverPause:true,
    nav : false,
    dots: false,
    center : false,
    autoplay :true,
    autoplayTimeout :2000,
    // stagePadding : 80, // in px
    responsive:{
        0:{
            items:1,
            responsiveClass : true
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});

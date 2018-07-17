$(document).ready(function(){
    $(".skill").each(function(){
        $(this).find('.skill-bar').css(
            "width", $(this).attr('data-skill') + '%'
        );
    });


    window.sr = ScrollReveal({
        reset: false
    });
    var fadeUp = {
        distance: '20px',
        origin: 'bottom',
        opacity: 0,
        scale: 1,
        viewFactor: 0.2,
        easing: 'cubic-bezier(0,.5,.5,1)',
        afterReveal: function(domEl){
            $(domEl).addClass("animate");
        }
    }
    sr.reveal('.nav a', {
        distance: '20px',
        origin: 'top',
        opacity: 0,
        scale: 1,
        viewFactor: 0.2,
        easing: 'cubic-bezier(0,.5,.5,1)',
        delay: 200,
    }, 200);
    sr.reveal('.headshot',{
        distance: '60px',
        origin: 'top',
        opacity: 0,
        scale: 1,
        viewFactor: 0.2,
        easing: 'cubic-bezier(0,.5,.5,1)',
        delay: 1000,
    })
    sr.reveal('.section-number', fadeUp);
    sr.reveal('.lead-paragraph', {
        distance: '5px',
        opacity: 0,
        scale: 1,
        easing: 'ease-out',
        delay: 200,
        duration: 2000
    });
    sr.reveal('.em', {
        opacity: 1,
        scale: 1,
        afterReveal: function(domEl){
            $(domEl).addClass("animate");
        }
    });

    sr.reveal('.timeline-item', {
        distance: '0px',
        opacity: 1,
        scale: 1,
        afterReveal: function(domEl){
            $(domEl).addClass("animate");
        }
    }, 700);
    var skillVal = fadeUp;
    sr.reveal('.skill-col h3', fadeUp, 200);
    sr.reveal('.skill-col .skill', {
        distance: '0px',
        scale: 1,
        easing: 'cubic-bezier(0,.5,.5,1)',
        afterReveal: function(domEl){
            $(domEl).addClass("animate");
        }
    }, 100);
    sr.reveal('.animate-all *', fadeUp, 300);
    fadeUp.delay = 200;
    sr.reveal('h1', fadeUp);
    sr.reveal('h2', fadeUp);

});
//
// function srClass(sr, val){
//     sr.push
// }

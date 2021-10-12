$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$( function (){
    $(".conteudo-oculto").click( function(){
        $(".conteudo-oculto div, .conteudo-oculto span").toggle();
        
        if( !$(".conteudo-oculto").hasClass('blue') )
        $(".conteudo-oculto").addClass('blue');
        
        else
         $(".conteudo-oculto").removeClass('blue');
        
    });
});
// carousel responsive

const responsive={
    0:{
    items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}
// carousel responsive end

//nav 
$(document).ready(function(){
   
    $nav= $('.nav');
    $toggleCollapse= $('.toggle-collapse');
    
    $toggleCollapse.click(function (){
        $nav.toggleClass('collapse');
    })
//nav end


//carousel 
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navagation .owl-nav-prev'),$('.owl-navagation .owl-nav-next')],
        responsive:responsive
    
    
    
        
      
    });

    //carousel end 

    //scroll
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
            
        },2000)
       
    })
    //scroll end

    //Animation

    AOS.init();

    //Animation end
});











const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



function loading_animation(){
    gsap.from("#page1 h1",{
        y : 100 ,
        opacity : 0 ,
        delay : 0.3 ,
        duration : 0.8 ,
        stagger : 0.2
    
    })
    gsap.from("#page1 #video-container",{
        y : 100 ,
        opacity : 0 ,
        delay : 0.6 ,
        duration : 0.8 , 
    })
    gsap.from("#page1 p",{
        y : 100 ,
        opacity : 0 ,
        delay : 0.3 ,
        duration : 0.8 ,
        stagger : 0.2
    })
    gsap.from("#page1 h2",{
        y : 100 ,
        opacity : 0 ,
        delay : 0.3 ,
        duration : 0.8 ,
        stagger : 0.2
    })

}
loading_animation()


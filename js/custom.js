$(function(){
  $('html').smoothScroll(300);
  $(window).on('scroll',function(){
    var windowTop=$(window).scrollTop();
    if(windowTop>=100){
      $('header').addClass('active');
    }else{
      $('header').removeClass('active');
    }
  })

  // skill swiper style
     var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
       pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
    });

    //  portfolio  swiper section
    var swiper = new Swiper('.swiper-container2', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination2',
      },
    });
  
})
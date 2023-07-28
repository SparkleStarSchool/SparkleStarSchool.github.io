$(document).ready( function() {
    
    $('#course-btn').on('click',()=>{
      window.location.href='./courses.html'
    })
    $('#schedule-btn').on('click',()=>{
      window.location.href='./schedule.html'
    })
    // slick-carousel
    $('#main-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        arrows: true,
        // adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              // adaptiveHeight: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
              // adaptiveHeight: true
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              // adaptiveHeight: true
            }
          }
        ]
      });

    $('.course-card').each(function(){
      $(this).on('click', ()=>{
        let temp = 'http://'+window.location.host+'/courses.html'
        const url = new URL(temp) 
        url.searchParams.append('subject', $(this).data('value'));
        // console.log(url.href)
        window.location.href= url.href
      })
    })
});
$(document).ready( function() {
    $('#course1').on('click',()=>{
        let path = "assets/images/StoryOfChinese.jpeg"
        appendImage(path)
    })
    $('#course2').on('click',()=>{
        let path = "assets/images/Math.jpeg"
        appendImage(path)
    })
    $('#course3').on('click',()=>{
        let path = "assets/images/SaveSoil.jpeg"
        appendImage(path)
    })
    $('#course4').on('click',()=>{
        let path = "assets/images/French.jpeg"
        appendImage(path)
    })
    $(".navbar-nav li a").on('click', ()=>{
        $('#navbarSupportedContent').removeClass('show')
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
});

const appendImage = (path)=>{
    $img = $(`<img style='width:100%' src=${path}>`)
    $('#lightbox').find('.modal-body').empty()
    $('#lightbox').find('.modal-body').append($img)
    $('#lightbox').modal('show')
} 
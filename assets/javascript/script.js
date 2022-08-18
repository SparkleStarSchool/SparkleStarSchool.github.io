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
});

const appendImage = (path)=>{
    $img = $(`<img style='width:100%' src=${path}>`)
    $('#lightbox').find('.modal-body').empty()
    $('#lightbox').find('.modal-body').append($img)
    $('#lightbox').modal('show')
} 
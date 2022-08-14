$(document).ready( function() {
    $('#course1').on('click',()=>{
        $img = $(`<img style='width:100%' src="assets/images/StoryOfChinese.jpeg"> `)
        $('#lightbox').find('.modal-body').append($img)
        $('#lightbox').modal('show')
    })
    $('#course2').on('click',()=>{
        $img = $(`<img style='width:100%' src="assets/images/Math.jpeg"> `)
        $('#lightbox').find('.modal-body').append($img)
        $('#lightbox').modal('show')
    })
    $('#course3').on('click',()=>{
        $img = $(`<img style='width:100%' src="assets/images/SaveSoil.jpeg"> `)
        $('#lightbox').find('.modal-body').append($img)
        $('#lightbox').modal('show')
    })
    $('#course4').on('click',()=>{
        $img = $(`<img style='width:100%' src="assets/images/French.jpeg"> `)
        $('#lightbox').find('.modal-body').append($img)
        $('#lightbox').modal('show')
    })
    
});
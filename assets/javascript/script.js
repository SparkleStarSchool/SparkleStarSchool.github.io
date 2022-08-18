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
    $('#lightbox').find('.book-course').on('click',()=>{
        mailTo()
    })
});

const appendImage = (path)=>{
    $img = $(`<img style='width:100%' src=${path}>`)
    $('#lightbox').find('.modal-body').empty()
    $('#lightbox').find('.modal-body').append($img)
    $('#lightbox').modal('show')
} 

const mailTo = ()=>{
    // who=prompt("Enter recipient's email address: ","antispammer@earthling.net");
    who = "aurorawangca@gmail.com"
    what= "test"
    parent.location.href='mailto:'+who+'?subject='+what+'';
    // if (confirm("Are you sure you want to mail "+who+" with the subject of "+what+"?")==true){
    // parent.location.href='mailto:'+who+'?subject='+what+'';
    //   }
}
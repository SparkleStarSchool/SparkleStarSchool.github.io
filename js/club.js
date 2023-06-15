$(document).ready(() => {
    // get club infor from db
    db.ref("teaching").get().then((snapshot) => {
        if (snapshot.val() != null) {
            console.log(Object.values(snapshot.val()))
            for (let [key, course] of Object.entries(snapshot.val())) {
                let url = course.postImageUrls[0]
                // get grade from course
                db.ref("course").child(course.courseID).get().then((snapshot) => {
                    let subjectID = snapshot.val().subjectID
                    db.ref('subject').child(subjectID).get().then((snapshot)=>{
                        let subjectName = snapshot.val().name
                        if (subjectName == 'Club'){
                            appendCourse(url)
                        }
                    })
                })
            }
        }
    })
})

const appendCourse = (url)=>{
    let $course = $(`
        <div class="col-6 col-md-3">
            <img src=${url} alt="Image for">
        </div>
    `)
    
    $course.on('click', ()=>{
        $detail = $(`
                <div>
                    <img style='width:100%' src=${url}>
                </div>`)
        $('#lightbox').find('.modal-body').empty()
        $('#lightbox').find('.modal-body').append($detail)
        $('#lightbox').modal('show')
    })

    $('.courses').append($course)
}

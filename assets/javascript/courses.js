$(document).ready(() => {
    let courseInfor = []
    db.ref("subject").get().then((snapshot) => {
        if (snapshot.val() != null) {
            for (let [key, value] of Object.entries(snapshot.val())) {
                let $option = $(`<option value=${key}>${value.name}</option>`)
                $('.categary select').append($option)
            }
            $('.categary select').on('change', (e)=>{
                console.log(e.target.value)
                let subjectID = e.target.value
                // filter subject
                console.log(courseInfor)
                console.log(subjectID)
                if(!subjectID){
                    // select nothing, append all courses
                    courseInfor.forEach((course)=>{
                        appendCourse(course)
                    })
                }else{
                    let courseResult = courseInfor.filter(course=> course.subjectID == subjectID)
                    $('.courses').empty()
                    if(courseResult.length){
                        console.log('aaaa')
                        // append the result to DOM
                        courseResult.forEach((course)=>{
                            appendCourse(course)
                        })
                    }
                }
            })
        }
    })
    // get course infor from db
    db.ref("teaching").get().then((snapshot) => {
        if (snapshot.val() != null) {
            console.log(Object.values(snapshot.val()))
            // let data = Object.values(snapshot.val())
            for (let [key, course] of Object.entries(snapshot.val())) {
                let tempData = {}
                tempData['key'] = key
                tempData['name'] = course.name
                tempData['outline'] = course.outline
                tempData['postImageUrls'] = course.postImageUrls[0]
                tempData['courseTime'] = course.courseTime
                // get grade from course
                db.ref("course").child(course.courseID).get().then((snapshot) => {
                    tempData['grade'] = snapshot.val().grade.join(',')
                    let subjectID = snapshot.val().subjectID

                    tempData['subjectID'] = subjectID

                    // get teacher name from teacher
                    db.ref('teacher').child(course.teacherID).get().then((snapshot) => {
                        tempData['teacher'] = snapshot.val().name

                        courseInfor.push(tempData)

                        // append on DOM
                        appendCourse(tempData)
                    })
                })
            }
        }
    })
})

const appendCourse = (course)=>{
    let $course = $(`
        <div class="col-6 col-md-3">
            <img id=${course.key} src=${course.postImageUrls} alt="Image for">
        </div>
    `)
    
    $course.on('click', ()=>{
        let dayTable = { 'Monday': '星期一', 'Tuesday': '星期二', 'Wednesday': '星期三', 'Thursday': '星期四', 'Friday': '星期五', 'Saturday': '星期六', 'Sunday': '星期日' }
        $detail = $(`
                <div>
                    <h3><span>课程名称：</span> ${course.name}</h3>
                    <h3><span>授课教师：</span> ${course.teacher}</h3>
                    <h3><span>适用年级：</span> ${course.grade}</h3>
                    <h3><span>上课时间：</span></h3>
                    <div>
                    </div>
                    <h3><span>课程简介：</span></h3>
                    <h3 style="word-wrap: break-word;">${course.outline}</h3>
                    <img style='width:100%' src=${course.postImageUrls}>
                </div>`)
        if(course.courseTime.length==1){
            let courseTime = course.courseTime[0]
            let tempTime = dayTable[courseTime.day]+' '+courseTime.startTime+' - '+courseTime.endTime
            $($detail.find('h3')[3]).html(`<h3><span>上课时间：</span>${tempTime}</h3>`)
        }else{
            course.courseTime.forEach(courseTime=>{
                let $courseTime = $(`<h3>${dayTable[courseTime.day]+' '+courseTime.startTime+' - '+courseTime.endTime}</h3>`)
                console.log(dayTable[courseTime.day]+' '+courseTime.startTime+' - '+courseTime.endTime)
                $detail.find('div').append($courseTime)
            })
        }
        $detail.find('span').each(function() {
            $(this).css({
                'color': 'rgb(255, 132, 0)'
            });
        });
        $('#lightbox').find('.modal-body').empty()
        $('#lightbox').find('.modal-body').append($detail)
        $('#lightbox').modal('show')
    })

    $('.courses').append($course)
}

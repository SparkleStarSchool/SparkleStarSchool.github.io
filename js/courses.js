import timeFormat from "./module/timeFormat.js"
$(document).ready(() => {
    let courseInfor = []
    // get parameter from url
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const subjectName = urlParams.get('subject')
    console.log(subjectName)
    db.ref("subject").get().then((snapshot) => {
        if (snapshot.val() != null) {
            for (let [key, value] of Object.entries(snapshot.val())) {

                    let $option = $(`<option value=${key}>${value.name}</option>`)
                    $('.categary select').append($option)

                    // select subject from index page
                    if(subjectName==value.name){
                        $option.attr('selected','selected');
                    }
            }
            $('.categary select').on('change', (e)=>{
                console.log(e.target.value)
                let subjectID = e.target.value
                // filter subject
                console.log(courseInfor)
                console.log(subjectID)
                if(!subjectID){
                    $('.courses').empty()
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
                    db.ref('subject').child(subjectID).get().then((snapshot)=>{
                        tempData['subjectName']=snapshot.val().name
                        // get teacher name from teacher
                        db.ref('teacher').child(course.teacherID).get().then((snapshot) => {
                            tempData['teacher'] = snapshot.val().name

                            courseInfor.push(tempData)

                            // append on DOM
                            if(subjectName){
                                //filter from index page
                                if(tempData.subjectName == subjectName){
                                    appendCourse(tempData)
                                }
                            }else{
                                appendCourse(tempData)
                            }
                        })
                    })
                })
            }
        }
    })


    const appendCourse = (course)=>{
        let $course = $(`
            <div class="col-6 col-md-3">
                <img id=${course.key} src=${course.postImageUrls} alt="Image for">
            </div>
        `)
        
        $course.on('click', ()=>{
            let dayTable = { 'Monday': '星期一', 'Tuesday': '星期二', 'Wednesday': '星期三', 'Thursday': '星期四', 'Friday': '星期五', 'Saturday': '星期六', 'Sunday': '星期日' }
            
            let $detail = $(`
                    <div>
                        <h5><span>课程名称：</span> ${course.name}</h5>
                        <h5><span>授课教师：</span> ${course.teacher}</h5>
                        <h5><span>适用年级：</span> ${course.grade}</h5>
                        <h5><span>上课时间：</span></h5>
                        <div>
                        </div>
                        <h5><span>课程简介：</span></h5>
                        <h5 style="word-wrap: break-word;">${course.outline}</h5>
                        <img style='width:100%' src=${course.postImageUrls}>
                    </div>`)
            
            if(course.courseTime.length==1){
                let courseTime = course.courseTime[0]
                let startTime = timeFormat(courseTime.startTime)
                let endTime = timeFormat(courseTime.endTime)
                let tempTime = dayTable[courseTime.day]+' '+startTime+' - '+endTime
                console.log(tempTime)
                $($detail.find('h5')[3]).html(`<h5><span>上课时间(BC时间):</span>${tempTime}</h5>`)
            }else{
                course.courseTime.forEach(courseTime=>{
                    let startTime = timeFormat(courseTime.startTime)
                    let endTime = timeFormat(courseTime.endTime)
                    let $courseTime = $(`<h5>${dayTable[courseTime.day]+' '+startTime+' - '+endTime}</h5>`)
                    // console.log(dayTable[courseTime.day]+' '+courseTime.startTime+' - '+courseTime.endTime)
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
})




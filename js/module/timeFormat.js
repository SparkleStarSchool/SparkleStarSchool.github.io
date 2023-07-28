const timeFormat = (courseTime)=>{
    let hour  = parseInt(courseTime.split(':')[0])
    if(hour>12){
        return (hour-12).toString()+':'+courseTime.split(':')[1] +'pm'
    }else{
        return courseTime+'am' 
    }
}

export default timeFormat
const course={
    coursename:"SpringBoot",
    price:999,
    courseInstructor:"Naveen"
}
console.log(course.courseInstructor)

const {courseInstructor}=course // used to extract value from  Object
console.log(courseInstructor)
const {courseInstructor: aliene}=course // we can give a pickname and we can use that word
console.log(aliene)

const navbar=({company})=> // props.company|->> destructuring object
{

}
navbar(company="ABC")
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('fake_data.json')
            .then(res => res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div>
               <h3 className="text-6xl text-center mt-5">courses:- {courses.length}</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 w-9/12 mx-auto mt-5 justify-center gap-6 items-center">
            {
                courses.map(course=><Course key={course.id} course={course}></Course>)
            }
            
        </div>
         </div>
    );
};

export default Courses;
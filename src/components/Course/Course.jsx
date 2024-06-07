

const Course = ({ course }) => {
    const { credit_hours,cover_photo,price, heading ,paragraph,select_button} = course;
    return (
        <div className="border rounded p-5">
            <img className="w-full" src={cover_photo} alt="" />
            <h3 className="text-2xl font-bold my-2">{heading}</h3>
            <p>{paragraph}</p>
            <div className="grid grid-cols-2 mt-3">
                <p className="">price: {price}</p>
                <p>credit_hours: {credit_hours }</p>
            </div>
            <button className="bg-green-400 w-full rounded mt-2 font-bold">{ select_button }</button>
            
        </div>
    );
};

Course.propTypes = {
    // eslint-disable-next-line no-undef
    course: PropTypes.object
}

export default Course;
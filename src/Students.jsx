import PropTypes from 'prop-types'

function Students(props){
    return(
        <div className="student">
            <h2>Student Id Card</h2>
            <p>Name: {props.name}</p>
            <p>Div : {props.div}</p>
            <p>Roll Number: {props.rollnumber}</p>
            <p>Student : {props.isStudent ? "yes" : "No"}</p>
        </div>
    );
}


Students.propTypes = {
    name : PropTypes.string,
    div : PropTypes.string,
    rollnumber: PropTypes.number,
    isStudent: PropTypes.bool
}

Students.defaultProps = {
    name : "Guest",
    div : "Unknown",
    rollnumber : 0,
    isStudent : false
}

export default Students

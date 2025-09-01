import StudentRow from './StudentRow'

const StudentList = ({ studentdetail }) => {
    return (
        <>
            {studentdetail.map((detail) =>
            (
                <StudentRow
                    key={detail.name}
                    stuName={detail.name}
                    stuPost={detail.post}> 
                </StudentRow>
            )
            )}
        </>
    )
}

export default StudentList
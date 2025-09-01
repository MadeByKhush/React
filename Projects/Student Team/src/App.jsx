import Heading from "./components/Heading"
import StudentList from "./components/StudentList";

const App = () => {

  const students = [
    { name: "Khush Sharma", post: "React JS" },
    { name: "Aman Gupta", post: "Node JS" },
    { name: "Neha Verma", post: "UI/UX Design" },
    { name: "Ravi Kumar", post: "Data Structures" },
    { name: "Priya Singh", post: "Database Management" }
  ];


  return (
    <div>
      <Heading></Heading>
      <StudentList studentdetail = {students}></StudentList>
    </div>
  )
}

export default App
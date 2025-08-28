import Heading from "./components/heading";
import Addtodo from "./components/Addtodo";
import Todolist from "./components/Todolist";


function App() {
  return <>
    <center className="flex items-center justify-center">
      <div className="w-[36rem] flex flex-col gap-5  rounded-2xl p-8">

      <Heading></Heading>
      <Addtodo></Addtodo>
      <Todolist></Todolist>
      <Todolist></Todolist>
      </div>
    </center>
  </>
}

export default App;
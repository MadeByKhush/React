import Heading from "./components/heading";
import Addtodo from "./components/Addtodo";
import TodoItemList from "./components/TodoItemList";

function App() {
  const todoItemsList = [
    {
      name: "Buy Milk",  dueDate: "04/10/2023",
    },
    {
      name: "Go to College", dueDate: "04/10/2023",
    },
    {
      name: "Complete React Assignment", dueDate: "05/10/2023",
    },
    {
      name: "Team Meeting with Project Manager", dueDate: "05/10/2023",
    },
    {
      name: "Call the Electrician", dueDate: "06/10/2023",
    },
    {
      name: "Pay Internet Bill", dueDate: "06/10/2023",
    },
    {
      name: "Buy Groceries", dueDate: "07/10/2023",
    },
    {
      name: "Workout at Gym", dueDate: "07/10/2023",
    }
  ];


  return <>
    <center className="flex items-center justify-center">
      <div className="w-[36rem] flex flex-col gap-5  rounded-2xl p-8">

        <Heading></Heading>
        <Addtodo></Addtodo>
        <TodoItemList todoItems={todoItemsList}></TodoItemList>
      </div>
    </center>
  </>
}

export default App;
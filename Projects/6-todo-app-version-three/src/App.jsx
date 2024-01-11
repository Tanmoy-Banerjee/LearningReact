import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/23",
    },

    {
      name: "Go to College",
      dueDate: "4/10/23",
    },
  ];

  
  const [todoItems, setTodoItems] = useState(initialTodoItems);

   const handleNewItem = (itemName, itemDueDate) =>{
     console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
   };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem = {handleNewItem}/>
      <TodoItems todoItems={todoItems}> </TodoItems>
    </center>
  );
}

export default App;

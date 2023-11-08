import './App.css';
import { useState } from "react";
import { Task } from './Task';

function App () {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const handleTimeChange = (event) => {
    setDueDate(event.target.value);
  };

  const addTodo = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      dueDate: dueDate,
      isCompleted: false,

    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);

  };
  
  const completeTodo = (id) => {
    setTodoList(todoList.map((task) => {
      if (task.id === id) {
        return{...task,isCompleted:true}
      } else {
        return task
      }
    }))
  }
  const deleteTodo = (id) => {
    setTodoList(todoList.filter(task => task.id !== id));

  };

  return (
    <div className="App">
      <div>
        <input type="text" onChange={handleChange} />
        <input type="date" onChange={handleTimeChange} />
        <button onClick={addTodo}>Add</button>
      </div>
      <div>
        {todoList.map((task, key) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              dueDate={task.dueDate}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
            />
          );
        })}

      </div>

    </div>
  );
}

export default App;

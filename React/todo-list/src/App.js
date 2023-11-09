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
      buttonText: 'Complete',
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);

  };

  const completeTodo = (id) => {
    setTodoList(todoList.map((task) => {
      if (task.id === id) {
        const isCompleted = !task.isCompleted;
        // console.log("Task marked as completed:", isCompleted);
        return { ...task, isCompleted, buttonText: isCompleted ? 'Completed' : 'Complete' };
      
      } else {
        return task;
      }
    }));
  };

  

  const deleteTodo = (id) => {
    setTodoList(todoList.filter(task => task.id !== id));

  };

  return (
    <div className="App">
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mx-auto mt-8 p-4 bg-gray-200 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-2 mb-4">
          <input
            type="text"
            placeholder="Add a new task..."
            className="p-2 flex-grow sm:border sm:border-gray-400 rounded-l h-auto"
            onChange={handleChange}
          />
          <input
            type="date"
            className="p-2 sm:border sm:border-gray-400 rounded-r h-auto"
            onChange={handleTimeChange}
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded h-auto mt-2 sm:mt-0"
          >
            Add
          </button>
        </div>

        <div>
          {todoList.map((task) => (
            <Task
              taskName={task.taskName}
              id={task.id}
              dueDate={task.dueDate}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
              buttonText={task.buttonText}
              isCompleted={task.isCompleted}
              key={task.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

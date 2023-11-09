export const Task = (props) => {
  const handleCompleteClick = () => {
    // console.log("Complete button clicked");
    // console.log(props.isCompleted)
    props.completeTodo(props.id);

  };

return (
  <div className="bg-white p-4 mb-2 shadow-md flex flex-col sm:flex-row justify-between items-center">
    <div className="flex-grow sm:flex-grow-0">
      <p className={`text-lg ${props.isCompleted ? 'line-through text-gray-500' : 'text-black'}`}>
        {props.taskName}
      </p>
      <p className="text-sm text-gray-500">{props.dueDate}</p>
    </div>
    <div className="mt-2 sm:mt-0">
      <button
        onClick={handleCompleteClick}
        className={`px-4 py-2 ${props.isCompleted ? 'bg-green-400' : 'bg-blue-500'} text-white rounded`}
      >
        {props.buttonText}
      </button>
      <button
        onClick={() => props.deleteTodo(props.id)}
        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded ml-2"
      >
        X
      </button>
    </div>
  </div>
);
};


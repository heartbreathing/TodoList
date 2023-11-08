export const Task = (props) => {
  return (
    <div >
      <p>{props.taskName}</p>
      <p>{props.dueDate}</p>
      <button onClick={() => { props.completeTodo(props.id); }}>Complete</button>
      <button onClick={() => { props.deleteTodo(props.id); }}>X</button>
    </div>
  )
}


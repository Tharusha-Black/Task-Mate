import "./TaskCard.css"
export const TaskCard = ({ task, handleDelete, info }) => {
  return (
    <div className="taskcard">
    <li className={` ${task.completed ? "completed" : "incomplete"}`}>
      <span>{task.id} - {task.name}</span>
      {task.completed ? <span >completed</span> : <span>Incomplete</span>}
      <button onClick={() => handleDelete(task.id)} className="delete">Delete</button>
    </li>
    </div>
  )
}

import { useState, useRef } from "react";
import "./AddTask.css";

export const AddTask = ({tasks,setTasks}) => {
  const [taskValue , setTaskValue] =useState("");
  const [progValue, setProgValue] = useState(false);

  const handleChange = (event) => {
    setTaskValue(event.target.value);
}

  const handleReset = ()=>{
    setTaskValue("");
    setProgValue(false);
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    const task = {
      id: Math.floor(Math.random ()* 10000),
      name: taskValue,
      completed: Boolean(progValue)
    }
    setTasks([...tasks, task]);
    handleReset();
  }

  return (
    <section className="addtask">
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={taskValue} type="text" name="task" id="task" placeholder="Task Name" autoComplete="off" />
            <select onChange={(e)=> setProgValue(e.target.value)} value={progValue}>
              <option value="false">Pending</option>
              <option value="true">Completed</option>
            </select>
            <button type="submit">Add Task</button>
            <span onClick={handleReset} className="reset"> Reset</span>
        </form>
        <p>{taskValue}</p>
    </section>
  )
}
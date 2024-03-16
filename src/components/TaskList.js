import { TaskCard } from "./TaskCard";
import { useState } from "react";
import { BoxCard } from "./BoxCard";
import "./TaskList.css";
export const TaskList = ({ tasks, setTasks }) => {
    const [show, setShow] = useState(true);
    const styles = {
        fontWeight: show ? "" : "lighter"
    }

    function handleDelete(id) {
        setTasks(tasks.filter(task => id !== task.id));
    }
    return (
        <div>
            <section className='tasklist'>
                <ul>
                    <div className='header'>
                        <h1 style={styles}>TaskList</h1>
                        <button className='trigger' onClick={() => setShow(!show)}>{show ? "Hide Tasks" : "Show Tasks"}</button>
                    </div>
                    {show && tasks.map((task) => (
                        <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
                    ))}
                </ul>
            </section>
            <BoxCard result="success">
                <p className="title">Statement success</p>
                <p className="description">Lorem, ipsum dolor sit amet consectetur.</p>
            </BoxCard>

            <BoxCard result="warning">
                <p className="title">Statement warning</p>
                <p className="description">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cupiditate, voluptatem, culpa labore ipsum tempore ullam unde distinctio voluptatibus aliquid voluptate totam cum quisquam quas tempora eius molestias impedit! Molestias suscipit illo sequi iste, voluptates tenetur, odit earum cupiditate laudantium, quidem exercitationem. Est id architecto eveniet debitis! Facilis, ipsum quia.lorem6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam officia nesciunt sunt numquam illo veritatis mollitia vel consequuntur distinctio cupiditate.</p>
            </BoxCard>
            <BoxCard result="alert">
                <p className="title">Statement alert</p>
                <p className="description">Lorem ipsum dolor laudantium, quidem exercitationem. Est id architecto eveniet debitis! Facilis, ipsum quia.lorem6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam officia nesciunt sunt numquam illo veritatis mollitia vel consequuntur distinctio cupiditate.</p>
            </BoxCard>
        </div>
    )
}

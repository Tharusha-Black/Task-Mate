import "./Counter.css"
import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    function handleAdd() {
        setCount(count => count + 1);
    }
    function handleSub() {
        setCount(count => count - 1);
    }
    function handleReset() {
        setCount(count => 0);
    }

    return (
        <div className="counter">
            <p>{count}</p>
            <div>
                <button onClick={handleAdd} className="add">ADD</button>
                <button onClick={handleSub} className="sub">SUB</button>
                <button onClick={handleReset} className="reset">Reset</button>
            </div>
        </div>
    )
}

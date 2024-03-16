import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { TaskList } from "./components/TaskList";
import { Counter } from "./components/Counter";
import { AddTask } from "./components/AddTask";
import { useState } from "react";
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([]);
  
  return (
    <>
    <Header />
    <main>
    <AddTask tasks={tasks} setTasks={setTasks}/>
    <TaskList tasks={tasks} setTasks={setTasks}/>
    <Counter/> 
    </main>
    <Footer />
    </>
  );
}
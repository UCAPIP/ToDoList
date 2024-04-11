import { useState } from "react"
import InputTask from "./task/InputTask"

export default function Day(props){

    const [tasks, setTasks] = useState([])

    function handleAddTask(){
        const newTaskId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1
        setTasks(prevTasks => [...prevTasks, {id: newTaskId}])
    }

    function handleDelTask(id){
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
    }

    function handleComplitTask(id){
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
    }

    return(
        <div>
            <h3>{props.day}</h3>
            <button onClick={handleAddTask}>Добавить задачу</button>
            {tasks.map((task) => (
                <InputTask key={task.id} id={task.id} 
                onDelete={handleDelTask}
                onComplit={handleComplitTask} />
            ))}
        </div>
    )
}





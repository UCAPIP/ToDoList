import { useState } from "react"

const InputTask = ({id, onDelete}) => {

    const TaskValue = (props) => {
    
        return(
            <div>
                {props.taskText}
                <button onClick={() => onDelete(id)}>Удалить</button>
            </div>
        )  
    }

    const [showComponent, setShowCpmponent] = useState(false)
    const [text, setText] = useState('')

    function handleClick(){
        showComponent ? setShowCpmponent(false) : setShowCpmponent(true)
    }

    function handleChange(e){
        setText(e.target.value)
    }

    return(
        <div className="bg-cyan-300 m-2">
            {showComponent ? <TaskValue taskText={text}/> : <input type="text" value={text} onChange={handleChange}/>}
            <button onClick={handleClick}>{showComponent ? 'Редактировать' : 'Сохранить'}</button>
        </div>
    )}


export default function Day(props){

    const [tasks, setTasks] = useState([])

    function handleAddTask(){
        const newTaskId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1
        setTasks(prevTasks => [...prevTasks, {id: newTaskId}])
    }

    function handleDelTask(id){
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
    }

    return(
        <div>
            <h3>{props.day}</h3>
            <button onClick={handleAddTask}>Добавить задачу</button>
            {tasks.map((task) => (
                <InputTask key={task.id} id={task.id} onDelete={handleDelTask} />
            ))}
        </div>
    )
}





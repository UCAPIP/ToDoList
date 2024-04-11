import { useState } from "react";


const TaskValue = (props) => {

    const [isComplit, setIsComplit] = useState(false)

    function handleComplitTask(){
        setIsComplit(true)
    }

    return(
        <div  className="bg-cyan-300 m-2">
            {isComplit ? 
            <p className="line-through bg-cyan-300 p-2">{props.taskText}</p> :
            <div>
                <p className="bg-cyan-300 p-2">{props.taskText}</p>
                <div className="bg-cyan-300 flex flex-row gap-2">
                    <button className="bg-cyan-400 p-2 hover:bg-red-200" 
                    onClick={() => props.onDelete(props.id)}>Удалить</button>
                    <button className="bg-cyan-400 p-2 hover:bg-green-200"
                    onClick={handleComplitTask}>Завершить</button>
                </div>
            </div>
            }
            
        </div>
    )  
}

export default TaskValue;
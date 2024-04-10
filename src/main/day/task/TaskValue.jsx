

const TaskValue = (props) => {
    return(
        <div  className="bg-cyan-300 m-2">
            {props.taskText}
            <button onClick={() => props.onDelete(props.id)}>Удалить</button>
        </div>
    )  
}

export default TaskValue;
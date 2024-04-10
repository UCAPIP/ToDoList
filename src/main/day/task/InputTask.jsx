import { useState } from "react"
import TaskValue from "./TaskValue"

const InputTask = ({id, onDelete}) => {

    const [showComponent, setShowCpmponent] = useState(false)
    const [text, setText] = useState('')

    function handleClick(){
        showComponent ? setShowCpmponent(false) : setShowCpmponent(true)
    }

    function handleChange(e){
        setText(e.target.value)
    }

    return(
        <div  className="bg-cyan-300 m-2">
            {showComponent ? 
            <TaskValue taskText={text} id={id} onDelete={onDelete} /> : 
            <input type="text" value={text} onChange={handleChange} className="m-2"/>}
            <button onClick={handleClick}>{showComponent ? 'Редактировать' : 'Сохранить'}</button>
        </div>
    )}

    export default InputTask;
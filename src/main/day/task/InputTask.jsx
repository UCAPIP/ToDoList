import { useState } from "react"
import TaskValue from "./TaskValue"
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import CreateIcon from '@mui/icons-material/Create';

const InputTask = ({id, onDelete, onComplit}) => {

    const [showComponent, setShowCpmponent] = useState(false)
    const [text, setText] = useState('')

    function handleClick(){
        showComponent ? setShowCpmponent(false) : setShowCpmponent(true)
    }

    function handleChange(e){
        setText(e.target.value)
    }

    return(
        <div className="bg-gray-200 m-2 p-3">
            {showComponent ? 
                <div>
                    <TaskValue taskText={text} id={id} onDelete={onDelete} onComplit={onComplit} />
                    <Button variant="outlined" color="secondary" size="small" startIcon={<CreateIcon />}
                    onClick={handleClick} >Редактировать</Button>
                </div>
                : 
                <div>
                    <input type="text" value={text} onChange={handleChange} className="m-2"/>
                    <Button variant="outlined" color="secondary" size="small" startIcon={<SaveIcon />}
                    onClick={handleClick} >Сохранить</Button>
                </div>}
        </div>
    )}

    export default InputTask;
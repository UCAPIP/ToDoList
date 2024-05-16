import { useState } from "react"
import TaskValue from "./TaskValue"
import Button from '@mui/material/Button'
import SaveIcon from '@mui/icons-material/Save'
import CreateIcon from '@mui/icons-material/Create'
import TextField from '@mui/material/TextField'

const InputTask = (props, {id, onDelete, onComplit}) => {

    const [showComponent, setShowCpmponent] = useState(true)
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
                    <TaskValue taskText={props.name} id={id} onDelete={props.onDelete} onComplit={onComplit} />
                    {/* <p>{props.name}</p> */}
                    <Button variant="outlined" color="secondary" size="small" startIcon={<CreateIcon />}
                    onClick={handleClick} >Редактировать</Button>
                </div>
                : 
                <div>
                    {/* <input type="text" value={props.name} onChange={handleChange} className="m-2"/> */}
                    <TextField
                    label="Редактировать задачу"
                    placeholder="Placeholder"
                    multiline
                    id="outlined-controlled"
                    value={props.name}
                    onChange={(event) => {
                        props.setName(event.target.value)
                    }}/>
                    <Button variant="outlined" color="secondary" size="small" startIcon={<SaveIcon />}
                    onClick={handleClick} >Сохранить</Button>
                </div>}
        </div>
    )}

    export default InputTask;
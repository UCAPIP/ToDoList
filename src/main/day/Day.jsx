import { useState } from "react"
import InputTask from "./task/InputTask"
import * as React from 'react';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import InputPopup from "./task/InputPopup";

export default function Day(props){

    const [tasks, setTasks] = useState([])
    const [save, setSave] = useState(false)
    const [name, setName] = useState('')

    function handleAddTask(event){
        const newTaskId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1
        setTasks(prevTasks => [...prevTasks, {id: newTaskId}])
        setAnchorEl(anchorEl ? null : event.currentTarget)
    }

    function handleDelTask(newTaskId){
        setTasks(prevTasks => prevTasks.filter(task => task.newTaskId !== newTaskId))
    }

    function handleComplitTask(newTaskId){
        setTasks(prevTasks => prevTasks.filter(task => task.newTaskId !== newTaskId))
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return(
        <div className="width-89">
            <h3>{props.day}</h3>
            <Button aria-describedby={id} type="button" variant="contained" color="success" size="small" startIcon={<AddCircleIcon />}
            onClick={handleAddTask}>Создать задачу</Button>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                    <InputPopup id={id} 
                    anchorEl={anchorEl} setAnchorEl={setAnchorEl} 
                    save={save} setSave={setSave}
                    name={name} setName={setName}/>
                </Box>
            </Popper>
            {/* ЗДЕСЬ НУЖНО ОТРИСОВАТЬ ТАСКУ СОЗДАННУЮ В InputPopup */}
            
            {save ? <>{tasks.map((task) => (
                    <InputTask key={task.newTaskId} id={task.newTaskId} 
                    name={name} setName={setName}
                    onDelete={handleDelTask}
                    onComplit={handleComplitTask} />
                    ))}</> : <>___</>}
        </div>
    )
}






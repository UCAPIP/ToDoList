import { useState } from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';



const TaskValue = (props) => {

    const [isComplit, setIsComplit] = useState(false)

    function handleComplitTask(){
        setIsComplit(true)
    }

    return(
        <div  className="bg-gray-200 m-2">
            {isComplit ? 
            <p className="line-through bg-gray-200 p-2">{props.taskText}</p> :
            <div>
                <p className="bg-gray-200 p-2">{props.taskText}</p>
                <div className="bg-gray-200 flex flex-row gap-2">
                    <Button variant="outlined" color="error" size="small" startIcon={<DeleteIcon />}
                    onClick={() => props.onDelete(props.id)}>Удалить</Button>
                    <Button variant="outlined" color="success" size="small" startIcon={<CheckIcon />}
                    onClick={handleComplitTask}>Завершить</Button>
                </div>
            </div>
            }
            
        </div>
    )  
}

export default TaskValue;
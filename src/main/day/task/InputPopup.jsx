import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SaveIcon from '@mui/icons-material/Save'
import { useState } from "react"

const InputPopup = (props) => {

    const handleClick = (event) => {
        props.setAnchorEl(props.anchorEl ? null : event.currentTarget)
        props.setSave(true)
      }

    return(
        <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
            <TextField
            label="Новая задача"
            placeholder="Placeholder"
            multiline
            id="outlined-controlled"
            value={props.name}
            onChange={(event) => {
                props.setName(event.target.value)
            }}
            />
            </div>
            <Button 
            aria-describedby={props.id}
            variant="outlined" color="secondary" size="small" startIcon={<SaveIcon />}
            onClick={handleClick}
            >Сохранить</Button>
        </Box>
    )
}

export default InputPopup;
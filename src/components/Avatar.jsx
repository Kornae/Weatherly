import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';



export default function LetterAvatars() {
    const [unit, setUnit] = useState(false)

    function handleTrueClick() {
        setUnit(true)
    }

    function handleFalseClick() {
        setUnit(false)
    }

    const trueStyle = {
        bgcolor: '#ffffff',
        color: '#1a1a1a',
        fontSize: '.8rem', width: 40, height: 40, padding: '15px',
        boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px', margin: '5px'
        
    }

    const falseStyle = {
        bgcolor: '#1a1a1a',
        color: '#ffffff',
        fontSize: '.6rem', width: 25, height: 25, padding: '15px', margin: '5px'
    }

    return (
        <Stack direction="row" spacing={1} sx={{}}>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Avatar onClick={handleTrueClick} sx={unit ? trueStyle : falseStyle} >℃</Avatar>
                <Avatar onClick={handleFalseClick}  sx={unit ? falseStyle : trueStyle} >℉</Avatar>
            </div>
        </Stack>
    );
}
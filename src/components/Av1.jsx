import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function LetterAvatars1(props) {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar sx={{
                bgcolor: '#fad25d'
            }}><ArrowUpwardIcon fontSize='small' /></Avatar>
            <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{props.sunrise} AM</p>
        </Stack>
    );
}
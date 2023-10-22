import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function LetterAvatars(props) {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: '#fad25d' }}><ArrowDownwardIcon fontSize='small' /></Avatar>
            <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{props.sunset} PM</p>
        </Stack>
    );
}
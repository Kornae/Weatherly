import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function LetterAvatars1() {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar sx={{
                bgcolor: '#fad25d'}}><ArrowUpwardIcon fontSize='small' /></Avatar>
            <p>6:23 AM</p>
        </Stack>
    );
}
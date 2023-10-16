import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function LetterAvatars() {
    return (
        <Stack direction="row" spacing={1}>
            <Avatar sx={{ bgcolor: '#1a1a1a', fontSize: '.8rem', width: 30, height: 30, padding:'15px' }}>℃</Avatar>
            <Avatar sx={{ bgcolor: '#ffffff', color: '#1a1a1a', fontSize: '.8rem', width: 30, height: 30, padding:'15px' }}>℉</Avatar>
        </Stack>
    );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';

export default function BasicTextFields(props) {
    return (
        <Box
            onSubmit={props.submit}
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 'auto', borderBottom: 'solid .5px #0a0a0a' }}
            noValidate
            autoComplete="off"
        >
            <IconButton sx={{ p: '5px' }} aria-label="menu">
                <span class="material-symbols-outlined">
                    location_on
                </span>
            </IconButton>
            <InputBase
                onChange={props.change}
                onKeyUp={props.onKeyDown}
                sx={{ m: 1, flex: 1 }}
                placeholder="Search for places..."
                inputProps={{ 'aria-label': 'search for places...' }}
            />
            <IconButton sx={{ p: '5px' }} aria-label="menu" onClick={props.click}>
                <span class="material-symbols-outlined">
                    search
                </span>
            </IconButton>
        </Box>
    );
}